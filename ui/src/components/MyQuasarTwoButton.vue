<template>
    <q-btn :label="label" color="secondary"></q-btn>
</template>
<script>
import { QBtn } from 'quasar'
export default {
    name: 'MyQuasarTwoButton',
    props: {
        label: {
            type: String,
            required: true,
        }
    },
    components: {
        QBtn
    }
};
</script>