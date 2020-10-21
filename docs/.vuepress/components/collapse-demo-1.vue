<template>
  <div style="padding-top: 16px">
      <h2>基本用法:</h2>
        <p>
            <strong>预览</strong>
        </p>
    <div>
      <i-collapse :selected.sync="selectedTab" single>
        <i-collapse-item title="标题1" name="1">hello，你好呢。</i-collapse-item>
        <i-collapse-item title="标题2" name="2">你知道我在想你吗?</i-collapse-item>
        <i-collapse-item title="标题3" name="3">我在等你呀!</i-collapse-item>
      </i-collapse>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  data() {
    return {
      selectedTab: ['1'],
      content: `
        <div>
          <i-collapse :selected.sync="selectedTab" single>
            <i-collapse-item title="标题1" name="1">hello，你好呢。</i-collapse-item>
            <i-collapse-item title="标题2" name="2">你知道我在想你吗?</i-collapse-item>
            <i-collapse-item title="标题3" name="3">我在等你呀!</i-collapse-item>
          </i-collapse>
        </div>
      `
    }
  },
  components: {
    'i-collapse': Collapse,
    'i-collapse-item': CollapseItem
  }
}
</script>
