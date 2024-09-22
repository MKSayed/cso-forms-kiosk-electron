import { type ReactNode } from 'react'
import { RouterProvider } from 'react-router-dom'
import hashRouter from './arabic-routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/api'
import './app.css'

function App(): ReactNode {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={hashRouter} />
    </QueryClientProvider>
  )
}

export default App
