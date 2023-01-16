import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/people/getAll',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
            name: '@cname'
        },
      };
    },
  },
] as MockMethod[];
