
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import { useState } from 'react';
import Loading from '../Components/Loading';

const LayOut = () => {
    const [loading,setLoading]=useState(true);
    useState(()=>{
        setTimeout(()=>{
        setLoading(false)
        },1300)
    },[])
    if (loading) {
        return (
            <Loading></Loading>
        )
    }
    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;