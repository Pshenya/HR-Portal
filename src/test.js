function checkBrackets(arr){
    return arr.filter((el, pos) => {
        if (arr.indexOf(el) === pos){
            arr.delete(el);
        }
        return arr;
    });
}

console.log(checkBrackets([1,1,2,3,4,4,5,6,6,7,7,8,9]));
