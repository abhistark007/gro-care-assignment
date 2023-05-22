
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import VideoPlayerPage from './pages/VideoPlayerPage';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/videoplayer/:id'element={<VideoPlayerPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
