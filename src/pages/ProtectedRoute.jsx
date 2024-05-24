import React from 'react'
import { useAuth } from '../hooks/useAuth';


function ProtectedRoute({Component}) {
    useAuth();
  return <Component/>
}

export default ProtectedRoute