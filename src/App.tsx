import { Outlet } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './components';

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
