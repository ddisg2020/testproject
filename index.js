const distances  = [51, 56, 58, 59, 61];
const maxDistance = 174;
const maxCitiesQuantity = 3;

const chooseOptimalDistance = (t, k, Is) => {
    if (Is.length <= 1 || k <= 0) return null;
    let combinations = [];
    let countsList = [];
    let itemCount = 0;
    let letLen = Math.pow(k, Is.length);
        for (var i = 0; i < letLen ; i++){
            let resultItem = [];
            for (let j=0; j < Is.length; j++) {
                if (( i & Math.pow(2, j) )){
                    resultItem.push(Is[j]);
                    itemCount += Is[j];
                }
            }
            if (resultItem != [] 
                && resultItem.length == k 
                && itemCount < t
                ){
                 combinations.push(resultItem)
                 countsList.push(itemCount);
            }
        }

    const max = Math.max(...countsList);
    return max;
} 
const result = chooseOptimalDistance(maxDistance, maxCitiesQuantity, distances);
console.log(result);