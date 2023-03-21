require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERIL_RPC_URL = process.env.GOERIL_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
        url: GOERIL_RPC_URL,
        accounts: [PRIVATE_KEY], // Metamask Account's PRIVATE_KEY
        chainId: 5
    }
},
};
