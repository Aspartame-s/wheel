<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'GuluTabs',
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            defaulat: 'horizontal',
            validator (value) {
                return ['horizontal', 'vertical'].indexOf(value) >= 0
            }
        }
    },
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        if (this.$children.length == 0) {
            console && console.warn &&
            console.warn('tabs里应该是子组件tabs-head和tabs-body')
        }
        this.$children.forEach((vm) => {
            if(vm.$options.name === 'GuluTabsHead') {
                vm.$children.forEach((item) => {
                    if(item.name === this.selected) {
                        this.eventBus.$emit('update:selected', this.selected, item)
                    }
                })
            }
        })
    }
}
</script>
<style lang="scss">

</style>