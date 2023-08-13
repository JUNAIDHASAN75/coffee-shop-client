import { Outlet } from "react-router-dom";
import './Main.css'
const Main = () => {
    return (
        <div className="family">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;