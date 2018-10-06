# Fill Template

Simple Fill Template using ES2015 string template

## Install

```sh
npm install fill-tpl
```

## Usage
```js
const fill = require('fill-tpl');

test('Fill right', () => {
  expect(
    fill('something went ${GOOD}').with({ GOOD: 'wrong' })
  ).toBe('something went wrong');
});

test('Fill wrong', () => {
  expect(() => fill('something went ${BAD}').with({ GOOD: 'wrong' })).toThrowError(ReferenceError);
});

```

## Usage 2

### `manifest.tpl.json`

```json
{
  "name": "Rancher Everyday",
  "content_scripts": [
    {
      "matches": ["${RANCHER_ADDR}/*"],
      "js": ["script.js"]
    }
  ],
  "manifest_version": 2,
  "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'",
  "icons": {
    "48": "icon.png"
  }
}
```

### `index.js`
```js
const fs = require('fs');
const fill = require('fill-tpl');

const template = fs.readFileSync('./manifest.tpl.json');
const finalText = fill(template).with(process.env);

console.log(finalText);
```

```sh
RANCHER_ADDR=https://localhost.com node index.js
```


# License
MIT @ Ninh Pham
