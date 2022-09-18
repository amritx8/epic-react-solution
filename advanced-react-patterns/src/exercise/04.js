// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  function getTogglerProps({on, onClick} = {}) {
    return {
      'aria-pressed': on,
      onClick: () => {
        onClick?.()
        toggle();
      }
    }
  }

  // 🐨 Add a property called `togglerProps`. It should be an object that has
  // `aria-pressed` and `onClick` properties.
  // 💰 {'aria-pressed': on, onClick: toggle}
  return {on, toggle, togglerProps: {
    'aria-pressed': on,
    onClick: toggle,
    getTogglerProps
  }}
}

function App() {
  const {on, getTogglerProps} = useToggle()
  return (
    <div>
      <Switch {...getTogglerProps({on})} />
      <hr />
      <button {...getTogglerProps({
        'aria-label': 'custom-button',
        onClick: () => {
          console.log('onButtonClick')
        }
      })}>
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
