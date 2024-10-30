import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Header.jsx/Navbar";


const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <h1>this is home page</h1>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <p>loading..
                </p>: <Outlet></Outlet>
            }
            
           
        </div>
    );
};

export default Home;