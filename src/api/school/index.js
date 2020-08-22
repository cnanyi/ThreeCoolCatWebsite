import request from '@/utils/request'

/**
 * 精品课程后台接口
 */
export function getCourses(params) {
    return request({
        url: '/school/api/courses/',
        method: 'get',
        params
    })
}

/**
 * 教师后台接口
 */
export function getTeachers(params) {
    return request({
        url: '/school/api/teachers/',
        method: 'get',
        params
    })
}
