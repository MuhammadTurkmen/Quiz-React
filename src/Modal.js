import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModaleOpen, closeModle, correct, questions} = useGlobalContext()
  return <div className={`${isModaleOpen ? 'modal-container isOpen': 'modal-container'}`}>
    
  </div>
}

export default Modal
