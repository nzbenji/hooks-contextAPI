import React, { useState, useEffect } from 'react';
import Notes from './Notes'

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('run once')
  })

  useEffect(() => {
    document.title = count
  }, [count])

  return (
    <div>
      <p>The current {text || 'count'} is {count} </p>
      <button onClick={ () => setCount(count +1) }>+1</button>
      <button onClick={ () => setCount(count -1) }>-1</button>
      <button onClick={ () => setCount(props.count) }>Reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>

      <div>
        <Notes />
      </div>
    </div>
  )
}

App.defaultProps = {
  count: 0
}

export default App;
