function bubbleSort (array) {
   for (let n = 0; n < array.length; n++) {
      for (let i = 0; i < array.length - 1 - n; i++) {
         if (array[i] > array[i + 1]) {
            const buff = array[i]
            array[i] = array[i + 1]
            array[i + 1] = buff
         }
      }
   }

   return array
}
console.log(bubbleSort([1,3,2,6,5,9,7,8,10,4]))
