<template>
    <div class="wrapper" :class={error}>
        <input ref="input" type="text" :value="value" :disabled="disabled" :readonly="readonly"
         @change="$emit('change',$event.target.value)"
         @input="$emit('input', $event.target.value)"
         @focus="$emit('focus', $event.target.value)"
         @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
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
            type: String|Number
        },
        disabled: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        },
        readonly: {
            type: Boolean,
            default: false
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
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    .wrapper {
        display: inline-block;
        font-size: $font-size;
        align-items: center;
        > * {
            margin-right: 0.2em;
            &:last-child {
                margin-right: 0;
            }
        }
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
        .icon-error {
            fill: red;
        }
        .errorMessage {
            color: red
        }
    }
</style>