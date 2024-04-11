import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

async function getBalance(address) {
  try {
    const publicKey = new PublicKey(address);
    const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;
    console.log(
      `💰 Finished! The balance for the wallet at address ${address} is ${balanceInSOL} SOL!`
    );
  } catch (error) {
    console.error(`❌ Error: Invalid wallet address (${address})`);
  }
}

const famousWallets = ["toly.sol", "shaq.sol", "mccann.sol"];

famousWallets.forEach(async (wallet) => {
  await getBalance(wallet);
});
