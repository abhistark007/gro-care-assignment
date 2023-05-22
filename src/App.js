
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App flex flex-col">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/videoplayer/:id'element={<VideoPlayerPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
