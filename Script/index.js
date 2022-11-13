import path from "path";
import fs from "fs";

import { fileURLToPath } from "url";
import { dirname } from "path";

// Database
import mongo from "./src/Model/mongo.js";
import Planning from "./src/Model/Planning.js";

// ========================================================================================================

mongo();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileTest = fs.readFileSync(
  path.resolve(__dirname, "src/Data/planning.json"),
  "utf-8"
);

const main = async () => {
  try {
    const data = await JSON.parse(fileTest);
    await Planning.insertMany(data);

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

main();
