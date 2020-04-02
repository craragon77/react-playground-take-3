import React from 'react'
import demonym from './demonym' 
import ReactDOM from 'react-dom'
import App from '../App'

it('the demonym is successfully rendered', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
})