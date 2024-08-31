import http from '@/utils/request'

export function getCategoryAPI() {
  return http({
    url: 'home/category/head'
  })
}
