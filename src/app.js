import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';
import Row from './row.vue';
import Col from './col.vue';

Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false
    },
    methods: {
        inputChange (e) {
            console.log(e)
        }
    }
})