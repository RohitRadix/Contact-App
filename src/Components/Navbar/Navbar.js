import React from "react";
import { Link } from "react-router-dom";
let Navbar=()=>
{
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container text-white">
                    <Link to={'/'} className="navbar-brand">
                        <i className="fa fa-book text-primary fa-2x"/>
                         &nbsp;Contact Manager
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    )

}
export default Navbar
