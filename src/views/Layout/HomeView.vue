<template>
  <div class="home">
    <div class="text">
      <el-avatar size="large" :src="useStore.avatar" />
    </div>
    <div class="text">
      <h1>{{ useStore.count }}</h1>
    </div>
    <div>
      <button @click="testBtn">加一</button>
      <button @click="reset">清零</button>
    </div>
  </div>
</template>
<script setup>
import { useNumStore } from '@/stores'
const useStore = useNumStore()

const testBtn = () => {
  // pinia状态数据里的加一函数
  useStore.increment()
  ElMessage.success('加一成功')
}

const reset = async () => {
  //try catch捕获async await的错误
  try {
    await ElMessageBox.confirm('你确认要清零么', '温馨提示', {
      type: 'warning',
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    })
  } catch {
    return
  }
  // pinia状态数据里的清零函数
  useStore.reset()
}
</script>
<style>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #aa9b88;
}
</style>
