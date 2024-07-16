import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'LibraryComponent',

  setup () {
    return () => h(QBadge, {
      class: 'LibraryComponent',
      label: 'badge',
      color: 'primary'
    })
  }
}
