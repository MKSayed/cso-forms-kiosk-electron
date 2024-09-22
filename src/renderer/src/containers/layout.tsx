import cairoVector from '@/assets/Cairo-vector.svg'
import { AnimatedTopRightRectangle } from '@/components/animated-top-right-rectangle'
import React from 'react'
import { AnimatedBottomLeftRectangle } from '@/components/animated-bottom-left-rectangle'
import { BottomGrayRectangle } from '../components/bottom-gray-rectangle'

type props = {
  children: React.ReactNode
  animationDuration?: number
  disableAnimation?: boolean
}
export function Layout(props: props) {
  return (
    <div className="h-screen w-screen">
      <img
        src={cairoVector}
        className="fixed right-[-4.85rem] z-10 h-screen w-screen opacity-15"
        alt="Cairo Vector"
      />
      <AnimatedTopRightRectangle
        animationDuration={props.animationDuration}
        disableAnimation={props.disableAnimation}
      />
      {props.children}
      <AnimatedBottomLeftRectangle
        animationDuration={props.animationDuration}
        disableAnimation={props.disableAnimation}
      />
      <BottomGrayRectangle />
    </div>
  )
}
