import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { router } from './routes/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-07nefllnt5q746c0.us.auth0.com'
      clientId='N7W2BornRD45y8npuEfLc4zjOMyvCG5X'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
