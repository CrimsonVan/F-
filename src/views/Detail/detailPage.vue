<template>
  <div v-if="goods" class="cart-page">
    <div class="cart">
      <div class="left">
        <div class="Img">
          <!-- 大图区域 -->
          <div class="bigImg" style="width: 380px; height: 370px">
            <el-image style="width: 100%; height: 100%" :src="bigImg" />
          </div>
          <!-- 小图区域 -->
          <div class="smallImg">
            <el-image
              class="smallPicItem"
              :class="{ active: currentIndex3 === index }"
              v-for="(item, index) in smallImg"
              :key="index"
              style="width: 67px; height: 67px"
              :src="item"
              @click="clickSmall(item, index)"
              @mouseenter="hoverChange(item, index)"
            />
          </div>
        </div>
        <div
          class="leftText"
          style="
            width: 380px;
            display: flex;
            justify-content: space-around;
            margin-top: 28px;
          "
        >
          <div
            v-for="(item, index) in 4"
            :key="index"
            style="
              width: 22%;
              height: 80px;
              /* background-color: chartreuse; */
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              font-size: 14px;
              color: #a9abae;
              border-right: 1px solid #ccc;
            "
          >
            <div>销量人气</div>
            <div style="color: crimson">238+</div>
            <div style="color: #767473">销量人气</div>
          </div>
        </div>
      </div>

      <div class="goodsInfo">
        <div style="font-size: 22px; margin-bottom: 10px">
          {{ goods.name }}
        </div>
        <div style="font-size: 16px; margin-bottom: 10px; color: #a9abae">
          {{ goods.desc }}
        </div>
        <div style="font-size: 16px; margin-bottom: 10px; color: #f5f5f5">
          <span style="color: #cf5e6c; font-size: 22px; margin-right: 10px"
            >￥{{ goods.price }}</span
          ><span style="text-decoration: line-through; color: #a9abae">
            {{ goods.oldPrice }}</span
          >
        </div>
        <!-- 灰色区域 -->
        <div
          style="
            margin-bottom: 20px;
            background-color: #f5f5f5;
            width: 80%;
            height: 130px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 80px;
            font-size: 14px;
            padding-left: 10px;
            box-sizing: border-box;
          "
        >
          <div>
            <span style="color: #a9abae">促销</span
            ><span style="margin-left: 12px; color: #767473"
              >12月好物放松，下载APP惊喜多多</span
            >
          </div>
          <div>
            <span style="color: #a9abae">服务</span
            ><span style="margin-left: 12px; color: #767473"
              >无忧退货，快速退款，服务周到,了解详情</span
            >
          </div>
        </div>
        <!-- 颜色选择 -->
        <div
          v-if="pictureArr"
          style="
            font-size: 16px;
            margin-bottom: 20px;
            color: #f5f5f5;

            min-height: 50px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          "
        >
          <div style="color: #a9abae">{{ picTitle }}</div>
          <div
            style="
              display: flex;
              flex-wrap: wrap;
              margin-left: 10px;

              max-width: 500px;
            "
          >
            <div
              class="selecPic"
              v-for="(item, index) in pictureArr"
              :key="index"
              :class="{
                active: currentIndex === index,
                disabled: item.empty
              }"
            >
              <el-image
                :src="item.picture"
                :class="{
                  active: currentIndex === index,
                  disabled: item.empty
                }"
                @click="chooseColor(index, item)"
              >
              </el-image>
              <div class="emptyBtn" v-if="item.empty">缺货</div>
            </div>
          </div>
        </div>
        <!-- 尺码选择 -->
        <div
          v-if="sizeArr"
          style="
            font-size: 16px;
            margin-bottom: 20px;
            color: #f5f5f5;
            display: flex;
            align-items: center;
          "
        >
          <div style="color: #a9abae">{{ sizeTitle }}</div>
          <div
            style="
              display: flex;
              flex-wrap: wrap;
              margin-left: 10px;

              max-width: 500px;
            "
          >
            <div
              class="selecSize"
              v-for="(item, index) in sizeArr"
              :key="index"
              :class="{ active: currentIndex2 === index }"
              @click="chooseSize(index, item.name)"
            >
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <!-- 购物车 -->
        <div
          style="
            font-size: 16px;
            margin-bottom: 20px;
            color: #f5f5f5;

            height: 36px;
            display: flex;
            align-items: center;
          "
        >
          <div>
            <el-input-number
              v-model="cartNum"
              :min="1"
              @change="handleChange"
            />
          </div>
        </div>
        <!-- 加入购物车按钮 -->
        <div
          style="
            font-size: 16px;
            margin-bottom: 20px;
            color: #f5f5f5;

            height: 36px;
            display: flex;
            align-items: center;
          "
        >
          <div>
            <el-button type="default" @click="findGoodsId" size="large"
              >加入购物车</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="goods" class="cart-page1">
    <div class="cart1">
      <!-- 商品详情图片 -->
      <div class="left">
        <!-- 标题 -->
        <div
          style="
            height: 70px;
            /* background-color: palegoldenrod; */
            line-height: 70px;
            color: #333333;
            font-size: 18px;
            border-bottom: 1px solid #f5f5f5;
          "
        >
          商品详情
        </div>
        <!-- 属性 -->
        <div
          style="
            min-height: 100px;
            /* background-color: palegoldenrod; */
            color: #333333;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding: 25px 0;
            /* justify-content: space-around; */
          "
        >
          <div
            v-for="item in goods.details.properties"
            :key="item.value"
            style="
              width: 50%;
              background-color: #fff;
              min-height: 25px;
              display: flex;
            "
          >
            <div
              style="
                color: #ccc;
                /* background-color: pink; */
                box-sizing: border-box;
                min-width: 28%;
              "
            >
              {{ item.name }}
            </div>
            <div style="color: #333333; margin-left: 10px">
              {{ item.value }}
            </div>
          </div>
        </div>
        <!-- 图片 -->
        <div
          style="width: 100%"
          v-for="img in goods.details.pictures"
          :key="img"
        >
          <el-image style="width: 100%; height: 100%" :src="img"></el-image>
        </div>
      </div>
      <!-- 推荐商品列表 -->
      <div class="right">
        <newGoods :id="compId" :type="1"></newGoods>
        <newGoods :id="compId" :type="2"></newGoods>
      </div>
    </div>
  </div>
  <div v-else>
    <el-skeleton :rows="9" animated />
  </div>
