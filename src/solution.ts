const formatValue =(fv:(string|number|boolean))=>{
if(typeof fv === 'string'){
    return fv.toUpperCase()
}
else if(typeof fv === 'number'){
    return fv*10
}
else if(typeof fv === 'boolean'){
    return !fv
}

}
// console.log(formatValue('true'));


const getLength =(gl:(string|number[]))=>{
return gl.length
}

console.log(getLength('akash'));