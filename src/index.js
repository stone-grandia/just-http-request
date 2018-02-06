export const request = function (method, url, {query, body, headers}, responseType = 'text') {
    method = method.toUpperCase();
    if (query) {
        query = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
        let join = url.indexOf('?') >= 0 ? '&' : '?';
        url = url + join + query;
    }
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve({result: xhr.response, request: xhr});
                } else {
                    reject({result: xhr.response, request: xhr});
                }
            }
        };
        if (headers) {
            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });
        }
        xhr.responseType = responseType;
        xhr.open(method, url, true);
        xhr.send(body);
    });
};

export const get = function (url, query) {
    return request('GET', url, {query});
};

export const load = function (url, query) {
    return request('GET', url, {query}, 'arraybuffer');
};

export const post = function (url, query, body) {
    return request('POST', url, {query, body});
};
