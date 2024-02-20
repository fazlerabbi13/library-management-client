import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
   
    if(loading){
        return <span className="loading loading-spinner text-info"></span>
    }
   
    if(!user?.email){
        return <Navigate to='/signin'/>
    }

    return children;
};

export default PrivetRoute;