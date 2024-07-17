<script lang="ts">
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
<template>
    <QBtn color="primary" :label="label"></QBtn>
</template>