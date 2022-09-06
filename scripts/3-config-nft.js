import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x37bC028D0900470d8fCA7Bf28243A9321B6dd29E");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Mutant Hexa Ney Ape",
        description: "This NFT will give you access to NeyDAO!",
        image: readFileSync("scripts/assets/nft-NeyDAO.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();