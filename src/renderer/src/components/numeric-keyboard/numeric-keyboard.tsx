import Keyboard from 'react-simple-keyboard'
import 'react-simple-keyboard/build/css/index.css'
import { TrashIcon } from 'lucide-react'
import { renderToString } from 'react-dom/server'
import './numeric-keyboard.css'
import React from 'react'

const numberLayout = {
  default: ['1 2 3', '4 5 6', '7 8 9', '{clear} 0 dummy']
}

type props = {
  inputOnChangeFn: (s: string) => void
  maxLength: number
  keyboardRef: React.MutableRefObject<any>
}

/**
 * Numeric Keyboard component for rendering of a keyboard on screen.
 * This component has its own memory and keeps track of the entered values, so all deletions and
 * backspaces should be done via the keyboard's interface.
 * @author Mahmoud Khaled
 * @param {props} props - Props for the button component.
 * @returns {JSX.Element} The rendered keyboard component.
 */
export function NumericKeyboard({ inputOnChangeFn, maxLength, keyboardRef }: props) {
  const onChange = (input: string) => {
    inputOnChangeFn(input)
  }

  /**
   * Checks if the 'clear' button is pressed and clears the input if it is.
   * If any other button is pressed, the function does nothing.
   *
   * @param {string} button - The button identifier. Expected to be '{clear}' for clearing input.
   */
  const onKeyPress = (button) => {
    // console.log('Button pressed', button) // Enable while debugging
    if (button === '{clear}') {
      keyboardRef.current!.clearInput() // Clear the keyboard's builtin input tracker
      inputOnChangeFn('') // Set the eternal input form field to an empty string
    }
  }

  return (
    <div>
      <div dir={'ltr'}>
        <Keyboard
          keyboardRef={(r) => (keyboardRef.current = r)}
          maxLength={maxLength}
          layout={numberLayout}
          layoutName={'default'}
          onChange={onChange}
          onKeyPress={onKeyPress}
          display={{
            /**
             * Renders a React component (TrashIcon) as the button's text, for the 'clear' button.
             *
             * This is a workaround to render a React component within a simple keyboard button.
             *
             * For more details on this approach, refer to the issue: https://github.com/hodgef/react-simple-keyboard/issues/1204
             */
            '{clear}': renderToString(<TrashIcon className={'-mr-1 mb-2 size-12'} />)
          }}
          theme={'hg-theme-default !bg-transparent !m-0 !p-0'}
          buttonTheme={[
            {
              class: '!invisible !pointer-events-none !select-none',
              buttons: 'dummy'
            },
            {
              class: 'custom-button-container',
              buttons: numberLayout.default.join(' ')
            },
            {
              class: 'custom-clear-button',
              buttons: '{clear}'
            },
            {
              // Animate keyboard button clicks. Idea from: https://www.w3schools.com/howto/howto_css_animate_buttons.asp
              class:
                'after:bg-white overflow-hidden after:p-32 after:opacity-0 after:duration-1000 active:after:opacity-100 active:after:p-0 active:after:m-0 active:after:duration-0',
              buttons: numberLayout.default.join(' ') // Select all keys in numberLayout.default
            }
          ]}
        />
      </div>
    </div>
  )
}
