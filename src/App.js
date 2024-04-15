import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
  const [questions, setQuestions] = useState(data);
  return <main>
    <div className='container'>
      <h3>김효중의 <br/> 한장짜리 <br/> Information</h3>
      <section className='info'>
        {questions.map((question) => {
          return (<SingleQuestion key={question.id} {...question}></SingleQuestion>);
        })}
      </section>
    </div>
  </main>
}

export default App;
