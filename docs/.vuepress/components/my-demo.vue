<template>
  <div>
    <el-button type="success">按钮</el-button>
    <button @click="change">{{buttonName}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonName: "点击按钮"
    };
  },
  methods: {
    change() {
      console.log(111);
    }
  }
};
</script>
