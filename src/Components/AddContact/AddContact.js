import React, { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { ContactService } from "../../Services/ContactServices";
let AddContact=()=>
{
    let navigate = useNavigate();
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
        groups: [],
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

    useEffect(
        async ()=>{
            try{
                setState({...state, loading:true})
                let response= await ContactService.getGroups();
                setState({...state, 
                    loading:true,
                    groups:response.data,
                })
            }
            catch(error){

            }

        },[]
    );
     
    let formSubmit= async (e)=>{
        e.preventDefault();
        try{
            let response= await ContactService.createContact(state.contact);
            if(response){
                navigate ('/contact/list',{replace: true});
            }

        }
        catch(error)
        {
            setState({
                ...state,
                errorMessage: error.message,
            });
            navigate ('/contact/add',{replace: false});
        }
    };
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
                        <form onSubmit={formSubmit}>
                            <input required onChange={updateInput} name="name" value={state.contact.name} type="text" className="form-control mb-2" placeholder="Name"></input>
                            <input required onChange={updateInput} name="photo" value={state.contact.photo} type="text" className="form-control mb-2" placeholder="Photo url"></input>
                            <input  required onChange={updateInput}name="mobile" value={state.contact.mobile} type="number" className="form-control mb-2" placeholder="Mobile"></input>
                            <input required onChange={updateInput} name="email" value={state.contact.email} type="email" className="form-control mb-2" placeholder="Email"></input>
                            <input required onChange={updateInput} name="company" value={state.contact.company} type="text" className="form-control mb-2" placeholder="Company"></input>
                            
                            <select className="form-control mb-2">
                                <option value="">Select Group</option>
                                {
                                   state.groups.length > 0 &&
                                   state.groups.map(group=>{
                                       return(
                                           <option id={group.id}>{group.name}</option>
                                       );
                                   })
                                }
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