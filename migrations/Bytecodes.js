const UniswapV2FactoryBytecode = require('@uniswap/v2-core/build/UniswapV2Factory.json').bytecode
const UniswapV2FactoryBytecode = require('@uniswap/v2-core/build/UniswapV2Factory.json').bytecode;

const UniswapV2Library = await ethers.getContractFactory(
  [
    "constructor(address _feeToSetter)",
    "function createPair(address tokenA, address tokenB) external returns (address pair)",
  ],
  UniswapV2FactoryBytecode
);
const [owner] = await ethers.getSigners();
const uniswapV2Library = await UniswapV2Library.deploy(owner.address);
