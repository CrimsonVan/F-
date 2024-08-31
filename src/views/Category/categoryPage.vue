<template>
  <!-- 轮播图 -->
  <bannerPage></bannerPage>
  <!-- 主要分类介绍 -->
  <div class="cart1-page">
    <div class="cart">
      <div style="width: 100%">
        <div style="text-align: center; font-size: 26px">全部分类</div>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
          "
        >
          <div
            v-for="item in categoryData.children"
            :key="item"
            style="width: 114px; min-height: 130px"
          >
            <el-image
              :src="item.picture"
              style="width: 114px; height: 114px; background-color: #f5f5f5"
            ></el-image>
            <div class="text">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 各分类对应产品 -->
  <div class="cart2-page" v-for="item in categoryData.children" :key="item.id">
    <div class="cart">
      <div style="width: 100%">
        <div
          style="
            text-align: center;
            font-size: 26px;
            margin-top: 10px;
            color: #6e6e6e;
          "
        >
          -{{ item.name }}-
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
          "
        >
          <div
            v-for="good in item.goods"
            :key="good.id"
            class="goodsItem"
            @click="goCateDetail(good.id)"
          >
            <!-- 图片 -->
            <el-image
              :src="good.picture"
              style="width: 160px; height: 160px; background-color: #f5f5f5"
            ></el-image>
            <!-- 名称 -->
            <div class="text">{{ good.name }}</div>
            <!-- 简介 -->
            <div class="text" style="font-size: 13px; color: #ccc">
              {{ good.desc }}
            </div>
            <!-- 价格 -->
            <div
              class="text"
              style="color: #cf5e6c; font-size: 20px; font-weight: 500"
            >
              ￥{{ good.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import bannerPage from '../Home/components/bannerPage.vue'
import { ref, onMounted } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute, onBeforeRouteUpdate, useRouter } from 'vue-router'

const categoryData = ref({})
const route = useRoute()
const router = useRouter()

const getCategoryData = async (id) => {
  const res = await getCategoryAPI(id)

  categoryData.value = res.result
  console.log('打印分类详情', categoryData.value)
}
const goCateDetail = (id) => {
  router.push(`/detail?id=${id}`)
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
onMounted(() => {
  // 获取路由参数 id, useRoute() -> route 等价于this.$route
  getCategoryData(route.params.id)
})
onBeforeRouteUpdate((to) => {
  console.log('路由变化了')
  getCategoryData(to.params.id)
})
</script>
<style lang="scss" scoped>
.cart1-page {
  // padding-top: 20px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  min-height: 55px;

  .cart {
    margin-top: 20px;
    box-sizing: border-box;
    background-color: #ffffff;
    width: 1260px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 70px;
    .text {
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #27bb9a;
      }
    }
  }
}
.cart2-page {
  // padding-top: 20px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  min-height: 55px;

  .cart {
    margin-top: 20px;
    box-sizing: border-box;
    background-color: #ffffff;
    width: 1260px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 70px;
    .goodsItem {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      min-height: 170px;
      padding-top: 30px;
      padding-bottom: 30px;

      transition: 0.5s;
      cursor: pointer;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }
      .text {
        width: 160px;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 10px;
      }
    }
  }
}
</style>
