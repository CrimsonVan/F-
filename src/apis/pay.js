import http from '@/utils/request'

export const getOrderAPI = (id) => {
  return http({
    url: `/member/order/${id}`
  })
}
