import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, { Suspense } from 'react';
import Layout from './pages/Layout';
import ProtectedRoute from './pages/ProtectedRoute';

const Login = React.lazy(()=>import("./pages/Login"))
const Admin = React.lazy(()=>import("./pages/Admin"))
const Client = React.lazy(()=>import("./pages/Client"))


function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
           <Suspense fallback={<div>Loading...</div>}>
           <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path='/' element={<ProtectedRoute Component={Client}/>}/>
              <Route path='/admin' element={<ProtectedRoute Component={Admin}/>}/> 
            </Route>
            <Route path='/login' element={<Login/>}/>
           </Routes>
           </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
