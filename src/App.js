
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import NavBar from './components/NavBar';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App flex flex-col">
      <NavBar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/videoplayer/:mediaurl' element={<VideoPlayerPage />} />
        </Routes>
      </AnimatePresence>
      <Toaster />
    </div>
  );
}

export default App;
