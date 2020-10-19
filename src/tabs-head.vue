<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    mounted() {
        this.eventBus.$on('update:selected',(name, item) => {
            let {width, height, top, left} = item.$el.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.left = `${left}px`
        })
    }    
}
</script>
<style lang="scss">
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        border-bottom: 1px solid #ddd;
        position: relative;
        >.line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid blue;
            transition: all 400ms;
        }
        >.action-wrapper {
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding:0 1em;
        }
    }
</style>