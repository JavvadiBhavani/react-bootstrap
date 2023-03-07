import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div >
      <Navbar/>
      <Banner/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
