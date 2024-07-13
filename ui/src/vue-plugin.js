import MyQuasarButton from './components/MyQuasarButton.vue'
import MyQuasarTwoButton from './components/MyQuasarTwoButton.vue'
import Component from './components/Component'
import MyQuasarDropDown from './components/MyQuasarDropDown.vue'
// import ComponentButton from './components/ComponentButton'

const version = __UI_VERSION__

function install (app) {
  app.component(MyQuasarButton.name, MyQuasarButton)
  app.component(MyQuasarTwoButton.name, MyQuasarTwoButton)
  app.component(Component.name, Component)
  app.component('MyQuasarDropDown', MyQuasarDropDown)
  // app.component(ComponentButton.name, ComponentButton)
}

export {
  version,
  MyQuasarButton,
  MyQuasarTwoButton,
  Component,
  MyQuasarDropDown,
  // ComponentButton,
  install
}
