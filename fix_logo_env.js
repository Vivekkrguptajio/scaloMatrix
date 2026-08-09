const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Vivek kumar Gupta\\Desktop\\Dhiraj';
const targets = ['shopify', 'brand', 'commerce', 'finance', 'growth', 'leadgen', 'media', 'marketplace'];

targets.forEach(target => {
  const navbarPath = path.join(root, target, 'src', 'components', 'Navbar.jsx');
  
  if (fs.existsSync(navbarPath)) {
    let content = fs.readFileSync(navbarPath, 'utf8');
    
    // Replace the hardcoded string with the env variable expression
    content = content.replace(
      'href="http://localhost:5173/"',
      'href={import.meta.env.VITE_MAIN_URL || "http://localhost:5173"}'
    );
    
    fs.writeFileSync(navbarPath, content);
  }
});

console.log("Logo links updated to use env variable!");
