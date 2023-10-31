# sellTokenSwap Interface


- Website: [selltoken.org](https://selltoken.org)
- Interface: [app.selltoken.org](https://app.selltoken.org)
- Twitter: [@TrustTheTrident](https://twitter.com/TrustTheTrident)
- Email: [info@selltoken.org](info@selltoken.org)
- Discord: [SellToken](https://discord.gg/hnGd6VTd)
- Whitepaper: [Link](https://selltoken.org/Whitepaper.pdf)


## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface only works on testnets where both 

The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

## Accessing SellToken Interface V1

The SellToken Interface supports swapping against, and migrating or removing liquidity from SellToken V1. However,
if you would like to use SellToken V1, the Uniswap V1 interface for mainnet and testnets is accessible via IPFS gateways 
