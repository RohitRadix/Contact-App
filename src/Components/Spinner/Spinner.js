import React from "react";
import spinnerImg from '../../Assets/Image/Spinner.gif';
let Spinner =()=>
{
    return(
        <React.Fragment>
            <div>
                <img src={spinnerImg} className="d-block m-auto"/>
            </div>
        </React.Fragment>
    )
}
export default Spinner