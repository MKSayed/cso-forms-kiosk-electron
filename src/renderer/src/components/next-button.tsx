import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NextButton({ onClick, to }: { onClick?: () => void; to: string }) {
  return (
    <Link to={to}>
      <Button
        onClick={onClick}
        className={
          'flex h-[80px] w-[233px] justify-between rounded-[40px] bg-[#223990] pl-[1.6rem] text-[25px] font-semibold shadow-[0px_0px_5px_#0A0C0E5C]'
        }
      >
        <ChevronRight className={'mr-1 mt-1 size-[4.3rem]'} />
        <span className={'-mt-1'}>التالي</span>
      </Button>
    </Link>
  )
}
