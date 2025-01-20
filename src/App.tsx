import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="flex flex-col min-h-dvh	">
      <Header />
      <div className="flex-1">
        <h1>Main</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
