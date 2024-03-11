import request from '@/utils/request'

export function getCurriculumsList(params) {
  return request({
    url: '/index.php',
    method: 'get',
    params
  })
}