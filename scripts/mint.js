async function main() {
  const CONTRACT_ADDRESS = "0x0a3F907363617d131F864FE93fa4565e0a98DD75";
  const METADATA_URI =
    "ipfs://bafkreiey2bvnjhipudzxu4ddrlpdugnkoxpisghufgvrwjnli2oiildopy";

  const [owner] = await ethers.getSigners();
  const nft = await ethers.getContractAt("DigitalLegacyNFT", CONTRACT_ADDRESS);

  const tx = await nft.mint(owner.address, METADATA_URI);
  await tx.wait();

  console.log("✅ NFT minteado a:", owner.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
