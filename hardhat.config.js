require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xab401c9ba23982674fbf63b6caa6d7c92876d048a2c3f48e0c03d3375daead46"], //Your private key starting with "0x"
    },
  },
};
