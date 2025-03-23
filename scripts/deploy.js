const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const provider = hre.ethers.provider; // Get the provider

    // ✅ Fix: Get balance using provider
    const accountBalance = await provider.getBalance(deployer.address);

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance:", hre.ethers.formatEther(accountBalance), "ETH");

    const Tokenlockin  = await hre.ethers.getContractFactory("LockIn");
    const tokenLockinContract = await Tokenlockin.deploy();
    await tokenLockinContract.waitForDeployment();
    console.log("Contract deployed to: ", await tokenLockinContract.getAddress());
    
};

const runMain = async() => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
};

runMain();