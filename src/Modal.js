import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModaleOpen, closeModle, correct, questions} = useGlobalContext()
  return <div className={`${isModaleOpen ? 'modal-container isOpen': 'modal-container'}`}>
    <div className='modal-content' >
      <h2>congrats!</h2>
    </div>
  </div>
}

export default Modal
