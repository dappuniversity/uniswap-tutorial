const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations); 
  moody@MacBook-Pro ~/I/u/demo> ls node_modules/@uniswap/v2-core/contracts
UniswapV2ERC20.sol    UniswapV2Pair.sol     libraries/
UniswapV2Factory.sol  interfaces/           test/
moody@MacBook-Pro ~/I/u/demo> ls node_modules/@uniswap/v2-periphery/contracts/
UniswapV2Migrator.sol  examples/              test/
UniswapV2Router01.sol  interfaces/
UniswapV2Router02.sol  libraries/
};
