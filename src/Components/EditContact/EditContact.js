import React from "react";
import {Link} from "react-router-dom";
let EditContact=()=>
{
    return(
        <React.Fragment>
            <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <h3 className=".h3 text-primary fe-bold">Edit Contact</h3>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum. Non arcu risus quis varius quam quisque id. Netus et malesuada fames ac turpis. Ipsum nunc aliquet bibendum enim facilisis.</p>
                    </div>
                </div>
                <div className="row  align-items-center">
                    <div className="col-md-4">
                        <form>
                            <input type="text" className="form-control mb-2" placeholder="Name"></input>
                            <input type="text" className="form-control mb-2" placeholder="Photo url"></input>
                            <input type="number" className="form-control mb-2" placeholder="Mobile"></input>
                            <input type="email" className="form-control mb-2" placeholder="Email"></input>
                            <input type="text" className="form-control mb-2" placeholder="Company"></input>
                            <input type="text" className="form-control mb-2" placeholder="Title"></input>
                            <select className="form-control mb-2">
                                <option value="">Select Group</option>
                            </select>
                            <input type="submit" value="Create" className="btn btn-success "></input>
                            <Link to={'/contact/list'} className="btn btn-dark ms-2">Cancel</Link> 
                            
                        </form>
                    </div>
                    <div className="col-md-8">
                        <div className="ms-5" >
                            <img className="contact-img" src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default EditContact