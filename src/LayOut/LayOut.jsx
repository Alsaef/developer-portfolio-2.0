
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';

const LayOut = () => {
    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;