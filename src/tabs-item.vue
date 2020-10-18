<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GuluTabsItem',
    data () {
        return {
            active: {
                type: Boolean,
                default: false
            }
        }
    },
    props: {
        disabled: {
            type: Boolean,
            defaule: false
        },
        name: {
            type: [Number, String],
            required: true
        }
    },
    computed: {
       classes () {
           return {
               active: this.active
           }
       }
    },
    inject: ['eventBus'],
    methods: {
        xxx() {
            this.eventBus.$emit('update:selected', this.name)
        }
    },
    created() {
        this.eventBus.$on('update:selected',(name) => {
            if(name === this.name) {
               this.active = true
            }else {
               this.active = false
            }
        })
    }    
}
</script>
<style lang="scss">
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        &.active {
            background: red;
        }
    }
</style>