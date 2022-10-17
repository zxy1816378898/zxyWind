import request from '@/utils/request.js';
// 根据监管类型来查询各区县监管分析
export function getJgBytype(query) {
  return request({
    url: '/api/gzmh/getJgBytype',
    method: 'get',
    params: query,
  });
}
