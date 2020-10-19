<template>
    <div class="tabs-pane" :class="classes" v-if="active"> 
        <slot></slot>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active: {
                type: Boolean,
                default: false
            }
        }
    },
    props: {
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
    name: 'GuluTabsPane',
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
    .tabs-pane {
        &.active {
            // background: red;
        }
    }
</style>