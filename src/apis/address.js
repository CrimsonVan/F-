import http from '@/utils/request'

// 添加收货地址
export const addressAddAPI = (obj) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data: obj
  })
}
//删除收货地址
export const addressDelAPI = (id) => {
  return http({
    url: `/member/address/${id}`,
    method: 'DELETE'
  })
}
// 编辑收货地址
export const addressEditAPI = (id, obj) => {
  return http({
    url: `/member/address/${id}`,
    method: 'PUT',
    data: obj
  })
}
//更新购物车商品状态
// export const changeCartGoodsAPI = (skuId,num,selected ) => {
//     return http({
//         url: `/member/cart/${skuId}`,
//         method: 'PUT',
//         data: {
//             selected:selected,
//             count:num
//         }
//     })
// }
