npm install @truffle/ropsten.infura.io/ws/v3/4b6f463c8f9e46abbe9ad02c94cc31
const HDWalletProvider = require("https://ropsten.infura.io/ws/v3/4b6f463c8f9e46abbe9ad02c94cc31");
const HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/<INFURA_PROJECT_ID>", 2); 
module.exports = {
  networks: {;
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/ws/v3/4b6f463c8f9e46abbe9ad02c94cc31>")
      },
      network_id: 3
    }
  }
};
truffle compile
truffle migrate --network ropsten
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract MyContract {
  ISwapRouter router;

  function doSomethingWithSwapRouter() {
    // router.exactInput(...);
  }
}

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract MyContract {
  ISwapRouter router;

  function doSomethingWithSwapRouter() {
    // router.exactInput(...);
  }
}
