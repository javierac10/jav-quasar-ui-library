import { h } from 'vue'
import { QAvatar } from 'quasar'

export default {
  name: 'ComponentButton',

  setup () {
    return () => h(QAvatar, {
      class: 'ComponentButton',
      label: 'Botón', 
    }, {
        
    })

  }
}
