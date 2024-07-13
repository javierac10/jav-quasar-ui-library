<template>
    <QBtn :label="label" color="primary"></QBtn>
</template>

<script>
import { QBtn } from 'quasar'
export default {
    name: 'MyQuasarButton',
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