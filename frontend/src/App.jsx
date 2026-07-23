import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import { ReactLenis } from 'lenis/react';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Work = lazy(() => import('./pages/Work'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const GenericPage = lazy(() => import('./pages/GenericPage'));
const Login = lazy(() => import('./pages/Login'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, wheelMultiplier: 1.2, touchMultiplier: 2, autoResize: true }}>
      <CustomCursor />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen w-full bg-white flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#FD5800] border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
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
    </ReactLenis>
  );
}

export default App;