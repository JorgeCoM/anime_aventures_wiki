import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/router'

import { RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import 'preline'

import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain='dev-07nefllnt5q746c0.us.auth0.com'
      clientId='N7W2BornRD45y8npuEfLc4zjOMyvCG5X'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
        <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </Auth0Provider>
)
