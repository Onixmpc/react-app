import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import {routes} from './routes';


import logo from '../logo.svg';
import '../App.css'


export const Navigation = () => {
  return (
  <Suspense fallback={null }>
    <BrowserRouter>
      <div className='main-layout'>
        {/* Listado de las rutas en la navegacion de la pagina */}
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
              {
                routes.map( route => (
                  <li key={route.to}>
                    <NavLink to={route.to}>{ route.name }</NavLink>
                  </li>
                ))
              } 
          </ul>
        </nav>


          {/* recorrido de componentes */}
        <Routes>
          {
            routes.map( route => (
              <Route key={route.to} path={route.path} element={<route.Component/>} />
            ))
          }
          <Route path='/*'    element={<Navigate to={routes[0].to} replace />} />
        </Routes>

      </div>  
    </BrowserRouter>
  </Suspense>
  )
}
