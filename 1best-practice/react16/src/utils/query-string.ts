/**
 * 这个文件是为了处理不规范链接的通用函数，
 * 目前由于使用了现代框架，可能导致链接中的hash值后面拼接了search
 * 标准url
 * 协议://域名:端口号?search#Hash
 * 这里的兼容逻辑是
 * 1.后端和app跳转链接时，直接将参数以?a=b&c=d格式拼接到尾部，这样就会产生错误链接，导致参数无法获取。
 */
import qs from 'query-string';

export default qs;
/**
 * 兼容多版本路由规则
 */
export function getSearch(): string {
    return (
        window.location.search ||
        (!window.location.hash.includes('?')
            ? ''
            : window.location.hash.slice(window.location.hash.indexOf('?')))
    );
}

/**
 * 兼容多版本路由规则
 */
export function getQuery(): qs.ParsedQuery<string> {
    const search = getSearch();
    return qs.parse(search);
}

export function URLSearchParamsHelper(): any {
    const search = getSearch();
    let urlSearchParameters;
    if (typeof window.URLSearchParams === 'function') {
        urlSearchParameters = new URLSearchParams(search);
    }
    return urlSearchParameters;
}
