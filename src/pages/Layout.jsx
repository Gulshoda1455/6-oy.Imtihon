import { NavLink, Outlet } from 'react-router-dom'

import Contact from "../assets/images/contact.svg"
import Lupa from "../assets/images/search.svg"
import Heart from '../assets/images/heart.love.svg'
import Korzinka from '../assets/images/korzinkaFur.svg'



 const Layout=()=>{
      

    return (
        <div>
            <header className="p-5  bg-white border-2">
            <div className="container">
                   <div className="header flex items-center justify-between">
                  <h1 className='text-[32px] '>Products</h1>
                   <nav className="flex items-center gap-40 ">
                       <ul className='flex items-center  gap-10'>
                           <li>
                               <NavLink className={({isActive, isPending})=>isPending? "text-black-300 font-bold size-[24px]" : isActive ? "text-black-300 font-bold size-[24px]" : "" } to="/">Client</NavLink>
                           </li>
                           <li>
                               <NavLink className={({isActive, isPending})=>isPending? "text-black-300" : isActive ? "text-black-300 font-bold size-[24px]" : "" } to="/admin">Admin</NavLink>
                           </li>
                           
                       </ul>
                       <div className="flex items-center justify-between gap-8">
                           
                       </div>
                   </nav>
                   <div className="flex items-center justify-between gap-8">
                           <a href="/">
                               <img src={Contact} alt="Contact" />
                           </a>
                           <a href="/">
                               <img src={Lupa} alt="search" />
                           </a>
                           <a href="/">
                               <img src={Heart} alt="heart" />
                           </a>
                           <a href="/">
                               <img src={Korzinka} alt="korzinka" />
                           </a>
                       </div>
   
                   </div>
   
           
            </div>
         </header>
   
         <main>
           <Outlet/>
         </main>

        </div>
       )
}
export default Layout;