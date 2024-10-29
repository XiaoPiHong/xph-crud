import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 获取当前文件的路径（适配 ES 模块）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取 package.json 文件路径
const packageJsonPath = path.resolve(__dirname, "package.json");

// 异步函数处理文件读取和写入
async function bumpVersion() {
  try {
    // 读取并解析 package.json 文件
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));

    // 获取当前版本号
    let version = packageJson.version.split(".").map(Number);

    // 递增补丁版本号 (version[2])
    version[2] += 1;

    // 如果补丁版本号达到 10，递增次版本号 (version[1])，并将补丁版本号重置为 0
    if (version[2] >= 10) {
      version[2] = 0;
      version[1] += 1;
    }

    // 如果次版本号达到 10，递增主版本号 (version[0])，并将次版本号重置为 0
    if (version[1] >= 10) {
      version[1] = 0;
      version[0] += 1;
    }

    // 更新 package.json 中的版本号
    packageJson.version = version.join(".");

    // 将修改后的内容写回 package.json
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

    console.log(`Version bumped to ${packageJson.version}`);
  } catch (error) {
    console.error("Error updating version:", error);
  }
}

// 调用版本号递增函数
bumpVersion();
