export function fetchA(params: { name: string }): Promise<any> {
    return Promise.resolve({
        data: params.name,
    });
}

export function fetchB(params: { name: string }): Promise<any> {
    return Promise.resolve({
        data: params.name,
    });
}
