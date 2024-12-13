import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import NavigationBar from './components/navigationBar';
import RouteConfig from './rooter/RouteConfig';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavigationBar />

      <BrowserRouter>
      <main>
        <RouteConfig />
      </main>
      </BrowserRouter>

      
      <Footer />
    </div>
  );
}

export default App;
