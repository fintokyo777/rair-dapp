import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rFetch, useRfetch } from '../../utils/rFetch.js';
import { Link } from 'react-router-dom';

// React Redux types
import * as authTypes from './../../ducks/auth/types';


import chainData from '../../utils/blockchainData';

const MyNFTs = (props) => {
	const dispatch = useDispatch();
	const { token } = useSelector(store => store.accessStore)

	const [tokens, setTokens] = useState([])

	const fetchData = useCallback(async () => {
		let response = rFetch('/api/nft');

		if (response.success) {
			let tokenData = []
			for await (let token of response.result) {
				let contractData = rFetch(`/api/contracts/${token.contract}`)
				tokenData.push({
					...token,
					...contractData.contract
				})
			}
			setTokens(tokenData);
		}

		if (response.error && response.message) {
			dispatch({ type: authTypes.GET_TOKEN_ERROR, error: response.error })
		}

	}, [dispatch])

	const { primaryColor, textColor } = useSelector(state => state.colorStore)

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return <div className='row px-0 mx-0'>
		{tokens.map((item, index) => {
			return <div
				key={index}
				className='p-2 my-2 col-4'>
				<div className='w-100 bg-blockchain p-2' style={{
					border: `solid 1px ${textColor}`,
					backgroundImage: `url(${chainData[item?.blockchain]?.image})`,
					backgroundColor: `var(--${primaryColor}-transparent)`,
				}}>
					<small style={{ fontSize: '0.7rem' }}>{item.contract}:{item.uniqueIndexInContract}</small>
					<br />
					{item.metadata ?
						<>
							<div className='w-100'>
								<img alt='NFT' src={item.metadata.image} style={{ width: '100%', height: 'auto', maxHeight: '25vh' }} />
							</div>
							<b>{item.metadata.name}</b><br />
							<small>{item.metadata.description}</small><br />
							<small>{item.metadata.attributes.length} attributes!</small>
						</>
						:
						<b> No metadata available </b>
					}
					<br />
					<Link to={`/token/${item.contract}/${item.uniqueIndexInContract}`} className='btn btn-stimorol'>
						View Token
					</Link>
				</div>
			</div>
		})}
	</div>
}

export default MyNFTs;