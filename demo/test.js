const nodeAbi = require("node-abi");

module.exports = () => {
  // node & electron 的abi须一致才可以在electron中调用node的模块
  console.log("object :", nodeAbi.getAbi("10.16.3", "node"));
  console.log("object :", nodeAbi.getAbi("4.0.0", "electron"));
};
