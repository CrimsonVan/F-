<template>
  <div class="cart-page">
    <div class="cart">
      <div
        class="title"
        style="
          font-size: 32px;
          color: black;
          padding-top: 32px;
          padding-bottom: 32px;
        "
      >
        <span style="margin-left: 6px; color: #333344">新鲜好物</span>
        <span style="font-size: 18px; color: #bdc6cc; margin-left: 20px"
          >新鲜出炉 品质好物</span
        >
      </div>
      <div
        class="title"
        style="
          display: flex;
          height: 400px;
          width: 100%;

          justify-content: space-around;
        "
      >
        <div
          class="newGoodsItem"
          v-for="item in newGoodsList"
          :key="item"
          @click="goNewDetail(item.id)"
        >
          <el-image style="width: 100%" :src="item.picture"> </el-image>
          <div
            style="
              font-size: 22px;
              padding-top: 12px;
              text-align: center;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              width: 100%;
              color: #333344;
            "
          >
            {{ item.name }}
          </div>
          <div style="margin-top: 10px; color: #d0524e">￥{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { findNewAPI, findHotAPI } from '@/apis/home'
import { useRouter } from 'vue-router'
const router = useRouter()
const newGoodsList = ref()
const hotList = ref()
const getHotList = async () => {
  const res = await findHotAPI()
  hotList.value = res.result
  console.log('打印火热物品', hotList.value)
}
const getNewList = async () => {
  const res = await findNewAPI()
  newGoodsList.value = res.result
  console.log('打印新鲜好物', newGoodsList.value)
}
const goNewDetail = (id) => {
  router.push(`/detail?id=${id}`)
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

onMounted(async () => {
  await getNewList()
  await getHotList()
})
</script>
<style lang="scss" scoped>
.cart-page {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cart {
    box-sizing: border-box;

    background-color: #ffffff;
    width: 1260px;

    .title {
      .newGoodsItem {
        width: 24.6%;
        height: 100%;
        font-size: 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: space-around;
        background-color: #f0f9f4;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          transform: translate3d(0, -3px, 0);
          box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }
      }
    }
  }
}
</style>
