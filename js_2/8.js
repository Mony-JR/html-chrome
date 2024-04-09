const list = [2,5,1,7,3,6,4,9,8,10];
const sortNum = (list) => {
    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length - 1; j++) {
            if(list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
};
console.log(sortNum(list));
