
import { BrowserRouter, Routes,Route  } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <section className="">
       <Footer/>
      </section>
    </BrowserRouter>
  );
}

export default App;