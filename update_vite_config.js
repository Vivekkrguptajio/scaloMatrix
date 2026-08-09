const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Vivek kumar Gupta\\Desktop\\Dhiraj';
const folders = ['brand', 'commerce', 'finance', 'growth', 'leadgen', 'media', 'shopify'];

folders.forEach(folder => {
  const configPath = path.join(root, folder, 'vite.config.js');
  if (fs.existsSync(configPath)) {
    let content = fs.readFileSync(configPath, 'utf8');
    
    // Check if server block already exists
    if (!content.includes('server: {')) {
      // Find the end of the plugins array or just insert before the closing brace of defineConfig
      content = content.replace(/}\)$/, `,
  server: {
    allowedHosts: ['${folder}.localhost', 'localhost'],
    host: true
  }
})`);
      
      // Some config might end with "});" instead of "})"
      if (content === fs.readFileSync(configPath, 'utf8')) {
          content = content.replace(/}\);$/, `,
  server: {
    allowedHosts: ['${folder}.localhost', 'localhost'],
    host: true
  }
});`);
      }
      
      fs.writeFileSync(configPath, content);
      console.log(`Updated ${folder}/vite.config.js`);
    } else {
      console.log(`Skipped ${folder} (already has server block)`);
    }
  } else {
    console.log(`Missing ${folder}/vite.config.js`);
  }
});
