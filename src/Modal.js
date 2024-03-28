import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModaleOpen, closeModle, correct, questions} = useGlobalContext()
  return <div>modal component</div>
}

export default Modal
