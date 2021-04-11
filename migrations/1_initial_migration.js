
const YBTC = artifacts.require("YBTC");

module.exports = function(deployer) {
  deployer.deploy(YBTC);
};