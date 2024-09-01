<template>
  <div class="cart-page">
    <div class="cart">
      <!-- 收货地址标题头 -->
      <div
        style="
          border-bottom: 1px solid #f5f5f5;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #3f3f3f;
        "
      >
        <div>收货地址</div>
      </div>
      <!-- 收货地址具体信息 -->
      <div
        style="
          border: 1px solid #f5f5f5;
          margin-top: 20px;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          justify-content: space-between;
          color: #3f3f3f;
        "
      >
        <div
          style="
            margin-left: 20px;
            color: #3f3f3f;
            display: flex;
            flex-direction: column;
          "
        >
          <div style="margin-bottom: 8px">
            <span style="color: #999999">收<i />货<i />人：</span
            >{{ curAddress.receiver }}
          </div>
          <div style="margin-bottom: 8px">
            <span style="color: #999999">联系方式：</span
            >{{ curAddress.contact }}
          </div>
          <div style="margin-bottom: 8px">
            <span style="color: #999999">收货地址：</span
            >{{ curAddress.fullLocation + curAddress.address }}
          </div>
        </div>
        <div
          style="
            margin-right: 80px;
            color: #3f3f3f;
            display: flex;
            align-items: center;
          "
        >
          <el-button type="default" size="large" @click="changeButton"
            >切换地址</el-button
          >
          <el-button type="default" size="large" @click="addAddress"
            >新增地址</el-button
          >
        </div>
      </div>
      <!-- 商品信息标题头 -->
      <div
        style="
          margin-top: 20px;
          border-bottom: 1px solid #f5f5f5;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #3f3f3f;
        "
      >
        <div>商品信息</div>
      </div>
      <!-- 商品信息具体信息 -->
      <div
        style="
          border: 1px solid #f5f5f5;
          margin-top: 20px;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          justify-content: space-between;
          color: #3f3f3f;
        "
      >
        <el-table
          :data="checkInfo.goods"
          style="width: 100%"
          :header-cell-style="{ textAlign: 'center' }"
        >
          <!-- :cell-style="{ textAlign: 'center' }" -->
          <el-table-column label="商品信息" width="460">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <el-image
                  style="width: 80px; height: 80px"
                  :src="scope.row.picture"
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

          <el-table-column label="数量" width="180">
            <template #default="scope">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <div>{{ scope.row.count }}</div>
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
                <span style="margin-left: 10px"
                  >￥{{ scope.row.totalPrice }}</span
                >
              </div>
            </template>
          </el-table-column>

          <el-table-column label="实付" width="160">
            <template #default="scope">
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <span style="margin-left: 10px"
                  >￥{{ scope.row.totalPayPrice }}</span
                >
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 配送时间标题头 -->
      <div
        style="
          margin-top: 20px;
          border-bottom: 1px solid #f5f5f5;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #3f3f3f;
        "
      >
        <div>配送时间</div>
      </div>
      <!-- 配送时间具体信息 -->
      <div
        style="
          margin-top: 20px;
          margin-left: 20px;

          padding-bottom: 20px;
          display: flex;
          justify-content: space-between;

          color: #3f3f3f;
        "
      >
        <div
          style="
            width: 180px;
            border: 1px solid #d8d8d8;
            padding: 15px;
            text-align: center;
            font-size: 14px;
          "
        >
          不先送货时间：周一到周五
        </div>
      </div>
      <!-- 支付方式标题头 -->
      <div
        style="
          margin-top: 20px;
          border-bottom: 1px solid #f5f5f5;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #3f3f3f;
        "
      >
        <div>支付方式</div>
      </div>
      <!-- 支付方式具体信息 -->
      <div
        style="
          margin-top: 20px;
          margin-left: 20px;

          padding-bottom: 20px;
          display: flex;
          justify-content: space-between;

          color: #3f3f3f;
        "
      >
        <div
          style="
            width: 180px;
            border: 1px solid #d8d8d8;
            padding: 15px;
            text-align: center;
            font-size: 14px;
          "
        >
          支付宝付款
        </div>
      </div>
      <!-- 金额明细标题头 -->
      <div
        style="
          margin-top: 20px;
          border-bottom: 1px solid #f5f5f5;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #3f3f3f;
        "
      >
        <div>金额明细</div>
      </div>
      <!-- 金额明细具体信息 -->
      <div
        style="
          border-bottom: 1px solid #f5f5f5;
          margin-top: 20px;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          justify-content: flex-end;
          color: #3f3f3f;
        "
      >
        <div
          style="
            margin-right: 50px;
            color: #3f3f3f;
            display: flex;
            flex-direction: column;
          "
        >
          <div
            style="
              width: 220px;
              margin-bottom: 30px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div style="color: #999999">商检总数：</div>
            <div>{{ checkInfo.summary?.goodsCount }}</div>
          </div>
          <div
            style="
              width: 220px;
              margin-bottom: 30px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div style="color: #999999">商检总价：</div>
            <div>￥{{ checkInfo.summary?.totalPrice }}</div>
          </div>
          <div
            style="
              width: 220px;
              margin-bottom: 30px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div style="color: #999999">运费：</div>
            <div>￥{{ checkInfo.summary?.postFee }}</div>
          </div>
          <div
            style="
              width: 220px;
              margin-bottom: 30px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div style="color: #999999">应付金额：</div>
            <div style="color: #cf5e6c; font-size: 25px">
              ￥{{ checkInfo.summary?.totalPayPrice }}
            </div>
          </div>
        </div>
      </div>
      <!-- 提交订单按钮 -->
      <div
        style="
          margin-top: 20px;
          margin-left: 20px;
          padding-top: 20px;
          padding-bottom: 20px;
          display: flex;
          justify-content: flex-end;
          color: #3f3f3f;
        "
      >
        <el-button type="primary" size="large" style="margin-right: 50px"
          >提交订单</el-button
        >
      </div>
      <!-- 新增(编辑)地址 -->
      <el-dialog
        v-model="showDialog"
        :title="formState ? '新增地址' : '编辑地址'"
        width="25%"
        center
      >
        <el-form :model="addressForm">
          <el-form-item label="收货人名">
            <el-input v-model="addressForm.receiver" autocomplete="off" />
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="addressForm.contact" autocomplete="off" />
          </el-form-item>
          <el-form-item label="省市区县">
            <el-cascader
              style="width: 100%"
              :options="options"
              placeholder="请选择"
              v-model="selectedOptions"
              @change="handleChange"
            >
            </el-cascader>
          </el-form-item>
          <el-form-item label="地址标签">
            <el-select
              v-model="addressForm.addressTags"
              placeholder="请选择"
              @change="changeAdressTag"
            >
              <el-option label="家里" value="家里" />
              <el-option label="公司" value="公司" />
              <el-option label="学校" value="学校" />
            </el-select>
          </el-form-item>
          <el-form-item label="是否默认">
            <el-select
              v-model="defaultValue"
              placeholder="请选择"
              @change="changeDefault"
            >
              <el-option label="是" value="0" />
              <el-option label="否" value="1" />
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input v-model="addressForm.address" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button v-if="formState" type="primary" @click="add">
              确认增加
            </el-button>
            <el-button v-else type="primary" @click="edit">
              确认修改
            </el-button>
          </div>
        </template>
      </el-dialog>
      <!-- 切换地址 -->
      <el-dialog v-model="showDialog2" title="切换地址" width="30%" center>
        <!-- 地址列表 -->
        <div style="max-height: 450px; overflow-y: auto">
          <div
            v-for="(item, index) in checkInfo.userAddresses"
            :key="index"
            class="item"
            :class="{ active: item.id === activeAddress.id }"
            @click="changeActiveAddress(item)"
          >
            <span class="delAdress" @click="delAddress(item.id, index)"
              ><el-icon><DeleteFilled /></el-icon
            ></span>
            <span class="editAdress" @click="editAddress(item)"
              ><el-icon><EditPen /></el-icon
            ></span>
            <div class="defaultIcon" v-if="item.isDefault === 0">默认</div>
            <div style="margin-bottom: 8px">
              <span style="color: #999999">收<i />货<i />人：</span
              >{{ item.receiver }}
            </div>
            <div style="margin-bottom: 8px">
              <span style="color: #999999">联系方式：</span>{{ item.contact }}
            </div>
            <div style="margin-bottom: 8px">
              <span style="color: #999999">收货地址：</span
              >{{ item.fullLocation + item.address }}
            </div>
          </div>
        </div>
        <!-- 确认按钮 -->
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" @click="change"> 确认更换 </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
    <!-- <el-skeleton v-else :rows="9" animated /> -->
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { addressDelAPI, addressAddAPI, addressEditAPI } from '@/apis/address'
import { getCheckInfoAPI } from '@/apis/checkout'
import { DeleteFilled, EditPen } from '@element-plus/icons-vue'
import PCA from '@/assets/PCA.json'
import { ElMessage } from 'element-plus'
const formState = ref(true)
const checkInfo = ref([])
const curAddress = ref({})
const showDialog = ref(false)
const showDialog2 = ref(false)
const options = ref(PCA)
const activeAddress = ref({})
const selectedOptions = ref([])
const defaultValue = ref('')
const addressForm = ref({
  receiver: '',
  contact: '',
  provinceCode: '',
  cityCode: '',
  countyCode: '',
  address: '',
  postalCode: '111006',
  addressTags: '',
  isDefault: '',
  fullLocation: '请输入完整地址'
})

