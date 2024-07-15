<template>
    <q-btn color="primary" :label="label"></q-btn>
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