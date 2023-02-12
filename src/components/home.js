import '../App.css';
import PreNavbar from './PreNavbar';
import Navbar from './Navbar.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Slider from './Slider.js';
import pkg from '../data/data.json';
import Offers from './Offers.js';
import Heading from './Heading.js';
import StarProduct from './StarProduct.js';
import HotAccessoriesMenu from './HotAccessoriesMenu.js';
import HotAccessories from './HotAccessories.js';
import ProductReviews from './ProductReviews.js';
import Videos from './Videos.js';
import Banner from './Banner.js';
import Footer from './Footer.js';
import NavOptios from './NavOptios.js';

// const name='Product';
function Homepg() {
  return (
    <Router>
    <PreNavbar/>
    <Navbar/>

    {/* <NavOptios miPhones={pkg.miPhones} redmiPhones={pkg.redmiPhones} tv={pkg.tv} laptop={pkg.laptop} fitnessAndLifeStyle={pkg.fitnessAndLifeStyle} home={pkg.home} audio={pkg.audio} accessories={pkg.accessories}/> */}

    <Routes>
    
    {/* <Route exact path='/' element={ }/> */}

    <Route exact path='/miphones' element={
        <NavOptios miPhones={pkg.miPhones}/>}/>

    <Route exact path='/redmiphones' element={
        <NavOptios redmiPhones={pkg.redmiPhones}/>}/>

    <Route exact path='/tv' element={
        <NavOptios tv={pkg.tv}/>}/>

    <Route exact path='/laptops' element={
        <NavOptios laptop={pkg.laptop}/>}/>

    <Route exact path='/lifestyle' element={
        <NavOptios fitnessAndLifeStyle={pkg.fitnessAndLifeStyle}/>}/>

    <Route exact path='/home' element={
        <NavOptios home={pkg.home}/>}/>

    <Route exact path='/radio' element={
        <NavOptios radio={pkg.radio}/>}/>

    <Route exact path='/accessories' element={
        <NavOptios accessories={pkg.accessories}/>}/>
    </Routes>

    <Slider start={pkg.banner.start} />
    <Offers offers={pkg.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProduct starProduct={pkg.starProduct}/>
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu/>

    <Routes>

    <Route exact path='/music' element={<HotAccessories music={pkg.hotAccessories.music} musicCover={pkg.hotAccessoriesCover.music}/>}/>
    
    <Route exact path='/smartDevice' element={<HotAccessories smartDevice={pkg.hotAccessories.smartDevice} smartDeviceCover={pkg.hotAccessoriesCover.smartDevice}  /> } />
    
    <Route exact path='/home' element={<HotAccessories home={pkg.hotAccessories.home} homeCover={pkg.hotAccessoriesCover.home}  />}/>
    
    <Route exact path='/lifestyle' element={<HotAccessories lifeStyle={pkg.hotAccessories.lifeStyle} lifeStyleCover={pkg.hotAccessoriesCover.lifeStyle}  />}/>
    
    <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={pkg.hotAccessories.mobileAccessories} mobileAccessoriesCover={pkg.hotAccessoriesCover.mobileAccessories}  />}/>
    
    </Routes>

    <Heading text="PRODUCT REVIEWS"/>
    <ProductReviews productReviews={pkg.productReviews}/>

    <Heading text="VIDEOS"/>
    <Videos videos={pkg.videos}/>

    <Heading text="IN THE PRESS"/>
    <Banner banner={pkg.banner}/>

    <Footer footer={pkg.footer}/>

    </Router>
  );
}

export default Homepg;




