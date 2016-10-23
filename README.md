02_04 : Babel Static
=========

* Create a project

```
npm init
```

* Install babel-cli

```
npm install --save-dev babel-cli
```

* change the link in index.html to 'bundle.js'
* change type='text/babel' to type='text/javascript' 
* put original file called index.js in src
* Add assets file (Target for the src)

* Need to install presets
* create .babelrc

```javascript
{
    'presets': ['latest', 'stage-0', 'react']
}
```

* install presets from npm

```
npm install --save-dev babel-preset-latest babel-preset-stage-0 babel-preset-react 
```


* add httpster as a start command 

```
babel ./src/index.js --out-file ./dist/assets/bundle.js
```

* Then npm start

```
npm start

```