// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState(' ');

  const inputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value)
  }

  function handleChange(event) {
    const value = event.target.value;
    // if(value !== value.toLowerCase()) {
    //   setError('Username must be lower case.');
    // }
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='input'>Username:</label>
        <input value={username} onChange={handleChange} ref={inputRef} id='input' type="text" />
      </div>
      {/* <div style={{color: 'red'}}>{error}</div> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
