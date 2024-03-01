// Sort an array of numbers in descending order


//Declare an array of scores
const scores = [19, 92, 15, 100, 87, 65, 72, 12, 90]

//sort the array in descending order
scores.sort(function(a, z){
    return (z - a)
})
//print array
console.log(scores)