//选择省市区
const handleChange = (e) => {
  addressForm.value.provinceCode = e[0] + '0000'
  addressForm.value.cityCode = e[1] + '00'
  addressForm.value.countyCode = e[2]
  // console.log('监测收货地址', addressForm.value)
}
//地址标签选择
const changeAdressTag = (e) => {
  addressForm.value.addressTags = e
  // console.log('监测收货地址', addressForm.value)
}
//是否默认选择
const changeDefault = (e) => {
  addressForm.value.isDefault = e
  // console.log('监测收货地址', addressForm.value)
}

const changeActiveAddress = (item) => {
  activeAddress.value = item
}
const getCheckInfo = async () => {
  const res = await getCheckInfoAPI()
  checkInfo.value = res.result
  // console.log('打印checkInfo', checkInfo.value)
  const item = checkInfo.value.userAddresses.find(
    (item) => item.isDefault === 0
  )

  curAddress.value = item
  // console.log('打印curAddress', curAddress.value)
}
const addAddress = async () => {
  addressForm.value = {
    receiver: '',
    contact: '',
    provinceCode: '',
    cityCode: '',
    countyCode: '',
    address: '',
    postalCode: '111006',
    addressTags: '',
    isDefault: '',
    fullLocation: '请输入完整地址'
  }
  showDialog.value = true
  formState.value = true
  defaultValue.value = ''
  selectedOptions.value = [
    addressForm.value.provinceCode.slice(0, 2),
    addressForm.value.cityCode.slice(0, 4),
    addressForm.value.countyCode
  ]
}
const editAddress = (item) => {
  showDialog.value = true
  formState.value = false
  addressForm.value = item
  addressForm.value.isDefault === 0
    ? (defaultValue.value = '是')
    : (defaultValue.value = '否')
  console.log('打印item', addressForm.value)
  selectedOptions.value = [
    addressForm.value.provinceCode.slice(0, 2),
    addressForm.value.cityCode.slice(0, 4),
    addressForm.value.countyCode
  ]
  // item.value.isDefault===0?defaultEdit.value='是':defaultEdit.value='否'
}
const changeButton = () => {
  showDialog2.value = true
}
//判断收货信息是否已填
const forAddress = () => {
  for (var key in addressForm.value) {
    if (addressForm.value[key] === '') {
      return false
    }
  }
  return true
}
//编辑收货地址
const edit = async () => {
  // console.log('打印编辑',addressEditValue.value);
  if (!forAddress()) {
    ElMessage.error('请输入完整第地址信息')
    return
  }
  showDialog.value = false
  await addressEditAPI(addressForm.value.id, addressForm.value)

  const res = await getCheckInfoAPI()
  checkInfo.value = res.result
  ElMessage.success('修改成功')

  const item = checkInfo.value.userAddresses.find(
    (item) => item.isDefault === 0
  )

  curAddress.value = item
}
//切换收货地址
const change = () => {
  curAddress.value = activeAddress.value
  showDialog2.value = false
}
//增加收货地址
const add = async () => {
  if (!forAddress()) {
    ElMessage.error('请输入完整第地址信息')
    return
  }
  showDialog.value = false
  await addressAddAPI(addressForm.value)
  const res = await getCheckInfoAPI()
  checkInfo.value = res.result
  const item = checkInfo.value.userAddresses.find(
    (item) => item.isDefault === 0
  )
  curAddress.value = item
  ElMessage.success('新增成功')
}

