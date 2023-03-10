import axios from 'axios'
import { ElMessage } from 'element-plus';

export default function request(config){
    
    //创建axios实例
    const axiosInstance=axios.create({
        baseURL: 'http://127.0.0.1:5173',
        headers:{'Content-Type':'application/json'},
        timeout: 4000,
    })
    
    // 添加请求拦截器
    axiosInstance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        ElMessage.success('request send');
        return config;
      },
      function (error) {
        // 对请求错误做些什么
        ElMessage.error('ERROR: Request Failed');
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    axiosInstance.interceptors.response.use(
      function (response) {
        //2xx响应码会触发此函数
        // 对响应数据做点什么
        return response;
      },
      function (error) {
        // 对响应错误做点什么
        if (error.response) {
          if (error.response.status == 404) {
            ElMessage.error('ERROR: 404');
          }else{
            ElMessage.error('ERROR: Unknown Error');
          }
        }
        return Promise.reject(error);
      }
    );

    // 使用自定义的实例结合传入的配置生成请求
    return axiosInstance(config)
}