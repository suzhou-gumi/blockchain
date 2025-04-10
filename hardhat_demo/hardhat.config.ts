// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "hardhat-resolc";
import "./tasks/compile-revive";

const config: any = {
  solidity: "0.8.28",

  networks: {
    hardhat: {
      polkavm: true,
      nodeConfig: {
        nodeBinaryPath:
          "/home/gumi/Public/polkadot-sdk/target/release/substrate-node",
        rpcPort: 9944,
        dev: true,
      },
      adapterConfig: {
        adapterBinaryPath:
          "/home/gumi/Public/polkadot-sdk/target/release/eth-rpc",
        dev: true,
      },
    },
  },

  // using binary compiler
  resolc: {
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
        runs: 400,
      },
      evmVersion: "istanbul",
      compilerPath: "/home/gumi/.cargo/bin/resolc",
      standardJson: true,
    },
  },
};

export default config;
