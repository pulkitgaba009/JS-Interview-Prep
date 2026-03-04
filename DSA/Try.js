// // function shuffle(nums,n){
// //     const arr1 = nums.slice(0,n);
// //     const arr2 = nums.slice(n,nums.length);
// //     const arr3 = [];

// //     console.log(arr1,"\n",arr2);

// //     for ( let i = 0 ;i < n ;i++){
// //      arr3.push(arr1[i]);
// //      arr3.push(arr2[i]);   
// //     }
    
// //     console.log(arr3);
// // }

// // shuffle([2,5,1,3,4,7],3)


// var findMaxConsecutiveOnes = function(nums) {
//     let count = 0;
//     let maxReps =0;
    
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===1){
//             count++;
//             maxReps=Math.max(maxReps,count);
//         }else{
//             count=0;
//         }
//         console.log("count : ",count);
//         console.log("Max : ",maxReps);
//     }
// };

// // console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
// // console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))

// // findMaxConsecutiveOnes([1,0,1,1,0,1])
// findMaxConsecutiveOnes([1,1,0,1,1,1])


var isPalindrome = function(x) {
    let number = x ;
    let digit = 0 ;
    let reversed = 0;

    while ( number > 0 ){
        digit = number % 10 ;
        reversed = (reversed * 10) + digit ;
        number = Math.floor(number/10) ;
    }

    console.log(reversed);    
};

isPalindrome(121)
