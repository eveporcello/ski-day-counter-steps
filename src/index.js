import React from 'react'
import { render } from 'react-dom'

render(
    <h1 id='title'
        className='header'
        style={{backgroundColor: 'purple', color: 'yellow' }}>
        Hello World!
    </h1>,
    document.getElementById('react-container')
)