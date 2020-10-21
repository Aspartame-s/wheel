<template>
    <div style="padding-top: 16px">
        <p>
            <strong>预览</strong>
        </p>
        <button-group>
            <g-button icon="left">上一页</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </button-group>
        
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
    import ButtonGroup from '../../../src/button-group.vue'
    export default {
        components: {
            'g-button': Button,
            'button-group': ButtonGroup
        },
        data () {
            return {
                loading: true,
                content: `
                    <button-group>
                        <g-button icon="left">上一页</g-button>
                        <g-button icon="right" icon-position="right">下一页</g-button>
                    </button-group>
                `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
