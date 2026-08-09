const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Vivek kumar Gupta\\Desktop\\Dhiraj';
const source = path.join(root, 'shopify');
const targets = ['brand', 'commerce', 'finance', 'growth', 'leadgen', 'media', 'marketplace'];

const components = ['Navbar.jsx', 'TeamMembers.jsx', 'ContactUs.jsx', 'Contact.jsx'];

targets.forEach(target => {
  const targetDir = path.join(root, target);
  
  // 1. Copy Components
  const sourceComponentsDir = path.join(source, 'src', 'components');
  const targetComponentsDir = path.join(targetDir, 'src', 'components');
  
  if (!fs.existsSync(targetComponentsDir)) {
    fs.mkdirSync(targetComponentsDir, { recursive: true });
  }
  
  components.forEach(comp => {
    const srcPath = path.join(sourceComponentsDir, comp);
    const destPath = path.join(targetComponentsDir, comp);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
  });

  // 2. Copy Public/team assets
  const sourceTeamDir = path.join(source, 'public', 'team');
  const targetTeamDir = path.join(targetDir, 'public', 'team');
  
  if (fs.existsSync(sourceTeamDir)) {
    if (!fs.existsSync(targetTeamDir)) {
      fs.mkdirSync(targetTeamDir, { recursive: true });
    }
    const images = fs.readdirSync(sourceTeamDir);
    images.forEach(img => {
      fs.copyFileSync(path.join(sourceTeamDir, img), path.join(targetTeamDir, img));
    });
  }

  // 3. Update App.jsx to render them (assuming it is standard App.jsx)
  // Since we want to display Navbar, TeamMembers, ContactUs, Contact
  // We'll replace App.jsx with a skeleton that renders these exactly.
  const appJsxCode = `import Navbar from './components/Navbar'
import TeamMembers from './components/TeamMembers'
import ContactUs from './components/ContactUs'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <Navbar />
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pt-24">
        <TeamMembers />
        <ContactUs />
      </main>
      <Contact reveal={true} />
    </div>
  )
}

export default App
`;
  const appJsxPath = path.join(targetDir, 'src', 'App.jsx');
  fs.writeFileSync(appJsxPath, appJsxCode);
});

console.log("Copy complete!");
