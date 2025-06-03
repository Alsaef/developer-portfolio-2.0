
import { Outlet } from 'react-router-dom';
import ParticlesBackground from '../Components/ParticlesBackground';
import AppBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';
import { useEffect, useState } from 'react';
import Loading from '../Components/Loading';



const LayOut = () => {
   const [loading,setLoading]=useState(true);

//    useEffect(()=>{
//    setTimeout(() => {
//     setLoading(false)
//    }, 1500);
//    },[])

//    if (loading) {
//     return <Loading></Loading>
//    }
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