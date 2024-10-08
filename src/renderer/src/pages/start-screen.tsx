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
            className={'absolute size-[30.5rem] object-contain'}
            src={buttonBg}
            alt={'Start bottom background'}
          />
          <Link to={'/idnum-validation'}>
            <img
              className={'absolute right-[4rem] top-[8.3rem] size-[19rem] object-contain'}
              src={startButton}
              alt={'Start button'}
            />
            <span
              className={
                'absolute right-[11.8rem] top-[14.7rem] text-[54px] font-bold tracking-[-0.05em] text-[#223990]'
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
