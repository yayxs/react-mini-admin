export default function queryString(query){
    let _queryString = {};
    const _query = query;
    
    const _vars = _query.split('&')
    _vars.forEach((v,i)=>{
        const [ key,val ] = v.split('=')
        if(!_queryString.hasOwnProperty(key)){
            _queryString[key] = decodeURIComponent(val)
        }else if(typeof _queryString[key] === 'string'){
            const _arr = [ _queryString[key], decodeURIComponent(val)]
            _queryString[key]=_arr
        }else{
            _queryString[key].push(decodeURIComponent(val));
        }
    })

    return _queryString
}