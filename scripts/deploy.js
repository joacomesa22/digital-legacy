async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Desplegando con:", deployer.address);

  const Contract = await ethers.getContractFactory("DigitalLegacyNFT");
  const nft = await Contract.deploy();
  await nft.deployed();

  console.log("Contrato desplegado en:", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});