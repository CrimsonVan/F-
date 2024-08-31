<template>
  <div class="hourTitle">{{ title }}</div>
  <!-- 推荐商品 -->
  <div
    class="hourItem"
    @click="goHotDetail(item)"
    v-for="item in hotList"
    :key="item"
  >
    <div class="img">
      <el-image style="width: 100%" :src="item.picture" />
    </div>

    <div class="text">
      <div class="name">{{ item.name }}</div>
      <div class="desc">{{ item.desc }}</div>
      <div class="price">￥{{ item.price }}</div>
    </div>
  </div>
</template>
<script setup>
import { getHotGoodsAPI } from '@/apis/detail'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const title = ref(null)
const props = defineProps({
  id: {
    type: String,
    default: '4026809'
  },
  type: {
    type: Number,
    default: 1
  }
})
const router = useRouter()
console.log('打印props', props.id)

const hotList = ref([])
const getHostList = async () => {
  const res = await getHotGoodsAPI({
    id: props.id,
    type: props.type
  })
  hotList.value = res.result
  console.log('打印24小时商品', hotList.value)
}
const goHotDetail = (item) => {
  console.log('打印跳转的item', item.id)
  router.push(`/detail?id=${item.id}`)
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
onMounted(() => {
  getHostList()
  console.log('打印type', props.type)
  props.type === 1 ? (title.value = '24小时热榜') : (title.value = '周热榜')
})
</script>
<style scoped lang="scss">
.hourTitle {
  width: 100%;
  height: 75px;
  background-color: #e26237;
  color: #ffffff;
  text-align: left;
  padding-left: 20px;
  box-sizing: border-box;
  line-height: 75px;
  font-size: 20px;
  margin-bottom: 5px;
}
.hourItem {
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  padding-top: 20px;
  box-sizing: border-box;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }
  .img {
    width: 100%;
    padding: 0 55px;
    box-sizing: border-box;
    //   background-color: aquamarine;
  }
  .text {
    width: 100%;
    padding: 0 19px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      font-size: 17px;
      margin-top: 8px;
    }
    .desc {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      font-size: 15px;
      margin-top: 8px;
      color: #999;
    }
    .price {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      font-size: 19px;
      margin-top: 8px;
      font-weight: 500;
      color: #cf4450;
      text-align: center;
    }
  }
}
</style>
@/stores/userStore
