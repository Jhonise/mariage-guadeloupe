import React, {useState} from 'react'
import Navigation from './components/navigation.jsx';
import Infos from './components/infos.jsx';
import ActivityList2 from './components/activitylist2.js';
import Agenda from './components/agenda.jsx';
import FAQ from './components/faq.jsx';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ='/' element={<Root />}>
        <Route index element={<Navigation/>} />
        <Route path="/informations" element={<Infos/>} />
        <Route path="/activites" element={<ActivityList2/>} />
        <Route path="/agenda" element={<Agenda/>} />
        <Route path="/faq" element={<FAQ/>} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>


    </div>
  );
}

const Root= () =>{
  const [nav, setNav] = useState(false)
  const [logo, setLogo] = useState(false)
  const handleNav= () => {
      setNav(!nav)
      setLogo(!logo)
  }
  return(
    <>
      <div className='fixed flex w-full justify-between items-center h-14 px-6 z-10 text-lg text-white bg-gray-900/70'>
            <div>
              <Link className ='text-3xl' to='/'> Guadeloupe </Link>
            </div>
            <ul className="hidden md:flex px-2 tracking-widest ">
                <Link className ='px-3' to='/'> Accueil</Link>
                <Link className ='px-3' to='/informations'> Informations</Link>
                <Link className ='px-3' to='/activites'> Activités</Link>
                <Link className ='px-3' to='/agenda'> Agenda</Link>
                <Link className ='px-3' to='/faq'> FAQ</Link>
            </ul>
            {/* Hamburger */}
            <div className='flex'>
              <p onClick={handleNav} className="md:hidden z-20 px-2">Menu</p>
              <div onClick={handleNav} className="md:hidden z-20 pt-1">
                      {nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
              </div>
            </div>

            {/* Mobile menu dropdown */}
            <div onClick={handleNav} className={nav ? 'fixed left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex-col font-bold text-[#CEA450]' : 'absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex-col'}>
                <ul>
                    <li>
                      <Link className ='px-3 ' to='/'> Accueil</Link>
                    </li>
                    <li>
                      <Link className ='px-3' to='/informations'> Informations</Link>
                    </li>
                    <li>
                      <Link className ='px-3' to='/activites'> Activités</Link>
                    </li>
                    <li>
                      <Link className ='px-3' to='/agenda'> Agenda</Link>
                    </li>
                    <li>
                      <Link className ='px-3' to='/faq'> FAQ</Link>
                    </li>
                </ul>
            </div>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App;

