import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import { ContactService } from "../../Services/ContactServices";
let EditContact=()=>
{
    let navigate= useNavigate()
    let{contactId} =useParams()
    let submitForm= async (e)=>{
        e.preventDefault();
        try{
            let response= await ContactService.updateContact(state.contact, contactId);
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
            navigate (`/contact/edit/${contactId}`,{replace: false});
        }
    }
    
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
    useEffect(async()=>{
        try{
            setState({
                ...state,
                loading: true,
            });
            let response= await ContactService.getContacts(contactId);
            let groupResponse = await ContactService.getGroups();
            setState({
                ...state,
                loading: false,
                contact: response.data,
                groups: groupResponse.data,
            });

        }
        catch(error){
            setState({
                ...state,
                loading: false,
                errorMessage: error.message,
            });
        }
    }, [contactId])
    let {loading,groups,contact , errorMessage } = state;
    let updateInput=(e)=>{
        setState(
            {
                
                    ...state,
                    contact:{
                        ...state.contact,
                        [e.target.name] : e.target.value
                    
            },}
        )
    };
    return(
        <React.Fragment>
            <pre>{JSON.stringify(contact )}</pre>
            <div className="container p-2">
                <div className="row">
                    <div className="col">
                        <h3 className=".h3 text-primary fe-bold">Edit Contact</h3>
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum. Non arcu risus quis varius quam quisque id. Netus et malesuada fames ac turpis. Ipsum nunc aliquet bibendum enim facilisis.</p>
                    </div>
                </div>
                <div className="row  align-items-center">
                    <div className="col-md-4">
                        <form onSubmit={submitForm}>
                            <input name="name" onChange={updateInput} type="text" value={contact.name} className="form-control mb-2" placeholder="Name"></input>
                            <input name="photo" onChange={updateInput} type="text" value={contact.photo} className="form-control mb-2" placeholder="Photo url"></input>
                            <input name="mobile" onChange={updateInput} type="number" value={contact.mobile} className="form-control mb-2" placeholder="Mobile"></input>
                            <input name="email" onChange={updateInput} type="email" value={contact.email} className="form-control mb-2" placeholder="Email"></input>
                            <input name="company" onChange={updateInput} type="text" value={contact.company} className="form-control mb-2" placeholder="Company"></input>
                            
                            <select className="form-control mb-2">
                                <option value="">Select Group</option>
                                {
                                  state.groups.length > 0 &&
                                  state.groups.map(group=>{
                                       return(
                                           <option id={group.id} value={group.id}>{group.name}</option>
                                       );
                                   })
                                }
                            </select>
                            <input type="submit" value="Update" className="btn btn-success "></input>
                            <Link to={'/contact/list'} className="btn btn-dark ms-2">Cancel</Link> 
                            
                        </form>
                    </div>
                    <div className="col-md-8">
                        <div className="ms-5" >
                            <img className="contact-img" src={contact.photo}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default EditContact