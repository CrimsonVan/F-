import http from '@/utils/request'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
//更新购物车商品状态
export const changeCartGoodsAPI = (skuId, num, selected) => {
  return http({
    url: `/member/cart/${skuId}`,
    method: 'PUT',
    data: {
      selected: selected,
      count: num
    }
  })
}
//改变购物车勾选择状态
export const changeCartSelectedAPI = (selected, arr) => {
  return http({
    url: '/member/cart/selected',
    method: 'PUT',
    data: {
      selected: selected,
      ids: arr
    }
  })
}
//获取最新的购物车列表
export const findNewCartListAPI = () => {
  return http({
    url: '/member/cart'
  })
}

// 删除购物车
export const delCartAPI = (ids) => {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCartAPI = (data) => {
  return http({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
