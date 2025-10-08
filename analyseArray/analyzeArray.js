const analyseArray= function(array){
    let sortedArray=array.sort((a,b) => a-b);
    let obj={
        average:(array.reduce((val,acc) => val+acc)/array.length),
        min:sortedArray[0],
        max:sortedArray[array.length-1],
        length:array.length,
    };
    
    return obj
};

module.exports=analyseArray;