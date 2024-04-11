import fs from "fs";
import { Keypair } from "@solana/web3.js";
const keypair = Keypair.generate();
fs.appendFile(
  "keypair.txt",
  `[${keypair.secretKey.toString()}]`,
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);