</template>
<script setup>
import { getDetail } from '@/apis/detail'
import { ref, onMounted } from 'vue'
import newGoods from './components/newGoods.vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useCartStore } from '@/stores'
const picTitle = ref()
const sizeTitle = ref()
const pictureArr = ref()
const sizeArr = ref()
// const router = useRouter()
const cartStore = useCartStore()
const route = useRoute()
const goods = ref(null)
const findColor = ref('')
const findSize = ref('')
const currentIndex = ref('')
const currentIndex2 = ref('')
const currentIndex3 = ref('')
const emptySkusArr = ref([])
const bigImg = ref('')
const smallImg = ref([])
const compId = ref(null)
//颜色和规格的数组
const specsArr = ref([])
//购物车数量
const cartNum = ref(1)
//监听点击小图
const clickSmall = (item, index) => {
  currentIndex3.value = index
  bigImg.value = item
}

//监听小图hover
const hoverChange = (item, index) => {
  currentIndex3.value = index
  bigImg.value = item
}
const getGoods = async (id) => {
  const res = await getDetail(id)
  goods.value = res.result
  // console.log('打印goods', goods.value)
  bigImg.value = goods.value.mainPictures[0]
  smallImg.value = goods.value.mainPictures
  specsArr.value = goods.value.specs
  emptySkusArr.value = goods.value.skus.map((item) => {
    if (item.inventory === 0) {
      return item.specs[0].valueName
    }
  })
  console.log('打印没库存的规格数组', emptySkusArr.value)

  // console.log('打印specs数组属性', specsArr.value[0].name)
  for (let i = 0; i < specsArr.value.length; i++) {
    // if (specsArr.value[i].name === '颜色') {
    if (specsArr.value[i].values[0].picture) {
      pictureArr.value = specsArr.value[i].values
      pictureArr.value.forEach((item1) => {
        emptySkusArr.value.find((item) => item === item1.name)
          ? (item1.empty = true)
          : (item1.empty = false)
      })
      picTitle.value = specsArr.value[i].name
      console.log('打印显示的空规格', pictureArr.value)
    } else {
      sizeArr.value = specsArr.value[i].values
      sizeTitle.value = specsArr.value[i].name
    }
  }
}

