import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get Private Key from environment or .env
let PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;

if (!PRIVATE_KEY) {
  const envFiles = [
    path.join(__dirname, 'brand', '.env'),
    path.join(__dirname, 'media', '.env'),
    path.join(__dirname, 'shopify', '.env'),
    path.join(__dirname, 'finance', '.env')
  ];
  for (const envPath of envFiles) {
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const match = envContent.match(/IMAGEKIT_PRIVATE_KEY=(.+)/);
      if (match) {
        PRIVATE_KEY = match[1].trim();
        break;
      }
    }
  }
}

const URL_ENDPOINT = process.env.VITE_IMAGEKIT_URL || 'https://ik.imagekit.io/i8tspeevf';

if (!PRIVATE_KEY) {
  console.error("❌ Error: IMAGEKIT_PRIVATE_KEY is required!");
  process.exit(1);
}

const authHeader = 'Basic ' + Buffer.from(PRIVATE_KEY + ':').toString('base64');

const SUBPROJECTS = ['brand', 'shopify', 'media', 'growth', 'leadgen', 'marketplace', 'finance', 'commerce', 'frontend'];

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

async function uploadFile(filePath, remoteFolder, fileName) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const base64File = fileBuffer.toString('base64');
    
    let mimeType = 'image/png';
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
    else if (ext === '.svg') mimeType = 'image/svg+xml';
    else if (ext === '.webp') mimeType = 'image/webp';
    else if (ext === '.avif') mimeType = 'image/avif';
    else if (ext === '.gif') mimeType = 'image/gif';

    const formData = new FormData();
    formData.append('file', `data:${mimeType};base64,${base64File}`);
    formData.append('fileName', fileName);
    formData.append('folder', remoteFolder);
    formData.append('useUniqueFileName', 'false');

    const res = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
      method: 'POST',
      headers: {
        'Authorization': authHeader
      },
      body: formData
    });

    const data = await res.json();
    if (res.ok) {
      console.log(`✅ Uploaded: ${remoteFolder}/${fileName} -> ${data.url}`);
    } else {
      console.error(`❌ Failed: ${remoteFolder}/${fileName} - ${data.message || JSON.stringify(data)}`);
    }
  } catch (err) {
    console.error(`❌ Error uploading ${filePath}:`, err.message);
  }
}

async function startUpload() {
  console.log("🚀 Starting complete ImageKit upload for all public folders...\n");

  let totalUploaded = 0;

  for (const proj of SUBPROJECTS) {
    const publicDir = path.join(__dirname, proj, 'public');
    if (!fs.existsSync(publicDir)) continue;

    const allFiles = getFilesRecursively(publicDir);
    for (const fullPath of allFiles) {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.svg', '.webp', '.avif', '.gif'].includes(ext)) {
        const relPath = path.relative(publicDir, fullPath);
        const folderOnIk = '/' + path.dirname(relPath).replace(/\\/g, '/');
        const fileName = path.basename(relPath);
        
        const finalFolder = folderOnIk === '/.' ? '/' : folderOnIk;
        console.log(`Uploading [${proj}] ${relPath} -> ImageKit ${finalFolder}`);
        await uploadFile(fullPath, finalFolder, fileName);
        totalUploaded++;
      }
    }
  }
  console.log(`\n🎉 SUCCESS! All ${totalUploaded} public images pushed to ImageKit!`);
}

startUpload();
