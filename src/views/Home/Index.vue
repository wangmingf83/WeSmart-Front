<template>
  <div>
    <el-card shadow="never">
      <el-skeleton :loading="loading" animated>
        <el-row :gutter="16" justify="space-between">
          <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
            <div class="flex items-center">
              <el-avatar :src="avatar" :size="70" class="mr-16px">
                <img src="@/assets/imgs/avatar.gif" alt="" />
              </el-avatar>
              <div>
                <div class="text-20px">
                  {{ t('workplace.welcome') }} {{ username }} {{ t('workplace.happyDay') }}
                </div>
                <div class="mt-10px text-14px text-gray-500">
                  {{ t('workplace.toady') }}，20℃ - 32℃！
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
            <div class="h-70px flex items-center justify-end lt-sm:mt-10px">
              <div class="px-8px text-right">
                <div class="mb-16px text-14px text-gray-400">{{ t('workplace.project') }}</div>
                <CountTo
                  class="text-20px"
                  :start-val="0"
                  :end-val="totalSate.project"
                  :duration="2600"
                />
              </div>
              <el-divider direction="vertical" />
              <div class="px-8px text-right">
                <div class="mb-16px text-14px text-gray-400">{{ t('workplace.toDo') }}</div>
                <CountTo
                  class="text-20px"
                  :start-val="0"
                  :end-val="totalSate.todo"
                  :duration="2600"
                />
              </div>
              <el-divider direction="vertical" border-style="dashed" />
              <div class="px-8px text-right">
                <div class="mb-16px text-14px text-gray-400">{{ t('workplace.access') }}</div>
                <CountTo
                  class="text-20px"
                  :start-val="0"
                  :end-val="totalSate.access"
                  :duration="2600"
                />
              </div>
            </div>
          </el-col>
        </el-row>
      </el-skeleton>
    </el-card>
  </div>

  <el-card shadow="never">
    <div class="container">
      <h2>行业背景</h2>
      <p style="margin-bottom: 0px;">
        国外的营销触达通道比较单一，主要以EDM为主。国内因为渠道的变化营销场景就复杂很多，当前国内做用户的营销触达主要的场景通道如下：
      </p>

      <div class="description" style="padding: 25px; margin-top: 0px;">
        <div class="list-item">
          <label>企业微信</label>私聊、社群、朋友圈
        </div>
        <div class="list-item">
          <label>微信运营</label>公众号、小程序、视频号
        </div>
        <div class="list-item">
          <label>电商运营</label>抖音、快手、淘宝、京东、拼多多
        </div>
        <div class="list-item">
          <label>公域运营</label>短信、邮件、APP弹窗、PUSH推送、banner位
        </div>
        <div class="list-item">
          <label>其他</label>其他渠道
        </div>
      </div>

      <p style="margin-top: 0px; margin-bottom: 0px;">
        虽然国内已经有非常多的 MarTech 公司做出了非常优秀的 SaaS 产品服务，但是国内的市场需求依然没有得到充分满足。主要体现在以下几点：
      </p>
      <div class="list" style="padding: 25px; margin-top: 00px;">
        <div class="list-item">
          <strong>痛</strong> — 企业更注重客户的数据安全、隐私保护及合规方面存在隐患，私有化部署意愿强烈。
        </div>
        <div class="list-item">
          <strong>痛</strong> — 经营场景复杂，需要同全域经营场景打通做一体化营销，而不是单纯的买一套系统工具。
        </div>
        <div class="list-item">
          <strong>痛</strong> — 需要源代码，越来越多的企业开始选择自建，以打造出更适合自己业务的营销系统。其背后的主要原因就是市场上直接采购的 SaaS 标准工具与业务脱节，缺乏灵活定制能力。
        </div>
      </div>

      <p>
        基于以上的痛点若稍具规模的企业想要解决以上问题，只有自建一条路，但是选择自建碰到最大的问题就是：
      </p>

      <h3>0-1 自建周期成本高</h3>
      <p>
        一个复杂的营销自动化系统从 0-1 开发出来并没有想象的那么简单，都需要浪费大量的人力和物力，甚至短期内是看不见什么成果的，很容易导致不了了之。那么有什么好的办法能解决呢？
      </p>

      <h2 style="margin-bottom: 0px;">产品简介</h2>
      <p style="padding: 5px;margin-top: 0px;">
        <span>
          开源的营销自动化项目寥寥无几，<strong>微智营</strong> 在此背景下特意开源出来，以为国内数字化营销贡献绵薄之力。
        </span>
        <span style="display: block;">
          <strong>微智营</strong> 基于 “拓客->管理->运营->营销->服务->分析” 一站式人工智能数智化营销引擎，通过提供的标准化功能和基础能力，让企业快速搭建适合自己企业的营销系统，快速完成从 0-1 的过程，并且能基于开放的能力和源码，开发深度融合自身业务的营销系统。
        </span>
        <span style="display: block;">
          <strong>微智营</strong> 作为领域的产品新秀，也需要一步一个脚印逐步向前迈进。对未来的发展主要分以下几个阶段：
        </span>
      </p>
      <div style="padding-left: 15px; margin-bottom: 15px;">
        <h4 style="margin-top: 0px; margin-bottom: 5px;">构建基础营销平台</h4>
        <span style="padding-left: 10px; padding-top: 5px; display: block;">
          此阶段我们结合了当下营销的趋势，选择了优先从企业微信场景切入。 在这个阶段我们会提供个比较基础的企业微信营销功能，保留了其灵活的扩展性，便于开发者能够快速基于 <strong>微智营</strong> 开发自己想要的功能。
        </span>
        <h4 style="margin-top: 5px; margin-bottom: 5px;">全域营销能力搭建</h4>
        <span style="padding-left: 10px; padding-top: 5px; display: block;">
          此阶段我们会重点完善平台的全域营销能力，我们会接入更多的营销场景通道、自动化能力等。
        </span>
        <h4 style="margin-top: 5px; margin-bottom: 5px;">自动化场景快速迭代</h4>
        <span style="padding-left: 10px; padding-top: 5px; display: block;">
          此阶段我们会快速基于场景构建全域营销自动化方案。
        </span>
      </div>

      <h2 style="margin-bottom: 10px;">产品优势</h2>
      <img
        src="@/assets/imgs/diy/20250321150727.png"
        alt=""
        class="w-950px"
        style="margin-bottom: 10px; margin-top: 10px;"
      />
      <div style="padding-left: 10px;">
        <li>大模型助力，提高竞争力</li>
        <li>系统高度可用，部署灵活高效</li>
        <li>研发降本增效，满足定制需求</li>
        <li>数据安全可控</li>
        <li>降低云服务依赖与供应商绑定</li>
      </div>

      <h2 style="margin-top: 15px;">AI能力</h2>
      <p>
        目前 <strong>微智营</strong> 开源版基于芋道、Ragflow等优秀开源产品构建，支持DeepSeek、通义千问、腾讯混元等 30+ AI大模型，实现营销相关能力智能化。
      </p>

      <h2>产品功能</h2>
      <div style="padding-left: 10px;">
        <h4>知识库</h4>
        <li>系统高度可用，部署灵活高效</li>
        <h4>智能助手</h4>
        <li>系统高度可用，部署灵活高效</li>
        <h4>Agent编排</h4>
        <li>系统高度可用，部署灵活高效</li>
      </div>

      <p>

      </p>

      <h2>定制开发/技术支持</h2>
      <img src="@/assets/imgs/diy/20250321173421.png" alt="" class="w-750px"/>
    </div>
  </el-card>

