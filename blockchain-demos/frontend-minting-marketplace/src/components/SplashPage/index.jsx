import React from 'react';

import './SplashPage.css';

/* importing images*/
import Metamask from './images/metamask_logo.png';
import logoAuthor from './images/nispsey-hussle.png';
import logoDigital from './images/digital.png';
import Nft_1 from './images/exclusive_1.jpeg';
import Nft_2 from './images/exclusive_2.jpeg';
import Nft_3 from './images/exclusive_3.jpeg';
import Nft_4 from './images/image_3.png';
import NftImage from './images/circle_nipsey.png';
import UnlockableVideo from './images/unlockbleVideo.png';
import Teammate_1 from './images/mrlee.jpeg';
import Teammate_2 from './images/blacc-sam.png';
import Teammate_3 from './images/south-dig.png';
import Teammate_4 from './images/rair-block.png';
import JoinCommunity from './images/join_com.jpeg';


/* importing Components*/
import TokenLeft from './TokenLeft/TokenLeft';
import ExclusiveNft from './ExclusiveNft/ExclusiveNft';
import UnlockVideos from './UnlockVideos/UnlockVideos';
import TeamMeet from './TeamMeet/TeamMeet';
import JoinCom from './JoinCom/JoinCom';

const SplashPage = () => {
    return (
        <div className="home-splash--page">
            <div className="information-author">
                <div className="block-splash">
                    <div className="logo-author">
                        <img src={logoDigital} alt="southwest digital" />
                        <img src={logoAuthor} alt="logo-author" />
                    </div>
                    <div className="text-splash">
                        <div className="title-splash">
                            <h3>Enter the</h3>
                            <span className="text-gradient">Nipseyverse</span>
                        </div>
                        <div className="text-description">
                            <p>
                                1000 Unique NFTs unlock exlusive streaming
                                for the final Nipsey Hussle album. Proceeds
                                directly benefit the Airmiess Asghedom
                                estate on chain and Eritrean Charity
                            </p>
                        </div>
                        <div className="btn-buy-metamask">
                            <button><img className="metamask-logo" src={Metamask} alt="metamask-logo" /> Preorder with ETH</button>
                        </div>
                    </div>
                </div>
            </div>
            <TokenLeft Metamask={Metamask} />
            <div className="special-offer">
                <div className="offer-desp">
                    <div className="offer-title">
                        <h3><span className="text-gradient">Proud</span> to pay</h3>
                    </div>

                    <div className="text-offer">
                        <p>
                            Nipsey invented Proud to Pay, a movement adopted and expanded by the NFT
                            community. Your NFT is access and ownership in an eclusive community of
                            like minded fans, artists, and industry veterans.
                        </p>
                        <p>
                            Now is your opportunity to own a unique piece of internet history.
                            Mint today and receive unique streaming NFT artwork at launch.
                        </p>
                    </div>
                    <div className="btn-buy-metamask">
                        <button><img className="metamask-logo" src={Metamask} alt="metamask-logo" /> Preorder with ETH</button>
                    </div>
                </div>
                <div className="offer-fans">
                    <div className="offer-1"></div>
                    <div className="offer-2"></div>
                    <div className="offer-3"></div>
                </div>
            </div>
            <ExclusiveNft
                Nft_1={Nft_1}
                Nft_2={Nft_2}
                Nft_3={Nft_3}
                Nft_4={Nft_4}
                NftImage={NftImage}
            />
            <UnlockVideos
                UnlockableVideo={UnlockableVideo}
            />
            <JoinCom
                Metamask={Metamask}
                JoinCommunity={JoinCommunity}
            />
            <TeamMeet
                Teammate_1={Teammate_1}
                Teammate_2={Teammate_2}
                Teammate_3={Teammate_3}
                Teammate_4={Teammate_4}
            />
        </div>
    )
}

export default SplashPage
