/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Loader = () => {
    const [loading,setLoading]=useState(true);
    useState(()=>{
        setTimeout(()=>{
        setLoading(false)
        },1300)
    },[])
    return (
        loading
    );
};

export default Loader;