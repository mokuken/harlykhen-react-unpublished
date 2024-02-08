import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import './styles/App.css';
import './styles/Scrollbar.css';
import './styles/ThemeChanger.css';
import './styles/Home.css';
import './styles/About.css';
import './styles/Project.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Project />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
