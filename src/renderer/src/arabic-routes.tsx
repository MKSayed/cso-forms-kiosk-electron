import { createHashRouter } from 'react-router-dom'
import Base from './containers/base'
import StartScreen from './pages/start-screen'

export const hashRouter = createHashRouter([
  {
    path: '/',
    element: <Base />,
    children: [{ index: true, element: <StartScreen /> }]
  }
])

export default hashRouter
