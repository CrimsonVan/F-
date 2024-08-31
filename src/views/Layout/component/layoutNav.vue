<template>
  <div class="cart-page">
    <div class="cart">
      <div class="nav">
        <span class="user"
          ><el-icon style="line-height: 22px"><Avatar /></el-icon
          >用户1311111111</span
        >
        <span class="logout" @click="logout">退出登录</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Avatar } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useUserStore, useCartStore } from '@/stores'

const router = useRouter()
const userStore = useUserStore()
const cartStore = useCartStore()
const logout = () => {
  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      userStore.clearUserInfo()
      cartStore.clearCart()
      router.push('/login')
    })
    .catch(() => {
      return
    })
}
</script>
<style scoped lang="scss">
.cart-page {
  width: 100%;
  background-color: #333333;
  display: flex;
  justify-content: center;
  height: 55px;

  .cart {
    box-sizing: border-box;

    width: 1260px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .nav {
      // background-color: aquamarine;
      height: 26px;
      text-align: center;
      line-height: 26px;
      color: #ccc;
      font-size: 14px;
      .user {
        box-sizing: border-box;
        padding-right: 15px;
        padding-left: 15px;
        line-height: 22px;
        border-right: 1px solid #ccc;
        cursor: pointer;
        &:hover {
          color: #27bb9a;
        }
      }
      .logout {
        box-sizing: border-box;
        padding-right: 15px;
        padding-left: 15px;
        cursor: pointer;
        &:hover {
          color: #27bb9a;
        }
      }
    }
  }
}
</style>
@/stores/userStore
