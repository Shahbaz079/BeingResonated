import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Route,RouterProvider,createRoutesFromElements } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import store from '../redux/store.js';
import { Provider } from 'react-redux'; 

import LandingPage from './pages/LandingPage.jsx';
import Registration from './pages/auth/Registration.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/login' element={<LoginPage/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <RouterProvider router={router}/>
 </Provider>
)
