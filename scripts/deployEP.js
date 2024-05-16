const hre = require("hardhat");

async function main() {
  const ep = hre.ethers.deployContract("EntryPoint");

  await ep.waitForDeployment();

  console.log(`EP deployed to ${ep.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
