pragma solidity ^0.6.6;

interface ILiquidityValueCalculator {
    function computeLiquidityShareValue(uint liquidity, address tokenA, address tokenB) external returns (uint tokenAAmount, uint tokenBAmount);

mkdir contracts/interfaces
touch contracts/interfaces/ILiquidityValueCalculator.sol
touch contracts/LiquidityValueCalculator.sol
}
