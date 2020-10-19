<template>
    <div class="tabs-item" @click="xxx" :class="classes" :data-name="name">
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
               active: this.active,
               disabled: this.disabled
           }
       }
    },
    inject: ['eventBus'],
    methods: {
        xxx() {
            if(this.disabled) { return }
            this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
            this.$emit('click', this)
        }
    },
    created() {
        if(this.eventBus) {
            this.eventBus.$on('update:selected',(name) => {
                if(name === this.name) {
                    this.active = true
                }else {
                    this.active = false
                }
            })
        }
       
    }    
}
</script>
<style lang="scss">
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        align-items: center;
        display: flex;
        &.active {
            color: blue;
            font-weight: bold;
        }
        &.disabled {
            color: gray;
            cursor: not-allowed;
        }
    }
</style>