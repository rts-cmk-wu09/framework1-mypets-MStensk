import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app.css'
import { createBrowserRouter, Route, createRoutesFromElements, BrowserRouter, RouterProvider } from 'react-router-dom'
import ListView from './pages/ListView.jsx'
import DetailView from "./pages/DetailView.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/animals" index element={< ListView />} />
      <Route path='/details' element={<DetailView />} />
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
