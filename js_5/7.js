function fil_obj(object, ...propsToFilter) {
    
    console.log(Object.keys(object)); 
    return Object.keys(object).reduce((result, key) => { 
        if (!propsToFilter.includes(key)) {
            
            result[key] = object[key];
        }
        return result;
    }, {});
}

let object = {a: 1, b: 2, c: 3, d: 4};
console.log(fil_obj(object, "b", "d")); 


