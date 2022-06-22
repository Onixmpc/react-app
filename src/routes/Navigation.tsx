import { BrowserRouter, Navigate, NavLink } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css'
import { LazyPage1 } from '../01-lazyload/pages/LazyPage1';
import { LazyPage2 } from '../01-lazyload/pages/LazyPage2';
import { LazyPage3 } from '../01-lazyload/pages/LazyPage3';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
                <ul>
                    <li>
                        <NavLink to="/lazy1">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy2">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lazy3">Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='lazy1' element={<LazyPage1/>} />
                <Route path='lazy2' element={<LazyPage2/>} />
                <Route path='lazy3' element={<LazyPage3/>} />
                <Route path='/*'    element={<Navigate to="/lazy1" replace />} />
            </Routes>

        </div>  
    </BrowserRouter>
  )
}
