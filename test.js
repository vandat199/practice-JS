let arr = [39356, 87674, 16667, 54260, 43958, 70429, 53682, 6169, 87496, 66190, 90286, 4912, 44792, 65142, 36183, 43856, 77633, 38902, 1407, 88185, 80399, 72940, 97555, 23941, 96271, 49288, 27021 ,32032 ,75662, 69161, 33581, 15017 ,56835 ,66599, 69277, 17144, 37027, 39310, 23312, 24523 ,5499, 13597, 45786, 66642, 95090 ,98320, 26849, 72722, 37221, 28255, 60906]

function circularArrayRotation(a, k, queries) {
    // Write your code here
    console.log(a)
    console.log(k)
    console.log(queries)
    let length = a.length;
    let rightShift = k % length;
    console.log(rightShift)
    let arrayShift = a.slice(length - rightShift, length)
    let arrayRemaining = a.slice(0, length - rightShift)
    let result = arrayShift.concat(arrayRemaining)
    console.log(result)
    return result
}

circularArrayRotation(arr, 51, [0,1,2,3,4,5,6,7,8,9])