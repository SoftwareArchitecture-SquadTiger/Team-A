import "./App.css";
import DonationBanner from "./components/donationBanner";
import RouteConfig from "./rooter/RouteConfig";
import { BrowserRouter } from "react-router-dom";
import charityImage from './assets/charity.png'; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <RouteConfig />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
