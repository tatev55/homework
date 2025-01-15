import "./App.css"
import Main from "./components/Main.js";   
import Header from "./components/Header.js"; 
import PracticeAreas from "./components/PracticeAreas.js" ;
import Customers from "./components/Customers.js";
import Footer from "./components/Footer.js"


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <PracticeAreas/>
      <Customers/>
      <Footer/>
    </div>
  );
}

export default App;
