<template>
    <div>
        <g-button>默认</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button :loading="loading" @click='loading=!loading'>点我</g-button>

        <pre>
        <code>{{content}}</code>
        </pre>
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
                loading: true,
                content: `
                    <g-button>默认</g-button>
                    <g-button icon="setting">设置</g-button>
                    <g-button :loading="loading" @click='loading=!loading'>加载中</g-button>
                `
            }
        }
    }
</script>