import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 px-20 py-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
