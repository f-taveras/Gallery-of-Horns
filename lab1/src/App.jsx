import { useState } from "react";
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import HornedBeast from "./components/Gallery/HornedBeast.jsx";
import animals from './assets/animals.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

return(
  <main>
    <Header title="Le beasts" items={animals.length} />
    <HornedBeast list={animals}/>
    <Footer content="&copy: Felix A. Taveras"/>
  </main>
)

}



export default App;