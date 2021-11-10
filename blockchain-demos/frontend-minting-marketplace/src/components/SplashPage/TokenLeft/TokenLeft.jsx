import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const TokenLeft = ({ Metamask }) => {
    return (
        <div className="left-tokens">
            <div className="block-left-tokens">
                <div className="progress-tokens">
                    {/* <CircularProgress
                        value={75}
                        // color="secondary"
                        variant="determinate"
                        sx={{
                            color: (theme) => (theme.palette.mode === 'light' ? '#AF6FD8' : '#308fe8')
                        }}
                    />
                    <div className="text-progress">
                        350<br />
                        left
                    </div> */}
                    <Box sx={{ position: 'relative' }}>
                        <CircularProgress
                            className="progress-grey"
                            variant="determinate"
                            sx={{
                                color: (theme) =>
                                    theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                            }}
                            size={40}
                            thickness={1.5}
                            value={100}
                        />
                        <CircularProgress
                            className="progress-main"
                            variant="determinate"

                            sx={{
                                color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                                position: 'absolute',
                                left: 0,
                            }}
                            size={40}
                            thickness={4}
                            value={75}
                        />
                    </Box>
                    <div className="text-progress">
                        350<br />
                        left
                    </div>
                </div>
                <div className="down-text">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br />
                    dolore eu fugiat nulla pariatur.   Excepteur sint occaecat.
                </div>
            </div>
            <div className="left-tokens-content">
                <div className="title-tokens">
                    <h3>The <span className="text-gradient">Nipsey Hussle</span> legacy</h3>
                </div>
                <div className="tokens-description">
                    <p>
                        October 2013, Nipsey unveils the Crenshaw EP with a groundbreaking
                        release strategy. Sell 1000 copies for $100 each. Within 24 hours all
                        1000 were spoken for. With his next release Mailbox Money, Nipsey
                        upped the ante to $1000 for only 100 copies.
                    </p>
                    <p>
                        In collaboration with award winning producer Mr. Lee and the
                        Asghedom estate comes the final album as an exclusive 1000 only
                        streaming NFT.
                    </p>
                </div>
                <div className="btn-buy-metamask">
                    <button>Newsletter</button>
                </div>
            </div>
        </div>
    )
}

export default TokenLeft
