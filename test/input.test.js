const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props',() => {
        it('接收value', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: 'hi'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('hi')
            vm.$destroy()
        })
        it('接收disabled', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            vm.$destroy()
        })
        it('接收error', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    error: '123'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerHTML).to.equal('123')
            vm.$destroy()
        })
    }) 
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
          vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
          ['change', 'input', 'focus', 'blur']
            .forEach((eventName) => {
              vm = new Constructor({}).$mount()
              const callback = sinon.fake();
              vm.$on(eventName, callback)
              //触发input的change 事件
              let event = new Event(eventName);
              let inputElement = vm.$el.querySelector('input')
              inputElement.dispatchEvent(event)
              expect(callback).to.have.been.calledWith(event)
            })
        })
      })
    
})