export function changeParams(params: any) {
    let spliceParams = '';
    for (const key in params) {
        if (spliceParams !== '') {
            spliceParams = `${spliceParams}&${key}=${params[key]}`;
        } else {
            spliceParams = `${key}=${params[key]}`;
        }
    }
    return encodeURI(spliceParams);
}

/**
 * @name getParams 表单数据转化函数
 * @param str
 * @param target
 */
export function getParams(str: string, target: string) {
    const search = str.split('?')[1];
    const reg = new RegExp(`(^|&)${target}=([^&]*)(&|$)`, 'i');
    const r = search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}
