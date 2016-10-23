import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'

render(
    goodbye,
    document.getElementById('react-container')
)