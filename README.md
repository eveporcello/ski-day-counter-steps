02_06 : Webpack
=========

* Introduce concept of loading json data
* introduce module concepts

* create a lib.js file

```javascript
import React from 'react'
import text from './titles.json'

export const hello = (
    <h1 id='title'
        className='header'
        style={{backgroundColor: 'purple', color: 'yellow' }}>
        {text.hello}
    </h1>
)

export const goodbye = (
    <h1 id='title'
        className='header'
        style={{backgroundColor: 'yellow', color: 'purple' }}>
        {text.goodbye}
    </h1>
)
```


* Create titles.json
```
{
  "hello": "Bonjour!",
  "goodbye": "Au Revoir!"
}
```

* npm install --save-dev json-loader
* edit the webpack.config

```javascript
{
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            }
```

* Run it