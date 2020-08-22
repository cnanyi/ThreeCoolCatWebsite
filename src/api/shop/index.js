import request from '@/utils/request'

/**
 * 精品图书后台接口
 */
export function getBooks(params) {
    return request({
        url: '/shop/api/books/',
        method: 'get',
        params
    })
}

