const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Vivek kumar Gupta\\Desktop\\Dhiraj';
const source = path.join(root, 'shopify');
const targets = ['brand', 'commerce', 'finance', 'growth', 'leadgen', 'media', 'marketplace'];

targets.forEach(target => {
  const targetDir = path.join(root, target);
  
  // 1. Copy ThePromise.jsx
  const sourcePromise = path.join(source, 'src', 'components', 'ThePromise.jsx');
  const targetPromise = path.join(targetDir, 'src', 'components', 'ThePromise.jsx');
  if (fs.existsSync(sourcePromise)) {
    fs.copyFileSync(sourcePromise, targetPromise);
  }

  // 2. Update App.jsx to include ThePromise
  const appJsxPath = path.join(targetDir, 'src', 'App.jsx');
  if (fs.existsSync(appJsxPath)) {
    let content = fs.readFileSync(appJsxPath, 'utf8');
    
    // Check if it's already imported
    if (!content.includes("import ThePromise")) {
      content = content.replace(
        "import ContactUs from './components/ContactUs'",
        "import ContactUs from './components/ContactUs'\nimport ThePromise from './components/ThePromise'"
      );
    }
    
    // Add it after ContactUs
    if (!content.includes("<ThePromise />") && !content.includes("<ScrollReveal><ThePromise /></ScrollReveal>")) {
      content = content.replace(
        "<ContactUs />\n      </main>",
        "<ContactUs />\n        <ScrollReveal><ThePromise /></ScrollReveal>\n      </main>"
      );
    }
    
    fs.writeFileSync(appJsxPath, content);
  }
});

console.log("ThePromise copied and added to App.jsx");
