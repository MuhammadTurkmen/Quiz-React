import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {waiting, loading, questions, index, correct} = useGlobalContext()
  
  if(waiting) {
    return <SetupForm />  
  } 
  if(loading) {
    return <Loading />
  }
  const {question, incorrect_answers, correct_answer} = questions[0]
  const answers = [...incorrect_answers, correct_answer]
  
  return <main>
    {/* <Modal /> */}
    <section className='quiz'>
      <p className='correct-answers'>
        correct answers : {correct}/{index}
      </p>

      <article className='container'>
        <h2 dangerouslySetInnerHTML={{__html: question}}/>
        <div className='btn-container'></div>
      </article>
    </section>
  </main>
}

export default App
