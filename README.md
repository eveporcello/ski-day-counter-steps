Adding CSS
=======

* Lib.js - get rid of inline styles

```javascript
import React from 'react'
import text from './titles.json'
import './stylesheets/goodbye.scss'
import './stylesheets/hello.css'

export const hello = (
    <h1 id='title'
        className='hello'>
        {text.hello}
    </h1>
)

export const goodbye = (
    <h1 id='title'
        className='goodbye'>
        {text.goodbye}
    </h1>
)
```

* hello.css

```css
.hello {
    background-color: indigo;
    color: turquoise;
}
```

* Goodbye.scss

```scss
$bg-color: turquoise;
$text-color: indigo;

.goodbye {
  background-color: $bg-color;
  color: $text-color;
}
```


* change config
* npm install style-loader css-loader autoprefixer-loader sass-loader node-sass --save-dev

```javascript
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'

            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
```