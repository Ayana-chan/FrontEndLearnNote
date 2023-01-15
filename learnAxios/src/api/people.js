import request from "@/utils/request";

export function getAll(){
    return request({
        url:'/people',
        method:'get',
    })
}

export function getOne(id) {
    return request({
        url: `/people?${id}`,
        method: 'get',
    });
}

export default{
    getAll,
    getOne,
}