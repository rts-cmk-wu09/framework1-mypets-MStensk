import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app.css'
import { createBrowserRouter, Route, createRoutesFromElements, BrowserRouter, RouterProvider } from 'react-router-dom'
import ListView from './pages/ListView.jsx'
import DetailView from "./pages/DetailView.jsx"
import useAxios from './UseAxios.js'
import LandingPage from './pages/LandingPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<LandingPage />} />
      <Route path="/animals" element={< ListView />} />
      <Route path='animals/details/:id' element={<DetailView />} />
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
