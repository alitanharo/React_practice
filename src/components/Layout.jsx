import { Outlet } from "react-router";
import Header from "./Header";
import { Link} from "react-router-dom"


const Layout = () => {


    
    return (<div>
        <Header />
        <div className="row">
            <div className="col-4">
                <Link to = "/dashboard/message"> Messages</Link>
                <Link to = "/dashboard/wallet">  Wallet</Link>
            </div>
            <div className="col-8"> <Outlet/></div>

        </div>
        
        
    </div> );
}
 
export default Layout;