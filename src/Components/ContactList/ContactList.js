import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../Services/ContactServices";
import Spinner from "../Spinner/Spinner";
let ContactList=()=>
{
    let [state , setState]= useState({
        loading: false,
         contacts: [],
        errorMessage:'',
    });
    useEffect(async()=>{
        try{
            setState({...state, loading: true,});
            let response = await ContactService.getAllContacts();
            
            setState({...state, 
                loading: false,
                contacts: response.data});
        }
        catch(error){
            setState({
                ...state,
                loading: false,
                errorMessage: error.message,
            });
        }
    },[])
    let clickDelete = async(contactId)=>
    {
        try{
            
            let response = await ContactService.deleteContact (contactId);
            if(response){
                
                    setState({...state, loading: true,});
                    let response = await ContactService.getAllContacts();
                    
                    setState({...state, 
                        loading: false,
                        contacts: response.data});
                
            }
                    
            
        }
            catch(error)
            {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message,
            
            
                })   
    }
    };

    let {loading,contacts, errorMessage}= state;
    return(

        <React.Fragment>
            
            <div className="container mt-2">
                <h2 className=".h2">Contact Manager App</h2> 
               
               <Link to={'/contact/add'} className="btn btn-success"> <i className="fa fa-add "/> Add </Link>  
                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet lectus proin nibh nisl condimentum. Non arcu risus quis varius quam quisque id. Netus et malesuada fames ac turpis. Ipsum nunc aliquet bibendum enim facilisis.</p>
                
                <div className="row">
                    <div className="col-md-6">
                        
                            <form className="row">
                                <div className="col">
                                    <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Search user"></input>
                                </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2">
                                <button type="submit" className="btn btn-light btn-outline-dark">Search</button>
                                </div>
                                </div>
                            </form>
                    </div>
                </div>
                {
                    loading ? <Spinner/> : 
                    <React.Fragment>
                        <div className="contact-list">
                <div className="container mt-3">
                    <div className="row">
                        {
                            contacts.length >0 &&
                            contacts.map(contact=>{
                                return(
                                    <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-around ">
                                        <div className="col-md-4">
                                            <img className="contact-img" src={contact.photo}/>
                                        </div>
                                        <div className="col-md-6 ">
                                            <ul className="list-group">
                                                <li className="list-group-item list-group-item-action">
                                                Name: <span className="fw -bold">{contact.name}</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                Moble no.: <span className="fw -bold">{contact.mobile}</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                Email: <span className="fw -bold">{contact.email}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-2 d-flex flex-column align items-center  ">
                                            <Link to={`/contact/view/${contact.id}`} className="btn btn-warning my-1"><i className="fa fa-eye"/></Link>

                                            <Link to={`/contact/edit/${contact.id}`} className="btn btn-primary my-1"><i className="fa fa-edit"/></Link>

                                            <button className="btn btn-danger my-1" onClick={()=>clickDelete(contact.id)}><i className="fa fa-trash"/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                                )
                            })
                        }

                        
                        </div>
                    </div>
                </div>
                    </React.Fragment>
                }
                
                       
            </div>
        </React.Fragment>
    )
}
export default ContactList