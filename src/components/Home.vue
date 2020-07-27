<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col class="logo-col">
          <span>TGS</span>
        </el-col>

        <el-col class="menu-col">
          <!-- 导航栏 -->
          <el-menu default-active="1" mode="horizontal">
            <el-menu-item index="1" @click="jumpe('#bg-index')"
              >首页</el-menu-item
            >
            <el-menu-item index="2" @click="jumpe('#resume')"
              >个人简历</el-menu-item
            >
            <el-menu-item index="3" @click="jumpe('#ability')"
              >技术栈</el-menu-item
            >
            <el-menu-item index="4" @click="jumpe('#project')"
              >职业技能</el-menu-item
            >
          </el-menu>
        </el-col>
      </el-row>
    </el-header>

    <el-main>
      <div>
        <!-- 首页背景图 -->
        <div class="bg-index" id="bg-index">
          <div class="block">
            <el-carousel height="500px">
              <el-carousel-item v-for="(item, i) in imagUrl" :key="i">
                <img :src="item" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 个人简历 -->
        <div class="resume" id="resume">
          <!-- 分割线 -->
          <div class="div-divider">
            <el-divider>
              <p>个人简历</p>
            </el-divider>
            <p>
              <el-tag size="small">湖南科技职业学院</el-tag>
              <el-tag type="success" size="small">专科</el-tag>
            </p>
          </div>
          <div class="education">
            <div class="title">
              <span>项目经历</span>
              <el-divider direction="vertical"></el-divider>
            </div>
            <div class="div-timeline">
              <el-timeline>
                <el-timeline-item timestamp="2019/6/10-2019/6" placement="top">
                  <el-card>
                    <h4>
                      2019.6 — 2020.7 湖南倍速网络科技有限公司 web前端开发工程师
                    </h4>
                    <p>
                      1.负责相关产品的需求以及前端程序的实现，提供合理的前端架构；
                    </p>
                    <p>2.与产品、后台开发人员保持良好沟通，能快速理解、消化各方需求。</p>
                    <p>3.按照需求独立完成各种特效制作；</p>
                    <p>4.负责页面通过标准检验，兼容各个主流浏览器；</p>
                    <p> 5.优化产品界面，为用户提供更好的体验；</p>
                  </el-card>
                </el-timeline-item>
                 <el-timeline-item timestamp="2019/6/10-2019/6" placement="top">
                  <el-card>
                    <h4>
                      2019.6 — 2020.7 湖南倍速网络科技有限公司 web前端开发工程师
                    </h4>
                    <p>
                      1.负责相关产品的需求以及前端程序的实现，提供合理的前端架构；
                    </p>
                    <p>2.与产品、后台开发人员保持良好沟通，能快速理解、消化各方需求。</p>
                    <p>3.按照需求独立完成各种特效制作；</p>
                    <p>4.负责页面通过标准检验，兼容各个主流浏览器；</p>
                    <p> 5.优化产品界面，为用户提供更好的体验；</p>
                  </el-card>
                </el-timeline-item>
                 <el-timeline-item timestamp="2019/6/10-2019/6" placement="top">
                  <el-card>
                    <h4>
                      2019.6 — 2020.7 湖南倍速网络科技有限公司 web前端开发工程师
                    </h4>
                    <p>
                      1.负责相关产品的需求以及前端程序的实现，提供合理的前端架构；
                    </p>
                    <p>2.与产品、后台开发人员保持良好沟通，能快速理解、消化各方需求。</p>
                    <p>3.按照需求独立完成各种特效制作；</p>
                    <p>4.负责页面通过标准检验，兼容各个主流浏览器；</p>
                    <p> 5.优化产品界面，为用户提供更好的体验；</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </div>
        <!-- 个人技能 -->
        <div class="ability" id="ability">
          <!-- 分割线 -->
          <div class="div-divider">
            <el-divider>
              <p>技术栈</p>
            </el-divider>
            <p>
              <el-tag size="small">Vue全家桶</el-tag>
              <el-tag type="success" size="small">JavaScript</el-tag>
            </p>
          </div>
          <!-- 个人技能内容 -->
          <div class="skill">
            <span class="vue">Vue</span>
            <span class="js">JS</span>
            <span class="css">CSS</span>
            <span class="echarts">nodejs</span>
            <span class="webpack">webpack</span>
            <span class="node">node</span>
            <span class="ps">ps</span>
            <span class="applets">小程序</span>
            <span class="mongodb">mysql</span>
          </div>
        </div>
        <!-- 项目经验 -->
        <div class="project" id="project">
          <el-card>
            <!-- 分割线 -->
            <div class="div-divider">
              <el-divider>
                <p>职业技能</p>
              </el-divider>
              <p>
                <el-tag size="small"
                  >1.精通HTML和CSS，具有良好的代码规范，能熟练解决低版本浏览器兼容问题</el-tag
                >
                <!-- <el-tag type="success" size="small"></el-tag> -->
              </p>
              <p>
                <el-tag size="small"
                  >2.熟练掌握原生JS，具备良好的编程思想,熟练使用ES6及以后版本的各项新特性</el-tag
                >
              </p>
              <p>
                <el-tag size="small"
                  >3.精通jquery等前端类库和和Ajax交互技术进行与服务端交互与动态效果实现</el-tag
                >
              </p>
              <p>
                <el-tag size="small"
                  >4.熟练使用Bootstrap，Elementui，mui等前端主流UI框架</el-tag
                >
              </p>
              <p>
                <el-tag size="small"
                  >5.熟悉媒体查询和响应式，能够运用bootstrap快速搭建响应式页面</el-tag
                >
              </p>
              <p>
                <el-tag size="small"
                  >6.熟悉使用HTML5+CSS3各种新技术，能使用canvas进行简单的绘图</el-tag
                >
              </p>
              <p>
                <el-tag size="small"
                  >7.精通Vue、Vue-Router、Vuex，能熟练使用vuecli进行项目开发</el-tag
                >
              </p>
              <p>
                <el-tag size="small"
                  >8.了解webpack等自动化工具进行工程化构建开发</el-tag
                >
              </p>
              <p>
                <el-tag size="small"
                  >9.熟练使用ajax前后端交互技术，能够运用jsonp解决跨域问题</el-tag
                >
              </p>
              <p>
                <el-tag size="small"
                  >10.熟练使用Git等版本控制工具来配合团队开发</el-tag
                >
              </p>
              <p>
                <el-tag size="small"
                  >11.熟练应用Hbuilder、mui和H5+开发App</el-tag
                >
              </p>
              <p>
                <el-tag size="small">12.了解微信小程序开发</el-tag>
              </p>
              <p>
                <el-tag size="small"
                  >13.熟练使用vscode，Hbuilder，sublime等各种编辑器进行高效的开发</el-tag
                >
              </p>
              <p>
                <el-tag size="small">14.熟练使用PS进行切图等基础操作</el-tag>
              </p>
              <p>
                <el-tag size="small"
                  >15.了解MySQL数据库，并能进行基础的crud操作</el-tag
                >
              </p>
            </div>
          </el-card>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      imagUrl: [
        "http://demo.cssmoban.com/cssthemes6/deck_8_meet-me/assets/img/hero-area.jpg",
        "http://demo.cssmoban.com/cssthemes6/deck_8_meet-me/assets/img/background/bg-1.jpg",
      ],
    };
  },
  methods: {
    jumpe(index) {
      console.log(index);
      this.$el
        .querySelector(index)
        .scrollIntoView({ block: "start", behavior: "smooth" });

      // // 可以实现跳转到指定的位置
      // var PageId = this.$el.querySelector(index);
      // // 打印出对应页面与窗口的距离
      // console.log(PageId.offsetTop);
      // // widow 根据浏览器滚动条，如果你是要在某个盒子里面产生滑动，记得修改

      // window.scrollTo({
      //   top: PageId.offsetTop,
      //   behavior: "smooth"
      // });
    },
  },
};
</script>
<style lang="less" scoped>
h3 {
  color: #fff;
}
.el-container {
  height: 100%;
}
.el-header {
  display: flex;
  width: 90%;
  align-content: center;
  justify-content: flex-start;

  .el-row {
    width: 100%;
    display: flex;
    justify-content: center;
    .logo-col {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;
      font-size: 25px;
      margin-left: 40px;
      span {
        margin-left: 8px;
      }
    }
    .menu-col {
      // width: 80%;
      margin-left: 30px;
      .el-menu {
        margin-left: 20px;
      }
      .el-menu-item {
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }
}
.el-main {
  padding: 0;
  margin: 0;
  // 背景图
  // 个人简历
  .resume {
    width: 100%;
    .div-divider {
      margin-top: 20px;
    }
    // 教育背景
    .education {
      .div-timeline {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .el-timeline {
        width: 100%;
      }
    }
  }
  // 个人技能
  .ability {
    width: 100%;
    .skill {
      margin: 150px 0 100px 0;
      display: flex;
      justify-content: center;
      position: relative;
      span {
        display: inline-block;
        border-radius: 50%;
        text-align: center;
      }
      .vue {
        background-color: rgba(102, 153, 204, 1);
        width: 200px;
        height: 200px;
        line-height: 200px;
        font-size: 28px;
        z-index: -1;
      }
      .js {
        background-color: rgba(255, 153, 102, 0.5);
        width: 130px;
        height: 130px;
        line-height: 130px;
        font-size: 26px;
        position: absolute;
        left: 43%;
        bottom: 150px;
        z-index: 0;
      }
      .css {
        background-color: rgba(102, 204, 204, 0.8);
        width: 90px;
        height: 90px;
        font-size: 26px;
        line-height: 90px;
        font-size: 26px;
        position: absolute;
        left: 35%;
        top: 100px;
        z-index: 0;
      }
      .echarts {
        background-color: rgba(255, 153, 153, 0.7);
        width: 100px;
        height: 100px;
        line-height: 100px;
        font-size: 24px;
        position: absolute;
        left: 59%;
        bottom: 10px;
        z-index: 0;
      }
      .webpack {
        background-color: rgba(255, 204, 51, 0.8);
        width: 70px;
        height: 70px;
        line-height: 70px;
        font-size: 13px;
        position: absolute;
        left: 30%;
        top: 20px;
        z-index: 0;
      }
      .node {
        background-color: rgba(204, 102, 102, 0.5);
        width: 60px;
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        position: absolute;
        left: 51%;
        bottom: -10px;
        z-index: 0;
      }
      .ps {
        background-color: rgba(153, 153, 255, 0.8);
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        position: absolute;
        left: 60%;
        top: -50px;
        z-index: 0;
      }
      .applets {
        background-color: rgba(93, 20, 161, 0.8);
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        position: absolute;
        left: 55%;
        top: -40px;
        z-index: 0;
      }
      .mongodb {
        background-color: rgba(34, 177, 196, 0.8);
        width: 55px;
        height: 55px;
        line-height: 55px;
        font-size: 12px;
        position: absolute;
        left: 35%;
        top: -40px;
        z-index: 0;
      }
    }
  }
  // 分割线
  .div-divider {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      .el-tag {
        margin-right: 10px;
      }
    }
    .el-divider {
      width: 80%;
      p {
        font-size: 20px;
      }
    }
  }
  .title {
    width: 80%;
    margin: 0 0 15px 50px;
    font-weight: 600;
  }
}
</style>
