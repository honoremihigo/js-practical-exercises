function arrayStatistics(arr) {
    let sum = 0;
    let average = 0;
    let min = arr[0]
    let max = arr[0]

    for(let i = 0; i < arr.length; i++) {
        sum+=arr[i];
        if(arr[i]< min){
            min = arr[i];
        }
        if(arr[i]> max){
            max = arr[i];
        }
    }
    average = sum / arr.length;

    return {
        sum: sum,
        avarage: average,
        min: min,
        max: max
    }
}


console.log(arrayStatistics([1, 2, 3, 4, 5]));