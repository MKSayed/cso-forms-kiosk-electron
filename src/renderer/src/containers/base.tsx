import { Outlet } from 'react-router-dom'
import DragWindowRegion from '../components/drag-window-region'

const Base = () => {
  return (
    <>
      {/*<DragWindowRegion />*/}
      <div className={'h-screen font-readex'} dir={'rtl'}>
        <Outlet />
      </div>
    </>
  )
}

export default Base
