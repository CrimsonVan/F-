<template>
  <div class="cart-page">
    <div class="cart">
      <el-table
        :data="cartStore.cartList"
        style="width: 100%"
        :header-cell-style="{ textAlign: 'center' }"
      >
        <el-table-column
          width="100"
          style="display: flex; justify-content: center"
        >
          <template #header>
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <el-checkbox
                :model-value="cartStore.isAll"
                @change="
                  (selected) => {
                    allCheck(selected)
                  }
                "
                size="large"
              />
            </div>
          </template>
          <template #default="scope">
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <el-checkbox
                :model-value="scope.row.selected"
                @change="
                  (selected) => {
                    singleCheck(scope.row, selected)
                  }
                "
                size="large"
              />
            </div>
          </template>
        </el-table-column>

        <el-table-column label="商品信息" width="440" align="center">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-image
                style="width: 100px; height: 100px; cursor: pointer"
                :src="scope.row.picture"
                @click="goDetail(scope.row.id)"
              />
              <div
                style="
                  padding-left: 10px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: flex-start;
                "
              >
                <div>{{ scope.row.name }}</div>
                <div style="color: #8a8a8a; font-size: small">
                  {{ scope.row.attrsText }}
                </div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="价格" width="220">
          <template #default="scope">
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <span style="margin-left: 10px">{{ scope.row.price }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="数量" width="220">
          <template #default="scope">
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <el-input-number
                v-model="scope.row.count"
                :min="1"
                @click="
                  getGoodsId(
                    scope.row.skuId,
                    scope.row.count,
                    scope.row.selected
                  )
                "
              />
            </div>
          </template>
        </el-table-column>

        <el-table-column label="小计" width="160">
          <template #default="scope">
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <span style="margin-left: 10px">{{
                (scope.row.price * scope.row.count).toFixed(2)
              }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <el-button size="small" type="danger" @click="delCart(scope.row)">
                删除
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="total">
      <div style="margin-left: 20px">
        共{{ cartStore.allCount }}件商品， 已选择{{
          cartStore.selectedCount
        }}件，商品共计：<span style="color: #cf5e6c; font-weight: 900"
          >￥{{ cartStore.selectedPrice.toFixed(2) }}</span
        >
      </div>
      <div style="margin-right: 20px">
        <el-button
          :disabled="cartStore.isEmpty"
          type="primary"
          @click="goCheckout"
          >确认下单</el-button
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useCartStore } from '@/stores'
import { useRouter } from 'vue-router'
const router = useRouter()
const cartStore = useCartStore()
const isEmpty = ref(true)

onMounted(() => {
  cartStore.updateNewList()
  cartStore.skuIdArr.length === 0
    ? (isEmpty.value = false)
    : (isEmpty.value = true)
})
//跳转详情页
const goDetail = (id) => {
  router.push(`/detail?id=${id}`)
}
// 单选回调
const singleCheck = (i, selected) => {
  cartStore.singleCheck(i.skuId, selected)
}
// 多选回调
const allCheck = (selected) => {
  cartStore.allCheck(selected, cartStore.skuIdArr)
}
// 删除购物车商品
const delCart = (i) => {
  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      cartStore.delCart(i.skuId)
      ElMessage.success('删除成功')
    })
    .catch(() => {
      return
    })
}
//购物车商品数量变化
const getGoodsId = (id, num, selected) => {
  cartStore.updateGoodsNum({ skuId: id, count: num, selected: selected })
}
const goCheckout = () => {
  router.push('/checkout')
}
</script>
<style scoped lang="scss">
.cart-page {
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cart {
    box-sizing: border-box;

    margin-top: 20px;
    background-color: #ffffff;
    width: 1260px;
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    background-color: #ffffff;
    width: 1260px;
    margin-bottom: 0px;
    padding: 26px 0;
  }
}
</style>
@/stores/userStore
