function findMedian(arr) {
    arr.sort((a, b) => a - b);
    let middleIndex = Math.floor(arr.length / 2);
    
    if (arr.length % 2 === 0) {
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
        return arr[middleIndex];
    }
}
let list1 = [1, 2, 3, 4, 5, 6];
let medianValue = findMedian(list1);
console.log("Median value:", medianValue);
