import "./App.css";
import Footer from "./components/footer";
import NavigationBar from "./components/navigationBar";
import DonationBanner from "./components/donationBanner";
import RouteConfig from "./rooter/RouteConfig";
import { BrowserRouter } from "react-router-dom";
import charityImage from './assets/charity.png'; 


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <DonationBanner imageSrc={charityImage} height="35vh" />
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
