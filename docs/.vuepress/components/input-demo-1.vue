<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <div>
        <g-input value="普通文本框"></g-input>
        <g-input value="禁止选择" disabled></g-input>
        <g-input value="只读" readonly></g-input>
        <g-input value="" error="姓名不能少于两个字"></g-input>

    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GInput from '../../../src/input'
  export default {
    components: {GInput},
    data () {
      return {
        selected: '1',
        value:'1',
        content: `
            <g-input value="普通文本框"></g-input>
            <g-input value="禁止选择" disabled></g-input>
            <g-input value="只读" readonly></g-input>
            <g-input value="" error="姓名不能少于两个字"></g-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
