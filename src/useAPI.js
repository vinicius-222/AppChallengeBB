import qs from 'qs';

const BASEAPI = 'https://run.mocky.io/';

const apiFetchFile = async (endpoint, jwt, hash, uri, filename, type) => {
    let formData = new FormData();
    formData.append('photo', {
        uri: uri,
        type: type,
        name: filename
    });
    formData.append('jwt', jwt);
    formData.append('hash', hash);

    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Content-Type':'multipart/form-data',
            'Authorization':`Bearer ${jwt}`
        },
        body: formData
    });
    const json = await res.json();

    return json;
}
const apiFetchPost = async (endpoint, body, props) => {
    const res = await fetch(BASEAPI+endpoint, { 
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    return json;
}
const apiFetchGet = async (endpoint, body = []) => {

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    return json;
}
const apiFetchDelete = async (endpoint, body = [], props) => {
    const res = await fetch(BASEAPI+endpoint, {
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    });
    
    const json = await res.json();
    return json;
}
const apiFetchPut = async (endpoint, body = [], props) => {
    const res = await fetch(BASEAPI+endpoint, {
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();
    return json;
} 
const useAPI = () => ({
    getInvestiments:async() => {
        const json = await apiFetchGet('v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653')
        return json;
    },
})

export default useAPI;