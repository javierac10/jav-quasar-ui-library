
[![npm](https://img.shields.io/npm/v/quasar-ui-ui-test.svg?label=quasar-ui-ui-test)](https://www.npmjs.com/package/quasar-ui-ui-test)
[![npm](https://img.shields.io/npm/dt/quasar-ui-ui-test.svg)](https://www.npmjs.com/package/quasar-ui-ui-test)

**Compatible with Quasar UI v2 and Vue 3**.


# Component LibraryComponent
 UI Test library base on vue 3 and Quasar just for test purpose.
<br><br>

## Requisites

Create a vueJS 3 project and install quasar


## Installation

```bash
npm install quasar-ui-ui-test
```
<br>

## Vue CLI project
After configure quasar in main(JS|TS) file
```ts
import Vue from 'vue'
import Plugin from 'quasar-ui-ui-test'
import 'quasar-ui-ui-test/dist/index.css'
...
const app = createApp()
...

app.use(Plugin, {
  color: COLOR_CODE
})
```

**COLOR_CODE:** it's optional and it should to be a hexadecimal number code (#00FF00)

<br>

## List of Components

```js
<script>
import { LibraryComponent, MyQuasarButton, MyQuasarDropDown, MyQuasarTwoButton } from 'quasar-ui-ui-test'

export default {
  
  components: {
    LibraryComponent,
    MyQuasarButton,
    MyQuasarDropDown,
    MyQuasarTwoButton
  }

}
</script>
```

<br>

MIT (c) Javier Araujo <javier.araujo.cuadros@gmail.com>
