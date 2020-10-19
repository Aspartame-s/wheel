<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line"></div>
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
        this.eventBus.$on('update:selected',() => {

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
        border: 1px solid red;
        position: relative;
        >.line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid blue;
            width: 100px;
        }
        >.action-wrapper {
        margin-left: auto;
    }
    }
</style>