<template>
  <ContentWrap :bodyStyle="{ padding: '0px' }" class="!mb-0">
    <IFrame :src="src" />
  </ContentWrap>
</template>
<script lang="ts" setup>
import {getAccessToken, getRefreshToken} from '@/utils/auth'
import {CACHE_KEY, useCache} from "@/hooks/web/useCache";

const agent_token = getAccessToken()
const { wsCache } = useCache()
const userInfo = wsCache.get(CACHE_KEY.USER)
const ragurl = import.meta.env.VITE_RAGAGENT_BASE_URL + '/user-setting/model?agent_flg=' + agent_token + '&agent_fly=' + userInfo?.user.id
const src = ref(ragurl)
</script>
