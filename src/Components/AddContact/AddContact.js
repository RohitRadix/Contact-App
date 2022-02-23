import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
let AddContact=()=>
{
    let [state, setState]= useState({
        loading: false,
        contact:{
            name:'',
            photo:'',
            mobile:'',
            email:'',
            company:'',
            groupId:'',
            

        },
        errorMessage: "",
        group: [],
    })
    let updateInput =(e)=>
    {
        setState(
            {
                ...state,
                contact:{
                    ...state.contact,
                    [e.target.name] : e.target.value
                },


            },
        );
    }
    
    return(
            <React.Fragment>
                <pre>{JSON.stringify(state.contact)}</pre>
                <div className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p>Add contact</p>
                           
                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <input required onChange={updateInput} name="name" value={state.contact.name} type="text" className="form-control mb-2" placeholder="Name"></input>
                            <input required onChange={updateInput} name="photo" value={state.contact.photo} type="text" className="form-control mb-2" placeholder="Photo url"></input>
                            <input  required onChange={updateInput}name="mobile" value={state.contact.mobile} type="number" className="form-control mb-2" placeholder="Mobile"></input>
                            <input required onChange={updateInput} name="email" value={state.contact.email} type="email" className="form-control mb-2" placeholder="Email"></input>
                            <input required onChange={updateInput} name="company" value={state.contact.company} type="text" className="form-control mb-2" placeholder="Company"></input>
                            <input required onChange={updateInput} name="groupId" value={state.contact.groupId} type="text" className="form-control mb-2" placeholder="Title"></input>
                            <select className="form-control mb-2">
                                <option value="">Select Group</option>
                            </select>
                            <input type="submit" value="Create" className="btn btn-success "></input>
                            <Link to={'/contact/list'} className="btn btn-dark ms-2">Cancel</Link> 
                            
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}
export default AddContact