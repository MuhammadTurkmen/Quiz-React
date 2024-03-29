import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {quiz, handleChange, handleSubmit, error} = useGlobalContext()

  return <main>
    <section className='quiz quiz-small'>
      <form className='setup-form'>
        {/* amount */}
        <div className='form-control'>
          <label htmlFor='amount'>number of questions</label>
          <input 
            type='number' 
            name='amount' 
            id='amount' 
            value={quiz.amount} 
            onChange={handleChange}
            className='form-input'
            min={1}
            max={50}
          />
        </div>
      </form>
    </section>
  </main>
}

export default SetupForm
