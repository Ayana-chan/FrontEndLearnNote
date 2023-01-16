import request from "@/utils/request";

export function getAll(){
    return request({
        url:'/people/getAll',
        method:'post',
    })
}

export function getOne(id) {
    return request({
        url: `/people/getOne?${id}`,
        method: 'post',
    });
}

export default{
    getAll,
    getOne,
}