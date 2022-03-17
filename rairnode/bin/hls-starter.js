const streamDecrypter = require('./stream-decrypter');
const mongoose = require('mongoose');
const HLSServer = require('@rair/hls-server');
const log = require('./utils/logger')(module);
const { vaultKeyManager } = require('./vault/vaultKeyManager');
const { vaultAppRoleTokenManager } = require('./vault/vaultAppRoleTokenManager');

module.exports = async () => {
  const _mongoose = await mongoose.connect(process.env.PRODUCTION === 'true' ? process.env.MONGO_URI : process.env.MONGO_URI_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((c) => {
      if (process.env.PRODUCTION === 'true') {
        log.info('DB Connected!');
      } else {
        log.info('Development DB Connected!');
      }
      return c;
    })
    .catch((e) => {
      log.error('DB Not Connected!');
      log.error(`Reason: ${e.message}`);
    });

  const File = _mongoose.model('File', require('./models/file'), 'File');

  const getMediaConfigStoreData = async (mediaId) => {
    // run the vault secret query in parallel
    // don't use it yet, we'll switch over to this later
    try {
      const vaultToken = vaultAppRoleTokenManager.getToken();
      console.log('vaultToken', vaultToken);

      const vaultRes = await vaultKeyManager.read({
        secretName: mediaId,
        vaultToken
      });
      console.log('vault res success', vaultRes);

    } catch(err) {
      // swallow error for now
      console.log('Error getting secret from vault', err);
      console.log('========', err)
    }

    const mongoRes = await File.findOne({ _id: mediaId }).toObject();
    return mongoRes;
  } 

  return HLSServer({
    mediaConfigStore: getMediaConfigStoreData,
    segmentTransformation: streamDecrypter,
    authCallback: req => req.token && req.token.media_id === req.mediaId
  });
};