// 添加购物车
const addCart = async (id) => {
  //规格已经选择 触发action

  await cartStore.addCart({
    count: cartNum.value,
    skuId: id
  })
  ElMessage.success('添加成功')
}
//查询商品颜色尺码对应id
const findGoodsId = () => {
  if (specsArr.value.length === 1 && specsArr.value[0].values[0].picture) {
    const SizeColorArr = goods.value.skus.find(
      (item) => item.specs[0].valueName === findColor.value
    )
    addCart(SizeColorArr.id)
  } else if (
    specsArr.value.length === 1 &&
    !specsArr.value[0].values[0].picture
  ) {
    const SizeColorArr = goods.value.skus.find(
      (item) => item.specs[0].valueName === findSize.value
    )
    addCart(SizeColorArr.id)
  } else if (specsArr.value.length === 2) {
    if (findColor.value && findSize.value) {
      const SizeColorArr = goods.value.skus.find(
        (item) =>
          item.specs[0].valueName === findColor.value &&
          item.specs[1].valueName === findSize.value
      )
      addCart(SizeColorArr.id)
    } else {
      console.log('请完整选择颜色和规格')

      return
    }
  }
}
//选则颜色回调
const chooseColor = (index, item) => {
  if (item.empty) {
    return
  }
  currentIndex.value = index
  findColor.value = item.name
  console.log('打印黑色', findColor.value)
}
//选则尺码回调
const chooseSize = (index, sizeName) => {
  console.log('打印sizeName', sizeName)

  currentIndex2.value = index
  findSize.value = sizeName
}
//购物车数量改变回调
const handleChange = (e) => {
  console.log('打印购物车数字', e)
}

onMounted(() => {
  getGoods(route.query.id)

  compId.value = route.query.id
  // getHostList()
})
onBeforeRouteUpdate((to) => {
  goods.value = null
  picTitle.value = null
  sizeTitle.value = null
  pictureArr.value = null
  sizeArr.value = null
  findColor.value = null
  findSize.value = null
  currentIndex.value = null
  currentIndex2.value = null
  currentIndex3.value = null
  emptySkusArr.value = null
  bigImg.value = null
  smallImg.value = null
  compId.value = to.query.id
  getGoods(to.query.id)
})
</script>
<style scoped lang="scss">
.cart-page {
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  // min-height: 550px;

  .cart {
    box-sizing: border-box;
    margin-top: 20px;
    background-color: #ffffff;
    width: 1260px;
    min-height: 550px;
    margin-bottom: 20px;
    display: flex;
    padding: 40px;
    .left {
      width: 40%;
      height: 480px;

      .Img {
        width: 100%;

        display: flex;
        justify-content: space-between;
        .smallImg {
          width: 85px;
          height: 370px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          .smallPicItem {
            // border: 3px solid #ccc;
            background-color: #f5f5f5;
            box-sizing: border-box;
            &:hover {
              border: 2px solid #27bb9a;
            }
            &.active {
              border: 2px solid #27bb9a;
            }
          }
        }
      }
    }

    .goodsInfo {
      width: 60%;

      padding: 0 40px;
      box-sizing: border-box;
      .selecPic {
        width: 50px;
        height: 50px;
        margin-left: 10px;
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        cursor: pointer;
        margin-top: 2px;
        margin-bottom: 2px;
        position: relative;
        .emptyBtn {
          position: absolute;
          border: 1px solid #ccc;
          background-color: #f5f5f5;
          right: 1px;
          top: -5px;
          width: 22px;
          height: 10px;
          border-radius: 20%;
          font-size: 9px;
          color: black;
          text-align: center;
          line-height: 10px;
        }
        &.active {
          border: 1px solid #27bb9a;
        }
        &.disabled {
          opacity: 0.5;
          border-style: solid;
          cursor: not-allowed;
        }
      }
      .selecSize {
        border: 1px solid #ccc;
        height: 100%;
        min-width: 55px;
        height: 30px;
        padding: 3px 7px;
        box-sizing: border-box;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #767473;
        cursor: pointer;
        margin-top: 2px;
        margin-bottom: 2px;
        &.active {
          border: 1px solid #27bb9a;
        }
      }
    }
  }
}
.cart-page1 {
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  min-height: 55px;

  .cart1 {
    background-color: #f5f5f5;
    width: 1260px;
    display: flex;
    justify-content: space-between;
    .left {
      width: 77%;
      background-color: #ffffff;
      box-sizing: border-box;
      padding: 0 40px;
      display: flex;
      flex-direction: column;
      // justify-content: flex-start;
      // align-items: center;
    }
    .right {
      width: 21.5%;
      background-color: #f5f5f5;
    }
  }
}
</style>
