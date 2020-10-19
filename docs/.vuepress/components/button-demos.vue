<template>
    <div>
        <g-button>默认</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button :loading="loading" @click='loading=!loading'>加载中</g-button>
    </div>
</template>
<script>
    import Button from '../../../src/button.vue'
    export default {
        components: {
            'g-button': Button
        },
        data () {
            return {
                loading: true
            }
        }
    }
</script>