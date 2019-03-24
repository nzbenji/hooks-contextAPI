import React, { useState } from 'react';

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('')

  return (
    <div>
      <p>The current {text || 'count'} is {count} </p>
      <button onClick={ () => setCount(count +1) }>+1</button>
      <button onClick={ () => setCount(count -1) }>-1</button>
      <button onClick={ () => setCount(props.count) }>Reset</button>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

App.defaultProps = {
  count: 0
}

export default App;
