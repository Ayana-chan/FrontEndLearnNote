import request from '@/utils/request';

export function getAll() {
  return request({
    url: '/book',
    method: 'get',
  });
}

export function getOne(id) {
  return request({
    url: `/book?${id}`,
    method: 'get',
  });
}

export default{
  getAll,
  getOne,
}