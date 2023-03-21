const hre = require("hardhat");

async function main() {
    await hre.run("compile");
    // we are going to deploy this
    const SimpleStoreage = await hre.ethers.getContractFactory("SimpleStorage");
    const simpleStroage = await SimpleStoreage.deploy();
    await simpleStroage.deployed();
    const transactionResponse = await simpleStroage.store(1);
    const transationReceipt = await transactionResponse.wait();
  //  console.log(transationReceipt);
  //  console.log(transationReceipt.events);
    console.log(transationReceipt.events[0].args.oldNumber.toString());
    console.log(transationReceipt.events[0].args.newNumber.toString());
    console.log(transationReceipt.events[0].args.addedNumber.toString());
    console.log(transationReceipt.events[0].args.sender);
   // 
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1;
})