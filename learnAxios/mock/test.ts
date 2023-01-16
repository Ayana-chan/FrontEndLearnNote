import { MockMethod } from 'vite-plugin-mock';
// import Mock from 'mockjs';

export default [
  {
    url: '/mockBasicTest',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: { success: true },
      };
    }
  }
] as MockMethod[]

// Mock.mock('/mockBasicTest', 'get', (req) => {
//   console.log(req);
//   return {
//     username: '名字',
//     type: '类型',
//   };
// });
