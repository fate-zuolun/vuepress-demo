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
          title="2020.05"
          description="总算是结束了封控的时期，我也回到了学校里面，这段时间我学习了uni-app和node.js感觉变强了很多（笑），我还准备做一个项目，使用网易云的接口来模仿一个“网易云小程序，这便是我这段时间做的事情”"
        ></el-step>
        <el-step
          title="2020.09-2021.06"
          description="不知不觉到了大三要去实习的时候了，在这段时间，我也是第一次找工作，明白了找工作的不容易，总算是在大三开学之际找到了一份前端的工作，真不容易，这个公司用的是uni-app和微信小程序，我觉得是一个比较适合我的公司"
        ></el-step>
        <el-step
          title="2021.07-2023-10"
          description="这段时间跨度有点大，这这两年多的时间里面，我实习完后入职了一家更大的公司，也是我的第一份正式工作，我学习了Angular、electron.js等很多技术栈，也接触到了一个大型项目，收获颇多，我还在这段时间考了计算机技术与软件专业技术资格（水平）考试，获取了中级职称证书，我感觉还不错。"
        ></el-step>
        <!-- <el-step
          title="未来"
          icon="el-icon-loading"
          description=""
        ></el-step> -->
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
