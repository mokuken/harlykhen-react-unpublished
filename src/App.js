import './styles/App.css';
import './styles/Icons.css';
import './styles/Gallery.css';
import { Route, Routes } from 'react-router-dom'
import BackgroundVideo from './components/Background'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

function App() {
  return (
    <div className='App'>
      <BackgroundVideo />
      <Sidebar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Gallery' element={<Gallery />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
