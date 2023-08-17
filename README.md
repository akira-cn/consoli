# Consoli

Consoli can output the content of console to a DOM element.

It hosts all the console methods including:

- log
- info
- warn
- error
- assert
- clear
- group
- groupCollapsed
- groupEnd
- count
- time
- countReset
- timeEnd
- dir
- table

## Usage

[Try it in CodePen](https://codepen.io/akira-cn-the-selector/pen/JjwPVXm)

```js
import {consoli} from 'https://unpkg.com/dom-consoli/dist/consoli.mjs';
const container = document.createElement('div');
const logger = consoli(container);
document.body.appendChild(container);
logger.warn('warning: something is wrong');
```

<img src="https://aircode-yvo.b-cdn.net/resource/1692268186801-axbs54e86hh.jpg" width="400">

### Work with [Consola](https://github.com/unjs/consola)

```js
import {consola} from 'https://unpkg.com/consola';
import {consoli} from 'https://unpkg.com/dom-consoli/dist/consoli.mjs';
const container = document.createElement('div');
window.console = consoli(container, {hintIcon: false, console: {warn: true, error: true}});
document.body.appendChild(container);
consola.info("Using consola 3.0.0");
consola.start("Building project...");
consola.warn("A new version of consola is available: 3.0.1");
consola.success("Project built!");
consola.error(new Error("This is an example error. Everything is fine!"));
consola.box("I am a simple box");
await consola.prompt("Deploy to the production?", {
  type: "confirm",
});
```

<img src="https://aircode-yvo.b-cdn.net/resource/1692267564887-xxgqd5dyohf.jpg" width="400">

