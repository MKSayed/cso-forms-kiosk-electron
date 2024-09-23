import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

/**
 * Would usually be used inside a form as a normal "submit" button.
 * Except when onClick prop is passed it can be used on its own or inside a form.
 * @param onClick - A function to be called when the button is clicked
 */
export function NextButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button
      onClick={onClick}
      className={
        'flex h-[80px] w-[233px] justify-between rounded-[40px] bg-[#223990] pl-[1.6rem] text-[25px] font-semibold shadow-[0px_0px_5px_#0A0C0E5C]'
      }
    >
      <ChevronRight className={'mr-1 mt-1 size-[4.3rem]'} />
      <span className={'-mt-1'}>التالي</span>
    </Button>
  )
}
