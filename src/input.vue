<template>
    <div class="wrapper" :class={error}>
        <input type="text" :value="value" :disabled="disabled">
        <template v-if="error">
            <icon name="setting"></icon>
            <span>{{error}}</span>
        </template>
       
    </div>
</template>

<script>
import Icon from './icon.vue'
export default {
    components: { Icon },
    name: 'GuluInput',
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color: rgb(0, 0, 0, 0.5);
    .wrapper {
        display: inline-block;
        font-size: $font-size;
        > input {
            height: 32px;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                outline: none;
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }
            &[disabled] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: red;
            }
        }
    }
</style>