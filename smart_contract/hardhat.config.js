// https://eth-sepolia.g.alchemy.com/v2/FDHOX0QDVOKa4qUjyJLq1JyFiHxUTOfY

require('@nomiclabs/hardhat-waffle')//用于智能合约测试的插件

module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia :{
      url: 'https://eth-sepolia.g.alchemy.com/v2/FDHOX0QDVOKa4qUjyJLq1JyFiHxUTOfY',
      accounts: ['3d04d4fac4d30743695f4cb60e6aea11d557e8e9fc3db164107f347107c6dc4d']
    }
  }
}