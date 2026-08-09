const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Vivek kumar Gupta\\Desktop\\Dhiraj';
const targets = ['shopify', 'brand', 'commerce', 'finance', 'growth', 'leadgen', 'media', 'marketplace'];

targets.forEach(target => {
  const navbarPath = path.join(root, target, 'src', 'components', 'Navbar.jsx');
  
  if (fs.existsSync(navbarPath)) {
    let content = fs.readFileSync(navbarPath, 'utf8');
    
    // Replace the href for the logo
    content = content.replace(
      '<motion.a \n          href="#" \n          onMouseMove={handleMouseMove}',
      '<motion.a \n          href="http://localhost:5173/" \n          onMouseMove={handleMouseMove}'
    );

    // Some systems might have different carriage returns
    content = content.replace(
      '<motion.a \r\n          href="#" \r\n          onMouseMove={handleMouseMove}',
      '<motion.a \r\n          href="http://localhost:5173/" \r\n          onMouseMove={handleMouseMove}'
    );
    
    // Or just a more robust replace using regex
    content = content.replace(/<motion\.a\s+href="#"\s+onMouseMove=\{handleMouseMove\}/g, '<motion.a \n          href="http://localhost:5173/" \n          onMouseMove={handleMouseMove}');

    fs.writeFileSync(navbarPath, content);
  }
});

console.log("Logo links updated!");
