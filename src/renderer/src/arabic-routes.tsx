import { createHashRouter } from 'react-router-dom'
import Base from '@/containers/base'
import StartScreen from '@/pages/start-screen'
import IdnumValidation from '@/pages/idnum-validation'

export const hashRouter = createHashRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      { index: true, element: <StartScreen /> },
      { path: 'idnum-validation', element: <IdnumValidation /> }
    ]
  }
])

export default hashRouter