//删除收获地址
const delAddress = async (id, index) => {
  try {
    await ElMessageBox.confirm('确定要删除这个收货地址吗?', 'Warning', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    })
  } catch {
    return
  }
  checkInfo.value.userAddresses.splice(index, 1)
  await addressDelAPI(id)
  const res = await getCheckInfoAPI()
  checkInfo.value = res.result
  const item = checkInfo.value.userAddresses.find(
    (item) => item.isDefault === 0
  )
  curAddress.value = item
  ElMessage.success('删除成功')
}

onMounted(() => {
  getCheckInfo()
})
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
    margin-bottom: 20px;
    padding: 20px;
    box-sizing: border-box;
    .item {
      position: relative;
      margin-left: 20px;
      color: #3f3f3f;
      display: flex;
      flex-direction: column;
      border: 1px solid #f5f5f5;
      padding: 20px;
      margin-bottom: 10px;
      cursor: pointer;
      &.active,
      &:hover {
        border: 1px solid #27bb9a;
        background: lighten(#27bb9a, 50%);
      }
      .delAdress {
        position: absolute;
        right: 10px;
        top: 10px;
      }
      .editAdress {
        position: absolute;
        right: 30px;
        top: 10px;
      }
      .defaultIcon {
        position: absolute;
        right: 50px;
        top: 10px;
        background-color: #e4e4e4;
        box-sizing: border-box;
        border: 0.5px solid #666666;
        width: 40px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 15%;
        color: #666666;
      }
    }
  }
}
</style>
