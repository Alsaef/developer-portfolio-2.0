
import { Outlet } from 'react-router-dom';
import ParticlesBackground from '../Components/ParticlesBackground';
import AppBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';



const LayOut = () => {
   
    return (
        <div>
            <Scroll></Scroll>
            <ParticlesBackground></ParticlesBackground>
            <AppBar></AppBar>
          <div className='min-h-screen'>
              <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default LayOut;