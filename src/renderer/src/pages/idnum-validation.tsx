import { Layout } from '@/containers/layout'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Form } from '@/components/ui/form'
import { NumericKeyboard } from '@/components/numeric-keyboard/numeric-keyboard'
import InputFormField from '@/components/input-form-field'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DoorOpen, TriangleAlert } from 'lucide-react'
import { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { KeyboardReactInterface } from 'react-simple-keyboard'
import { NextButton } from '@/components/next-button'
import { BackButton } from '@/components/back-button'

const formSchema = z.object({
  idnum: z
    .string()
    .min(1, 'يجب ادخال الرقم القومي') // Error message When there is no characters
    .min(14, 'يجب ادخال الرقم القومي المكون من 14 رقم كاملاً') // Error message when there is 1 or more characters but less than 14
})

export default function idnumValidation() {
  // Start of the component
  const keyboardRef = useRef<KeyboardReactInterface | null>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idnum: ''
    },
    mode: 'onSubmit' // Render the error messages only if the user has attempted to SUBMIT the form with incorrect field values
  })

  // UseCallback to improve performance avoiding recreation of the function on each render
  const handleBackspaceIconClick = useCallback(() => {
    if (keyboardRef.current) {
      // Have to set the value on the keyboard ref as well since the keyboard saves an internal copy of input value
      const currentValue = keyboardRef.current.getInput('default') // Get the current keyboard's internal value
      keyboardRef.current.setInput(currentValue.slice(0, -1), 'default') // Set the current keyboard's internal value to currentValue - last character
      form.setValue('idnum', currentValue.slice(0, -1)) // Set the idnum form field to the keyboard's internal value - last character
    }
  }, [])

  const onChange = useCallback((value: string) => {
    form.setValue('idnum', value)
  }, [])

  const handleSubmit = useCallback((formData) => {
    // TODO: fill the logic for handleSubmit function after integrating with the middleware's external service handle API
  }, [])

  return (
    <Layout>
      <motion.main
        className="relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="relative flex items-center justify-end">
          <Link to={'/'}>
            <Button
              className={
                'right-0 ml-[3.2rem] mt-[3.1rem] flex h-[80px] w-[233px] justify-between rounded-[40px] bg-white shadow-[0px_0px_5px_rgba(10,12,14,0.36)]'
              }
            >
              <span
                className={'mr-[2.15rem] pb-[0.15rem] text-[25px] font-semibold text-[#223990]'}
              >
                خروج
              </span>
              <DoorOpen color={'#223990'} size={55} className={'ml-1'} />
            </Button>
          </Link>
        </div>
        <section>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(() => {})}
              className={
                'relative mr-[13.9rem] mt-[31.9rem] flex h-[870px] w-[631px] flex-col items-center'
              }
            >
              <InputFormField
                className="w-full overflow-x-scroll whitespace-nowrap rounded-none border-0 border-b-[4px] border-[#223990] py-9 pl-0 pr-12 font-quicksand text-[60px] font-normal text-[#223990] shadow-none ltr"
                form={form}
                name={'idnum'}
                formLabel={''}
                readOnly={true}
                rightContent={
                  <span
                    className={'cursor-pointer select-none text-[2.5rem] text-[#223990]'}
                    onClick={handleBackspaceIconClick}
                  >
                    ⌫
                  </span>
                }
              />
              <p className={'-mr-[27rem] -mt-1 text-[22px] font-medium text-[#223990]'}>
                {' '}
                أدخل الرقم القومي
              </p>

              {/*Numeric keyboard*/}
              <div className={'-ml-[0.75rem] mt-[2.4rem] flex h-[603px] w-[429px] justify-center'}>
                <NumericKeyboard
                  keyboardRef={keyboardRef}
                  inputOnChangeFn={onChange}
                  maxLength={14}
                />
              </div>
              {/*End of numeric keyboard*/}
              <div
                className={
                  'relative mr-1 mt-[1.85rem] h-[80px] w-[447px] rounded-lg border border-[#E9CA1B]'
                }
              >
                <p className="mr-[3.8rem] text-[25px] font-medium text-[#223990]">
                  {' '}
                  يجب إدخال الرقم القومي
                </p>
                <p className="mr-[3.8rem] text-[25px] font-medium text-[#223990]">
                  {' '}
                  للشخص المراد طباعة استمارة له
                </p>
                <TriangleAlert
                  className="absolute right-2 top-4"
                  size={45}
                  color="#FFD700"
                  strokeWidth={2}
                />
              </div>

              {/* Next and back buttons*/}
              <div
                className={
                  'fixed bottom-[12.5rem] mt-[10rem] flex w-full justify-between pl-[3.1rem] pr-[3.2rem]'
                }
              >
                <NextButton />
                <BackButton />
              </div>
            </form>
          </Form>
        </section>
      </motion.main>
    </Layout>
  )
}