</template>
<script lang="ts" setup>
import { set } from 'lodash-es'
import { EChartsOption } from 'echarts'
import { formatTime } from '@/utils'

import { useUserStore } from '@/store/modules/user'
import { useWatermark } from '@/hooks/web/useWatermark'
import type { WorkplaceTotal, Project, Notice, Shortcut } from './types'
import { pieOptions, barOptions } from './echarts-data'

defineOptions({ name: 'Home' })

const { t } = useI18n()
const userStore = useUserStore()
const { setWatermark } = useWatermark()
const loading = ref(true)
const avatar = userStore.getUser.avatar
const username = userStore.getUser.nickname
const pieOptionsData = reactive<EChartsOption>(pieOptions) as EChartsOption
// 获取统计数
let totalSate = reactive<WorkplaceTotal>({
  project: 0,
  access: 0,
  todo: 0
})

const getCount = async () => {
  const data = {
    project: 40,
    access: 2340,
    todo: 10
  }
  totalSate = Object.assign(totalSate, data)
}

// 获取项目数
let projects = reactive<Project[]>([])
const getProject = async () => {
  const data = [
    {
      name: 'ruoyi-vue-pro',
      icon: 'akar-icons:github-fill',
      message: 'https://github.com/YunaiV/ruoyi-vue-pro',
      personal: 'Spring Boot 单体架构',
      time: new Date()
    },
    {
      name: 'yudao-ui-admin-vue3',
      icon: 'logos:vue',
      message: 'https://github.com/yudaocode/yudao-ui-admin-vue3',
      personal: 'Vue3 + element-plus',
      time: new Date()
    },
    {
      name: 'yudao-ui-admin-vben',
      icon: 'logos:vue',
      message: 'https://github.com/yudaocode/yudao-ui-admin-vben',
      personal: 'Vue3 + vben(antd)',
      time: new Date()
    },
    {
      name: 'yudao-cloud',
      icon: 'akar-icons:github',
      message: 'https://github.com/YunaiV/yudao-cloud',
      personal: 'Spring Cloud 微服务架构',
      time: new Date()
    },
    {
      name: 'yudao-ui-mall-uniapp',
      icon: 'logos:vue',
      message: 'https://github.com/yudaocode/yudao-ui-admin-uniapp',
      personal: 'Vue3 + uniapp',
      time: new Date()
    },
    {
      name: 'yudao-ui-admin-vue2',
      icon: 'logos:vue',
      message: 'https://github.com/yudaocode/yudao-ui-admin-vue2',
      personal: 'Vue2 + element-ui',
      time: new Date()
    }
  ]
  projects = Object.assign(projects, data)
}

