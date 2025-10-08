const ceasercipher=(string,shift=3) => {
    let split=string.split('');
    for(let i=0;i<split.length;i++){
        let char=split[i];
        let code=char.charCodeAt(0);
        if(code>=65 && code<=90 || code >= 97 && code <= 122 ){
            let base =(code >= 97) ? 97 : 65;
            let newCode =code+shift;

            while(newCode>base+25) {
                newCode-=26;
            }
            while(newCode<base) {
                newCode+=26;
            }

            split[i]=String.fromCharCode(newCode);     
        }
    }
    return split.join('');
}


module.exports=ceasercipher;