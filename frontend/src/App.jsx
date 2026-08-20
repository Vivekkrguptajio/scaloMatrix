import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import Preloader from './components/Preloader';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Work = lazy(() => import('./pages/Work'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const GenericPage = lazy(() => import('./pages/GenericPage'));
const Login = lazy(() => import('./pages/Login'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Career = lazy(() => import('./pages/Career'));

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      smoothTouch: false,
      touchMultiplier: 1.8,
      syncTouch: true,
      syncTouchLerp: 0.04,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen w-full bg-white flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#FD5800] border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:slug" element={<GenericPage />} />
          <Route path="/resources/:slug" element={<GenericPage />} />
          <Route path="/solutions/:slug" element={<SolutionsPage />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;