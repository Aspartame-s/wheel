import Vue from 'vue';
import Button from './button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue';
import Row from './row.vue';
import Col from './col.vue';
import Sync from './sync.vue';
import Tabs from './tabs.vue';
import TabsHead from './tabs-head.vue';
import TabsItem from './tabs-item.vue';
import TabsBody from './tabs-body.vue';
import TabsPane from './tabs-pane.vue';


Vue.component('g-icon', Icon)
Vue.component('g-button', Button)
Vue.component('button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-sync', Sync)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        selectedTab: 'sports'
    },
    methods: {
        inputChange(e) {
            console.log(e)
        }
    }
})