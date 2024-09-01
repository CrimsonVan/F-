<template>
  <div class="cart-page">
    <div class="cart">
      <el-carousel height="490px">
        <el-carousel-item v-for="item in bannerList" :key="item">
          <el-image style="width: 100%; height: 490px" :src="item.imgUrl">
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'
const bannerList = ref()
onMounted(async () => {
  const res = await getBannerAPI()

  bannerList.value = res.result
  // console.log('打印轮播图', bannerList.value)
})
</script>
<style lang="scss" scoped>
.cart-page {
  width: 100%;
  height: 490px;

  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cart {
    box-sizing: border-box;

    background-color: #ffffff;
    width: 1260px;
    height: 490px;
  }
}
</style>