// 获取通知公告
let notice = reactive<Notice[]>([])
const getNotice = async () => {
  const data = [
    {
      title: '系统支持 JDK 8/17/21，Vue 2/3',
      type: '通知',
      keys: ['通知', '8', '17', '21', '2', '3'],
      date: new Date()
    },
    {
      title: '后端提供 Spring Boot 2.7/3.2 + Cloud 双架构',
      type: '公告',
      keys: ['公告', 'Boot', 'Cloud'],
      date: new Date()
    },
    {
      title: '全部开源，个人与企业可 100% 直接使用，无需授权',
      type: '通知',
      keys: ['通知', '无需授权'],
      date: new Date()
    },
    {
      title: '国内使用最广泛的快速开发平台，超 300+ 人贡献',
      type: '公告',
      keys: ['公告', '最广泛'],
      date: new Date()
    }
  ]
  notice = Object.assign(notice, data)
}

// 获取快捷入口
let shortcut = reactive<Shortcut[]>([])

const getShortcut = async () => {
  const data = [
    {
      name: 'Github',
      icon: 'akar-icons:github-fill',
      url: 'github.io'
    },
    {
      name: 'Vue',
      icon: 'logos:vue',
      url: 'vuejs.org'
    },
    {
      name: 'Vite',
      icon: 'vscode-icons:file-type-vite',
      url: 'https://vitejs.dev/'
    },
    {
      name: 'Angular',
      icon: 'logos:angular-icon',
      url: 'github.io'
    },
    {
      name: 'React',
      icon: 'logos:react',
      url: 'github.io'
    },
    {
      name: 'Webpack',
      icon: 'logos:webpack',
      url: 'github.io'
    }
  ]
  shortcut = Object.assign(shortcut, data)
}

// 用户来源
const getUserAccessSource = async () => {
  const data = [
    { value: 335, name: 'analysis.directAccess' },
    { value: 310, name: 'analysis.mailMarketing' },
    { value: 234, name: 'analysis.allianceAdvertising' },
    { value: 135, name: 'analysis.videoAdvertising' },
    { value: 1548, name: 'analysis.searchEngines' }
  ]
  set(
    pieOptionsData,
    'legend.data',
    data.map((v) => t(v.name))
  )
  pieOptionsData!.series![0].data = data.map((v) => {
    return {
      name: t(v.name),
      value: v.value
    }
  })
}
const barOptionsData = reactive<EChartsOption>(barOptions) as EChartsOption

// 周活跃量
const getWeeklyUserActivity = async () => {
  const data = [
    { value: 13253, name: 'analysis.monday' },
    { value: 34235, name: 'analysis.tuesday' },
    { value: 26321, name: 'analysis.wednesday' },
    { value: 12340, name: 'analysis.thursday' },
    { value: 24643, name: 'analysis.friday' },
    { value: 1322, name: 'analysis.saturday' },
    { value: 1324, name: 'analysis.sunday' }
  ]
  set(
    barOptionsData,
    'xAxis.data',
    data.map((v) => t(v.name))
  )
  set(barOptionsData, 'series', [
    {
      name: t('analysis.activeQuantity'),
      data: data.map((v) => v.value),
      type: 'bar'
    }
  ])
}

const getAllApi = async () => {
  await Promise.all([
    getCount(),
    getProject(),
    getNotice(),
    getShortcut(),
    getUserAccessSource(),
    getWeeklyUserActivity()
  ])
  loading.value = false
}

getAllApi()
</script>

<style scoped>

h2 {
  color: #303133;
  margin-bottom: 16px;
}

h3 {
  color: #303133;
  margin-top: 16px;
  margin-bottom: 12px;
}

p {
  color: #606266;
  line-height: 1.6;
  margin-bottom: 16px;
}

</style>
