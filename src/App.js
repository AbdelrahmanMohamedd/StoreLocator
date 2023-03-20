import Alert from './Components/1Alert';
import Header from './Components/2Header';
import Navbar from './Components/3Navbar';
import Slider from './Components/4Slider';
import MainCategories from './Components/5MainCategories';
import Flat from './Components/6Flat';
import PopularBrands from './Components/7PopularBrands';
import BlackNov from './Components/8BlackNov';
import Featured from './Components/9Featured';
import MostViewed from './Components/10MostViewed';
import Crocs from './Components/11Crocs';
import Footer from './Components/12Footer';
import End from './Components/13End';

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';



function App() {
  return (
    <div className="App">
      <Alert />
      <Header /> 
      <Navbar />
      <Slider />
      <MainCategories />
      <Flat />
      <PopularBrands />
      <BlackNov />
      <Featured />
      <MostViewed />
      <Crocs />
      <Footer />
      <End />
    </div>
  );
}

export default App;
