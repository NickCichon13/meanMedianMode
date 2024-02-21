
    
    function mean(nums){
      let sum =  nums.reduce((a,b) => a + b, 0);
      sum / nums.length;
    }

    function median(nums){
        const sortArray = nums.sort((a,b) => a - b);
        if(sortArray.length % 2 === 0){
            return  (arrSorted[arrSorted.length / 2 -1] + arrSorted[arrSorted.length / 2]) /2;
    } else {
            return   arrSorted[math.floor(arrSorted.length / 2)];
        }
    }

    function mode(nums){
        const frequencyTable = {}
        nums.forEach(elem => frequencyTable[elem] = + 1 || 1 );

        let modes = [];
        let maxFrequency = 0;
        for(const key in frequencyTable){
            if(frequencyTable[key] > maxFrequency){
                modes = [Number(key)];
                maxFrequency = frequencyTable[key];
            }
            else if(frequencyTable[key] === maxFrequency){
                modes.push(Number(key));
            }
        }
        if(modes.length === Object.key(frequencyTable).length) modes = [];
        return modes;
        
    }

    function convertAndValidateNumsArray(numsAsStrings) {
        let result = [];
      
        for (let i = 0; i < numsAsStrings.length; i++) {
          let valToNumber = Number(numsAsStrings[i]);
      
          if (Number.isNaN(valToNumber)) {
            return new Error(
              `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
            );
          }
      
          result.push(valToNumber);
        }
        return result;
      }


module.exports = {
    mean,
    median,
    mode,
    convertAndValidateNumsArray
}