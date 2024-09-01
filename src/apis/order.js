import http from '@/utils/request'

/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = (params) => {
  return http({
    url: '/member/order',
    method: 'GET',
    params
  })
}
