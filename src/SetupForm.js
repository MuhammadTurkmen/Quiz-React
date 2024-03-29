import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {quiz, handleChange, handleSubmit, error} = useGlobalContext()

  return <main>
    <section className='quiz quiz-small'>
      <form className='setup-form'>
        {/* amount */}
        <div className='form-control'></div>
      </form>
    </section>
  </main>
}

export default SetupForm
