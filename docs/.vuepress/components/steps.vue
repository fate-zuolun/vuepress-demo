<template>
  <div>
    <div style="height: 1000px">
      <el-steps finishStatus="finish" direction="vertical" :active="active">
        <el-step
          title="2019.10"
          description="这一年我刚上大二，学校便开设了关于前端的课程，但现在看起来，与其说是前端，更像是网页美工，学的都是Dreamweaver这个这类的网页设计工具，但当时还是学的不异乐乎，便是由于这份开始的兴趣，以及对这门课程的喜爱，老师看我如此热爱，便叫我不需要跟着课程去学，让我了解前端的三剑客：HTML、CSS、JS，她也算是我进入前端这个领域的启蒙老师了，从此，一个新世界的大门从此打开了。"
        ></el-step>
        <el-step
          title="2019.11"
          description="在此之后，我便不与同学们一起跟着教材上的内容去学，而是自己去钻研关于HTML、CSS、JS的知识，在这之后的日子，菜鸟教程、W3school、B站黑马程序员的视频，都是我经常去逛的地方，我孜孜不倦的去学，在网上一直在找相关的教学视频，这样的学习方式，让我的自学能力大大的提升了，都说程序员要不断的汲取新的知识，我很庆幸因为有这段自学的经历，这也是自我提升的过程。"
        ></el-step>
        <el-step
          title="2020.01"
          description="不知不觉，寒假如期而至，本来打算在寒假这一个多月的时间，去学习一下Vue，结果新冠疫情不期而至，这场疫情打乱了很多人的节奏,也打乱了我的节奏，本来计划一个多月去学Vue的，现在有无限期的时间去了解了（笑），从这个节点开始，就到了全国封城的时期，疫情也带个我了机会，一个可以潜心学习的机会，在这封城的日子里，呆在家里学习，是我能唯一能做的事情，当然，这段日子的收获也不少，系统的了解了Vue全家桶(Vue、Vue-Router、Vuex)，知道了前端的预编译工具(Sass、Less)，了解了git，并且创建了githud和gitee的账号，有了自己的代码仓库，总之，封城在家的日子，对于我来说，也不坏。"
        ></el-step>
        <el-step
          title="2020.03"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="2020.05"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="2020.06-2020.10"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="2020.09-2021.06"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="2021.07-至今"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="未来"
          icon="el-icon-loading"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
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
    };
  },
  mounted() {
    if (this.active < 10) {
      this.setIntervalID = setInterval(() => {
        this.next();
      }, 1000);
    }
  },
  updated() {
    if (this.active === 9) {
      clearInterval(this.setIntervalID);
    }
  },
  methods: {
    next() {
      if (this.active++ > 9) {
        this.active = 0;
      }
    },
  },
};
</script>
