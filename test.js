// ques1:-
/**
 * 
 *Have the function ClosestEnemy(arr) take the array of numbers stored in arr and from the position in the array where a 1 is, return the number of spaces either left or right you must move to reach an enemy which is represented by a 2. For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3 because the closest enemy (2) is 3 spaces away from the 1. The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0.

Once your function is working, take the final output string and combine it with your ChallengeToken, both in reverse order and separated by a colon.

Your ChallengeToken: 7cxztjg23ae
 */
function ArrayChallenge(arr) { 

    // code goes here  
  
    const challengeToken = "7cxztjg23ae"; 
    const oneIndex = arr.indexOf(1);
  
    if (oneIndex === -1) {
      return `0:${challengeToken.split('').reverse().join('')}`;
    }
  
    let minDistance = Infinity;
  
   
    arr.forEach((num, idx) => {
      if (num === 2) {
        const distance = Math.abs(idx - oneIndex);
        if (distance < minDistance) {
          minDistance = distance;
        }
      }
    });
  
  
    const result = minDistance === Infinity ? 0 : minDistance;
    const reversedToken = challengeToken.split('').reverse().join('');
    return `${result}:${reversedToken}`;
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));

// ques2:-
/**
 * 
 * Have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all the other numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)]. You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least 1 element of only positive integers.

Once your function is working, take the final output string and combine it with your ChallengeToken, both in reverse order and separated by a colon.

Your ChallengeToken: 7cxztjg23ae
 */
function ArrayChallenge(arr) { 
    // code goes here  
  const challenge_token="7cxztjg23ae"
  const total_product=arr.reduce((acc,num)=>acc*num, 1);
  const product_arr=arr.map(num=>total_product/num);
  
  const reverse_num=product_arr.map(num=>num.toString().split('').reverse().join('')).reverse().join('-');
  const reverse_token=challenge_token.split('').reverse().join('');
  const final_result=`${reverse_num}:${reverse_token}`
    
    return final_result;
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));