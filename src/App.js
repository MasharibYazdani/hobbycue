import "./App.css";
import Addown from "./components/AddOwn/Addown";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Listing from "./components/Listing/Listing";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Listing />
      <Addown />
      <Footer />
    </div>
  );
}

export default App;
