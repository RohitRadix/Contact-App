import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../Services/ContactServices";
import Spinner from "../Spinner/Spinner";
let ViewContact=()=>
{
    let {contactId} = useParams()
    let [state, setState]= useState({
        loading: false,
        contact:[],
        errorMessage: "",
        group: {},
    })
    useEffect(
        async ()=>{
            try{
                setState({
                    ...state,
                    loading: true,
                });
                let response = await ContactService.getContacts(contactId);
                let groupResponse= await ContactService.getGroup(response.data)
                 setState({
                    ...state,
                    loading: false,
                    contact: response.data,
                    group: groupResponse.data
                });
            }
            catch(error)
        {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message,
            });
        }
        }, [contactId]
        
    )
    let {loading,contact,errorMessage, group}= state;
    return(
        <React.Fragment>
            
           <div className="container p-3">
               <div className="row align-items-center">
                   <div className="col">
                       <h3 className=".h3 text-warning fw-bold ">View contact</h3>
                   </div>
               </div>
               {
                    loading ? <Spinner/> : 
                    <React.Fragment>
                        {
                            Object.keys(contact).length >0 && Object.keys(group).length >0 &&
                            <div className="row mt-5">
                            <div className="col-md-4">
                                 <img src={contact.photo}
                                 className="contact-img"/>
                            </div>
                            <div className="col-md-8">
                            <ul className="list-group">
                                 <li className="list-group-item list-group-item-action">                                                Name: <span className="fw -bold">Xyz</span>
                                 </li>
                                 <li className="list-group-item list-group-item-action">
                                 Moble no.: <span className="fw -bold">{contact.mobile}</span>
                                 </li>
                                 <li className="list-group-item list-group-item-action">
                                 Email: <span className="fw -bold">{contact.email}</span>
                                 </li>
                                 <li className="list-group-item list-group-item-action">
                                 Company: <span className="fw -bold">{contact.company}</span>
                                 </li>
                                 <li className="list-group-item list-group-item-action">
                                 Group: <span className="fw -bold">{group.name}</span>
                                 </li>
                                 </ul>
                             </div>
                        </div>
                        }
              
               <div className="row mt-5">
                   <div className="col-md-1">
                       <Link to={'/'} className="btn btn-warning">Back</Link>
                   </div>
               </div>
                    </React.Fragment>
               }
               </div>
               
        </React.Fragment>
    )
}
export default ViewContact