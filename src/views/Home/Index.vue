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
        </el-row>
      </el-skeleton>
    </el-card>
  </div>

  <el-card shadow="never">
    <div class="container">
      <h2>数智营：一站式AI全域经营平台，助力企业增长引擎</h2>
      <div style="margin-bottom: 0px;">
        在渠道碎片化与流量成本高企的当下，企业增长面临多重挑战：营销人才稀缺导致内容质量参差，多渠道运营割裂难以形成合力，客户跟进滞后造成商机流失，标准化工具与业务脱节等困境。
        <br/>
        <strong>数智营</strong> ——以AI为核心的智能经营综合体，重新定义企业增长模式。我们不仅是工具，更是您全域经营的AI大脑，打造从“策划-获客-运营-成交”的全链路智能闭环，实现从人力驱动到AI经营的根本性跨越。
      </div>

      <h3>核心价值：AI驱动全链路，打造营销经营新范式</h3>
      <div style="margin-bottom: 0px;">
        <strong>数智营</strong>以“AI经营”为核心理念，深度融合智能策划、全域引流、精准触达与客户服务，构建覆盖“策划-获客-运营-成交-分析”的一站式营销经营体系，实现真正意义上的线上销售全生命周期闭环。
      </div>

      <div class="list" style="padding: 25px; margin-top: 00px;">
        <div class="list-item">
          <strong>AI智能策划，高效产出优质内容</strong> — 基于行业趋势与用户洞察，AI自动生成营销方案与创意内容，解决人才稀缺、内容质量低的痛点，降低人力成本，提升营销效益。
        </div>
        <div class="list-item">
          <strong>全域引流获客，打通多渠道流量</strong> — 无缝连接企业微信、抖音、淘宝、公众号、短信等主流渠道，实现公域引流与私域沉淀的一体化运营，帮助企业构建自主流量阵地，降低平台依赖。
        </div>
        <div class="list-item">
          <strong>AI客户服务，实时响应不失商机</strong> — 通过智能客服与自动化跟进，实时识别客户意向并快速响应，提升转化效率，避免商机流失。
        </div>
        <div class="list-item">
          <strong>智能成交与数据分析，驱动持续优化</strong> — AI自动生成订单意向，并基于数据反馈不断优化营销策略，形成“执行-分析-迭代”的良性循环，助力企业实现精细化运营与持续增长。
        </div>
      </div>

      <h2>产品建设路径：从基石到生态，系统构建AI驱动的全链路营销体系</h2>
      <h3>1.基础营销平台构建</h3>
      <p>
        以企业微信为核心切入点，提供<strong>灵活、可扩展的营销功能</strong>，帮助企业快速搭建适配自身业务的营销体系，完成从0到1的高效启动。
      </p>
      <h3>2.AI经营与自动化升级</h3>
      <p>
        通过AI重塑客户关系与营销流程，构建<strong>自动化场景与智能运营体系</strong>，实现营销动作的自动触发与持续优化，提升人效与转化率。
      </p>
      <h3>3.全域营销能力拓展</h3>
      <p>
        持续接入国内外多通道营销场景，<strong>完善公私域联动能力</strong>，支持企业在复杂环境中实现一体化、全渠道的智能经营。
      </p>

      <h2 style="margin-bottom: 0px;">适用场景</h2>
      <p style="padding: 5px;margin-top: 0px;">
        <span style="display: block;">
          用于 <strong>零售/连锁店、电商、法律、教育、本地生活服务、外贸、快消品</strong>等多个行业，致力于帮助企业高效引流客户、实现精准转化与深度运营。系统提供强大的后台支持与高度灵活的运营模式，助力企业构建稳定、高效的客户关系体系，拓展多元盈利路径，推动业务持续增长。
        </span>
      </p>

      <h2 style="margin-bottom: 0px;">功能特性</h2>
      <h3>智能引流获客</h3>
      <div class="list" style="padding: 1px; margin-top: 0px; padding-left: 26px;">
        <div class="list-item">
          多渠道活码，有序构建客户资源池
        </div>
        <div class="list-item">
          智能标签体系，精准客户分层
        </div>
      </div>
      <h3>AI数字员工</h3>
      <div class="list" style="padding: 1px; margin-top: 0px; padding-left: 26px;">
        <div class="list-item">
          开箱即用Agent模板，快速部署智能员工
        </div>
        <div class="list-item">
          支持智能客服、智能销售、内容创作等场景
        </div>
        <div class="list-item">
          自主学习和优化，持续提升服务质量
        </div>
      </div>

      <h3>智能客户运营</h3>
      <div class="list" style="padding: 1px; margin-top: 0px; padding-left: 26px;">
        <div class="list-item">
          个性化互动策略，提升客户粘性
        </div>
        <div class="list-item">
          流失预警与自动挽回，降低客户流失率
        </div>
        <div class="list-item">
          群运营自动化，提升私域运营效率
        </div>
      </div>

      <h3>企业级知识库</h3>
      <div class="list" style="padding: 1px; margin-top: 0px; padding-left: 26px;">
        <div class="list-item">
          专有知识注入，确保AI精准理解业务
        </div>
        <div class="list-item">
          持续学习进化，紧跟业务变化
        </div>
        <div class="list-item">
          智能知识管理，提升组织能力
        </div>
      </div>

      <h2 style="margin-top: 20px;">产品优势</h2>
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

    </div>
  </el-card>

</template>
<script lang="ts" setup>
import { set } from 'lodash-es'
import { EChartsOption } from 'echarts'

import { useUserStore } from '@/store/modules/user'
import type { WorkplaceTotal } from './types'
import { pieOptions } from './echarts-data'

defineOptions({ name: 'Home' })

const { t } = useI18n()
const userStore = useUserStore()

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

const getAllApi = async () => {
  await Promise.all([
    getCount(),
    getUserAccessSource(),
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
