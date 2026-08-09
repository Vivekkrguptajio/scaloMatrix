const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\Vivek kumar Gupta\\Desktop\\Dhiraj';
const source = path.join(root, 'shopify');
const targets = ['brand', 'commerce', 'finance', 'growth', 'leadgen', 'media', 'marketplace'];

// Helper function to recursively copy directories
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    entry.isDirectory() ? copyDirSync(srcPath, destPath) : fs.copyFileSync(srcPath, destPath);
  }
}

targets.forEach(target => {
  const targetDir = path.join(root, target);
  
  // 1. Copy UI Components
  const sourceComponentsDir = path.join(source, 'src', 'components');
  const targetComponentsDir = path.join(targetDir, 'src', 'components');
  
  ['CustomCursor.jsx', 'ScrollToTop.jsx', 'ScrollReveal.jsx'].forEach(comp => {
    const srcPath = path.join(sourceComponentsDir, comp);
    const destPath = path.join(targetComponentsDir, comp);
    if (fs.existsSync(srcPath)) fs.copyFileSync(srcPath, destPath);
  });

  // 2. Copy index.css
  const sourceCss = path.join(source, 'src', 'index.css');
  const targetCss = path.join(targetDir, 'src', 'index.css');
  if (fs.existsSync(sourceCss)) fs.copyFileSync(sourceCss, targetCss);

  // 3. Copy fonts directory
  const sourceFonts = path.join(source, 'public', 'fonts');
  const targetFonts = path.join(targetDir, 'public', 'fonts');
  if (fs.existsSync(sourceFonts)) copyDirSync(sourceFonts, targetFonts);

  // 4. Overwrite App.jsx with identical logic to Shopify
  const appJsxCode = `import Navbar from './components/Navbar'
import TeamMembers from './components/TeamMembers'
import ContactUs from './components/ContactUs'
import Contact from './components/Contact'
import ScrollReveal from './components/ScrollReveal'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './index.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Apple-like smooth momentum
      wheelMultiplier: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pt-24">
        <ScrollReveal><TeamMembers /></ScrollReveal>
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

console.log("UI Ditto Copy Complete!");
