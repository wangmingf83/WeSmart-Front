<template>
  <div class="content">
    <!-- 欢迎语 -->
    <!-- <div class="item" v-if="templateInfo">
      <div class="msg">
        <div class="word">
          <p
            style="line-height: 18px"
            v-html="templateInfo?.replace(/\n|\r\n/g, '<br>').replace(/ /g, ' &nbsp')"
          ></p>
        </div>
      </div>
    </div> -->
    <div class="item mb10" style="margin-top: 0px" v-if="content">
      <div class="msg">
        <div class="word">
          <p
            style="line-height: 18px"
            v-html="content?.replace(/\n|\r\n/g, '<br>').replace(/ /g, ' &nbsp')"
          ></p>
        </div>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap">
      <div class="item" v-for="(data, key) in list" :key="key">
        <!-- <div class="avatar222"><img src="../../assets/drainageCode/header.png" /></div> -->
        <!-- <div class="msg" v-if="data.mediaType === '4'">
        <div class="word">
          <p style="white-space: pre-line">{{ data.content }}</p>
        </div>
      </div> -->
        <div class="msg" v-if="data.mediaType === '0'">
          <div class="image">
            <img :src="data.materialUrl" />
          </div>
        </div>
        <div class="msg" v-if="data.mediaType === '9'">
          <div class="word-and-image">
            <div>
              {{ data.materialName }}
            </div>
            <div class="sub-content">
              <div>
                {{ data.content }}
              </div>
              <div>
                <img :src="data.coverUrl" v-if="data.coverUrl && data.coverUrl != ''" />
                <svg-icon class="icon-style" icon="imgText" v-else></svg-icon>
              </div>
            </div>
          </div>
        </div>
        <!-- 文章 -->
        <div class="msg" v-if="data.mediaType === '12'">
          <div class="word-and-image">
            <div>
              {{ data.materialName }}
            </div>
            <div class="sub-content">
              <div>
                {{ data.digest }}
              </div>
              <div>
                <img :src="data.coverUrl" v-if="data.coverUrl && data.coverUrl != ''" />
                <svg-icon class="icon-style" icon="article" v-else></svg-icon>
              </div>
            </div>
          </div>
        </div>
        <!-- 视频 -->
        <div class="msg" v-if="data.mediaType === '2'">
          <div class="word-and-image">
            <div>
              {{ data.materialName }}
            </div>
            <div class="sub-content">
              <div>
                {{ data.digest }}
              </div>
              <div>
                <img :src="data.coverUrl" v-if="data.coverUrl && data.coverUrl != ''" />
                <svg-icon class="icon-style" icon="pic" v-else></svg-icon>
              </div>
            </div>
          </div>
        </div>
        <!-- 文件 -->
        <div class="msg" v-if="data.mediaType === '3'">
          <div class="word-and-image">
            <div>
              {{ data.materialName }}
            </div>
            <div class="sub-content">
              <div>
                {{ data.digest }}
              </div>
              <div>
                <svg-icon
                  class="icon-style"
                  :icon="data.materialUrl ? filType(data.materialUrl) : ''"
                  v-if="data.materialUrl"
                ></svg-icon>
              </div>
            </div>
          </div>
        </div>
        <!-- 海报 -->
        <div class="msg" v-if="data.mediaType === '5'">
          <div class="word-and-image">
            <div>
              {{ data.materialName }}
            </div>
            <div class="sub-content">
              <div>
                {{ data.digest }}
              </div>
              <div>
                <img :src="data.materialUrl" v-if="data.materialUrl && data.materialUrl != ''" />
                <svg-icon class="icon-style" icon="pic" v-else></svg-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'preview-client',
  components: {},
  props: {
    name: {
      type: String,
      default: '客户',
    },
    // 文章详情展示
    // article: {
    //   type: String,
    //   default: null,
    // },
    // 内容
    content: {
      type: String,
      default: null,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  watch: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 处理文件类型
    filType(file) {
      let filecontent = JSON.parse(JSON.stringify(file))
      filecontent = filecontent.split('.')
      let type = filecontent[filecontent.length - 1]
      if (type === 'pdf') {
        return 'pdf'
      } else if (['doc', 'docx'].includes(type)) {
        return 'word'
      } else if (['ppt', 'pptx', 'pps', 'pptsx'].includes(type)) {
        return 'ppt'
      } else {
        return ''
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.redBox {
  min-height: 26px;
  display: inline-block;
  box-sizing: border-box;
  word-break: break-all;
  margin-left: 5px;
  .red-box {
    width: 165px;
    height: 68px;
    background-image: url('../../assets/image/newred.png');
    background-size: 100%;
    background-repeat: no-repeat;
    padding-top: 20px;
    border-radius: 4px;
    .red-text {
      font-size: 14px;
      color: #fff;
      margin-left: 56px;
      width: 98px;
      white-space: nowrap; // 强制一行
      text-overflow: ellipsis; // 文字溢出显示省略号
      overflow: hidden; // 溢出隐藏
    }
  }
}
.function {
  width: 160px;
  .function-item {
    width: 160px;
    min-height: 76px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(242, 242, 242, 1);
    border-radius: 5px;
    display: flex;
    padding: 10px;
    padding-top: 6px;
    cursor: pointer;
    .card-style {
      margin-right: 10px;
      margin-top: 8px;
      font-size: 32px;
    }
    .card-name {
      font-size: 14px;
      line-height: 26px;
      width: 98px;
      white-space: nowrap; // 强制一行
      text-overflow: ellipsis; // 文字溢出显示省略号
      overflow: hidden; // 溢出隐藏
    }
    .item-text {
      font-size: 12px;
      color: #aaaaaa;
      line-height: 14px;
      width: 98px;
    }
  }
}
.icon-style {
  width: 40px;
  height: 40px;
}

.content {
  padding: 15px;

  .item {
    font-size: 12px;
    font-weight: 400;
    color: #666666;
    display: flex;
    margin-top: 20px;

    // &:first-child {
    //   margin-top: 0;
    // }

    .avatar222 {
      // align-self: center;
      margin-right: 5px;
    }

    .msg {
      position: relative;
      min-height: 26px;
      background: #ffffff;
      box-shadow: 0px 2px 6px 0px rgba(60, 136, 240, 0.1);
      border: 1px solid #e1edfc;
      display: inline-block;
      border-radius: 4px;
      box-sizing: border-box;
      word-break: break-all;
      margin-left: 5px;
      .word {
        padding: 5px 12px;
      }

      .image {
        padding: 12px;

        img {
          width: 94px;
          height: 90px;
        }
      }

      .word-and-image {
        padding: 12px;
        min-width: 160px;
        .sub-content {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 400;
          color: #999999;

          img {
            height: 40px;
            width: 40px;
          }
        }
      }
      .miniprogram {
        padding: 12px;
        .mini-header {
          display: flex;
          align-items: center;
          img {
            height: 18px;
            width: 18px;
            margin-right: 5px;
          }
        }
        .mini-img {
          margin: 10px 0;
          width: 143px;
          height: 120px;
        }
        .mini-footer {
          display: flex;
          align-items: center;
          img {
            height: 14px;
            width: 14px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
