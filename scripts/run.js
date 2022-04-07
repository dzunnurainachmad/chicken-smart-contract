
const hre = require("hardhat");

async function main() {
  const Chicken = await hre.ethers.getContractFactory("Chicken");
  const chicken = await Chicken.deploy();

  await chicken.deployed();

  console.log("chicken deployed to:", chicken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
