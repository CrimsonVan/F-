<template>
  <div class="header">
    <div class="cart">
      <!-- LOGO -->
      <div class="logo">
        <img
          src="../../../assets/logo (7).png"
          style="
            width: 80%;
            height: 50%;
            background-color: #ffffff;
            cursor: pointer;
          "
          alt=""
          @click="goCate('0')"
        />
      </div>
      <!-- Category -->
      <div class="category">
        <div
          class="cateItem"
          :class="{ active: currentIndex0 === index }"
          v-for="(item, index) in categoryStore.categoryList"
          :key="item.id"
          @click="goCate(item.id, index)"
        >
          {{ item.name }}
        </div>
      </div>
      <!-- Cart & Search -->
      <div class="cartList">
        <el-icon size="23px" style="margin-left: 6px"><Search /></el-icon>
        <el-input
          style="width: 170px; height: 24px; margin-left: 5px"
          placeholder="搜一搜"
          v-focus
        />
        <el-popover placement="bottom-start" :width="400" trigger="hover">
          <div
            class="popoverContent"
            style="width: 100%; max-height: 400px; overflow-y: auto"
          >
            <div
              v-for="item in cartStore.cartList"
              :key="item"
              style="
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                position: relative;
              "
            >
              <div
                style="
                  position: absolute;

                  right: 3px;
                  top: 5px;

                  font-size: 15px;
                  cursor: pointer;
                "
                @click="delHomeCart(item)"
              >
                <el-icon><DeleteFilled /></el-icon>
              </div>
              <el-image
                style="width: 100px; height: 100px; cursor: pointer"
                :src="item.picture"
                @click="goDetail(item.id)"
              />
              <div
                style="
                  padding-left: 10px;
                  display: flex;
                  flex-direction: column;
                  /* justify-content: center; */
                  align-items: flex-start;
                  width: 200px;
                  height: 100px;
                  cursor: pointer;
                "
              >
                <div
                  style="
                    /* text-align: center; */
                    text-overflow: ellipsis;
                    overflow: hidden;
                    /* white-space: nowrap; */
                    width: 100%;
                    font-size: 18px;
                    margin-top: 8px;
                  "
                >
                  {{ item.name }}
                </div>
                <div
                  style="
                    color: #8a8a8a;
                    font-size: small;
                    /* text-align: center; */
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    width: 100%;
                    font-size: 16px;
                    margin-top: 8px;
                  "
                >
                  {{ item.attrsText }}
                </div>
              </div>
              <div
                style="
                  width: 80px;

                  height: 100px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                "
              >
                <div
                  style="
                    font-size: 16px;
                    color: #cf5e6c;
                    font-weight: 400;
                    margin-bottom: 5px;
                  "
                >
                  ￥{{ item.price }}
                </div>
                <div>X{{ item.count }}</div>
              </div>
            </div>
          </div>
          <div
            style="
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              justify-content: space-between;
              background-color: #f5f5f5;
              height: 70px;
              padding-right: 10px;
              padding-left: 10px;

              box-sizing: border-box;
            "
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <span
                style="
                  font-size: 16px;

                  font-weight: 400;
                  margin-bottom: 2px;
                "
                >共{{ cartStore.allCount }}件商品</span
              >
              <span
                style="
                  font-size: 20px;
                  color: #cf5e6c;
                  font-weight: 400;
                  margin-bottom: 2px;
                "
                >￥{{ cartStore.allPrice }}</span
              >
            </div>
            <el-button type="primary" size="large" @click="goCart"
              >前往结算页面</el-button
            >
          </div>
          <template #reference>
            <el-badge
              :value="cartStore.cartList.length"
              style="cursor: pointer"
            >
              <el-icon size="29px" style="margin-left: 5px"
                ><ShoppingCart
              /></el-icon>
            </el-badge>
          </template>
        </el-popover>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useCategoryStore, useCartStore } from '@/stores'
import { Search, ShoppingCart, DeleteFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const categoryStore = useCategoryStore()
const cartStore = useCartStore()
const router = useRouter()
const currentIndex0 = ref(null)
const vFocus = {
  mounted: (el) => {
    el.focus()
  }
}
const goCart = () => {
  router.push('/cart')
}
const goCate = (path, index) => {
  currentIndex0.value = index

  if (path === '0') {
    router.push('/homepage')
  } else {
    router.push(`/category/${path}`)
  }
}
const delHomeCart = (i) => {
  cartStore.delCart(i.skuId)
  ElMessage.success('删除成功')
}
const goDetail = (id) => {
  router.push(`/detail?id=${id}`)
}
onMounted(() => {
  categoryStore.getCategory()
  cartStore.updateNewList()
})

// console.log('打印分类仓库', categoryStore.categoryList)
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 130px;

  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  .cart {
    box-sizing: border-box;
    width: 1260px;
    height: 100px;
    display: flex;
    .logo {
      display: flex;
      // background-color: cornsilk;
      width: 20%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    .cartList {
      display: flex;
      width: 20%;
      height: 100%;
      align-items: center;
      // justify-content: space-around;

      .popoverContent {
        width: 100%;
        max-height: 400px;
        overflow-y: scroll;
      }
      // .popoverContent::-webkit-scrollbar {
      //   width: 0;
      // }
    }
    .category {
      display: flex;
      width: 60%;
      height: 100%;
      justify-content: space-around;
      align-items: center;
      .cateItem {
        cursor: pointer;
        box-sizing: border-box;
        font-size: 16px;
        &.active {
          color: #27bb9a;
          border-bottom: 1px solid #27bb9a;
        }
        &:hover {
          color: #27bb9a;
          border-bottom: 1px solid #27bb9a;
        }
      }
    }
  }
}
</style>
@/stores/userStore
