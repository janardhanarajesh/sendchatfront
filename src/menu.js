import { Link } from "react-router-dom"
function Menu()
{
    return(
        <div id="menudiv">
            <center>
                <div id="submenu">
            <div className="subdivmenu">
        <Link to="/register" className="menulinik">sign up</Link>
        </div>
        <div className="subdivmenu">
        <Link to="/login" className="menulinik">sign in</Link>
        {/* <Link to="/friend" className="menulinik"></Link> */}

        </div>
        </div>
   
        </center>
       </div>
    )
}
export default Menu
