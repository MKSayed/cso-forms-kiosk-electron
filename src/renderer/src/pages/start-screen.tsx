import buttonBg from '@/assets/button-bg.svg'
import startButton from '@/assets/start-button.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useMeiBillAcceptorStore } from '@/store'
import { WEB_SOCKET_URL } from '@/api/api'
import { Layout } from '../containers/layout'

export default function StartScreen() {
  // Todo: implement clicking logo showing the the current status of the hardware devices and the status of connectivity to the middleware
  const [showDeviceConnectionStatus, setShowDeviceConnectionStatus] = useState()
  const connect = useMeiBillAcceptorStore((state) => state.connect)
  connect(WEB_SOCKET_URL)

  return (
    <Layout disableAnimation={true}>
      {/*Start button*/}
      <div className={'pt-[65.8rem]'}>
        <div className={'relative z-20 mr-[20.5rem]'}>
          <img
            className={'absolute object-contain size-[30.5rem]'}
            src={buttonBg}
            alt={'Start bottom background'}
          />
          <Link to={'/bsm-allah'}>
            <img
              className={'absolute object-contain size-[19rem] top-[8.3rem] right-[4rem]'}
              src={startButton}
              alt={'Start button'}
            />
            <span
              className={
                'absolute text-[#223990] font-bold text-[54px] top-[14.7rem] right-[11.8rem] tracking-[-0.05em]'
              }
            >
              إبدأ
            </span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
