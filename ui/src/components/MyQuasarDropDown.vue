<template>
    <div class="q-pa-md">
      <q-btn-dropdown color="primary" label="Dropdown Button">
        <q-list>
          <q-item clickable @click="onItemClick">
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>
  
          <q-item clickable @click="onItemClick">
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>
  
          <q-item clickable @click="onItemClick">
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </template>
  <script>
import { QList, QItem, QItemLabel, QItemSection, QBtnDropdown } from 'quasar'
export default {
    name: 'MyQuasarTwoButton',
    props: {
        color: {
            type: String,
            required: false
        }
    },
    methods: {
        onItemClick(event) {
            console.log('event', event.value)
        }
    },
    components: {
        QList, QItem, QItemLabel, QItemSection, QBtnDropdown
    }
};
</script>
<!-- </script> -->
  <!-- <script setup>
clickable v-close-popup
    const onItemClick = () => {
        console.log('Clicked on an Item')
      }


  </script> -->
