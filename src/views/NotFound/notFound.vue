<template>
  <div class="cart-page">
    <div class="cart">
      <h1>404 NotFound</h1>
      <!-- <div>
        <input :value="value" @input="value = $event.target.value" />
      </div>
      <div>{{ value }}</div>
      <div>Pinia里的数字：{{ userStore.count }}</div>
      <div>
        <button @click="userStore.countAdd()">操作Pinia里的数字</button>
      </div> -->
    </div>
  </div>
</template>
<script setup>
//快速排序
// 1 3 7 4 5 6 2
// import { ref } from 'vue'
// const oldList = ref([3, 3, 3, 1, 90, 18, 9, 10])
// const newList = ref([])
// const kpFunc = (arr) => {
//   if (arr.length < 2) {
//     return arr
//   }
//   let pivot = arr[0].count

//   let left = []
//   let right = []
//   for (let i = 1; i < arr.length; i++) {
//     arr[i].count > pivot ? left.push(arr[i]) : right.push(arr[i])
//   }

//   return [...kpFunc(left), arr[0], ...kpFunc(right)]
// }

//去重加重复个数
// const removeSame = (arr) => {
//   const noSameList = [...new Set(arr)]
//   let newnewArr = []
//   for (let i = 0; i < noSameList.length; i++) {
//     let num = 0
//     for (let j = 0; j < arr.length; j++) {
//       if (noSameList[i] === arr[j]) {
//         num = num + 1
//       }
//     }
//     newnewArr.push({ name: noSameList[i], count: num })
//   }

//   // newnewArr.sort()
//   newList.value = kpFunc(newnewArr)
// }
// import { ref, watch } from 'vue'
// import { useUserStore } from '@/stores'
// const userStore = useUserStore()
// const value = ref('')
// const numReg = /^\d{3}$/
// console.log('复习电话号码正则表达式', numReg.test(111))
// const passwordReg = /^[A-Za-z]{2}\d{2}$/
// console.log('密码的正则表达式', passwordReg.test('aa82'))
// console.log('验证是否是数组', Array.isArray({}))

// watch(value, (newVal, oldVal) => {
//   console.log('触发了watch', newVal, oldVal)
// })
</script>
<style scoped lang="scss">
.cart-page {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  .cart {
    text-align: center;
  }
}
</style>
@/stores/userStore
