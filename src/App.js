import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Home />
          {/* <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                //{<Route path="*" element={<NoPage />} /> }
            </Routes> 
            </BrowserRouter> */}
    </div>
  );
}

export default App;
