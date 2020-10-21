<template>
    <div style="padding-top: 16px">
        <p>
            <strong>预览</strong>
        </p>
        <g-button>默认</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button :loading="loading" @click='loading=!loading'>点我</g-button>
        
        <p>
          <strong>代码</strong>
        </p>
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
                `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
