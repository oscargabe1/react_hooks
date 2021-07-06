var twoSum = function(nums, target) {

    let results = [];
    
    nums.forEach((num1,i1) => {
        nums.forEach((num2, i2) => {
            if (num1 !== num2) {
                results.push({
                    first: i1,
                    second: i2,
                    sum: (num1 + num2)
                })
            }
        }); 
    });
    let targetResult = results.find(result =>{
        return result.sum === target
    })
    return targetResult != undefined ? [targetResult.first,targetResult.second] : null;
    
};

let nums = [2,7,11,15];
let target = 9;

console.log(twoSum(nums, target));