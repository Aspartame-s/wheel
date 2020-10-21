Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Aspartame-s 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


FrankFang
/
frank-test-1
2
7165
Code
Issues
Pull requests
2
Actions
Projects
Wiki
Security
Insights
frank-test-1/src/tabs/tabs-head.vue
@FrankFang
FrankFang 移动目录结构，测试通过
Latest commit 6b8e349 on 1 Sep 2018
 History
 1 contributor
53 lines (53 sloc)  1.26 KB
  
<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GuluTabsHead',
    inject: ['eventBus'],
    mounted () {
      this.eventBus.$on('update:selected', (name, item) => {
        this.updateLinePosition(item)
      })
    },
    methods: {
      updateLinePosition (selectedItem) {
        let {width, left} = selectedItem.$el.getBoundingClientRect()
        let {left: left2} = this.$refs.head.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left - left2}px`
      }
    }
  }
</script>
<style scoped lang="scss">
  $tab-height: 40px;
  $blue: blue;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 350ms;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>

