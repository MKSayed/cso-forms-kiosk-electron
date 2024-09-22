import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { useGoBack } from '@/hooks/use-go-back'

export function BackButton() {
  const { goBack } = useGoBack()

  return (
    <span onClick={goBack}>
      <Button
        type={'button'}
        className={
          'flex h-[80px] w-[233px] justify-between rounded-[40px] bg-[white] pl-[1.6rem] text-[25px] font-semibold text-[#223990] shadow-[0px_0px_5px_#0A0C0E5C]'
        }
      >
        <span className={'-mt-1 mr-9'}>رجوع</span>
        <ChevronLeft className={'-ml-[0.9rem] mt-1 size-[4.3rem]'} />
      </Button>
    </span>
  )
}
