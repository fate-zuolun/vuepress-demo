<template>
  <div>
    <div style="height: 1000px">
      <el-steps finishStatus="finish" direction="vertical" :active="active">
        <el-step title="未来" icon="el-icon-loading" description=""></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      setIntervalID: null,
    }
  },
  mounted() {
    if (this.active < 10) {
      this.setIntervalID = setInterval(() => {
        this.next()
      }, 1000)
    }
  },
  updated() {
    if (this.active === 9) {
      clearInterval(this.setIntervalID)
    }
  },
  methods: {
    next() {
      if (this.active++ > 9) {
        this.active = 0
      }
    },
  },
}
</script>
