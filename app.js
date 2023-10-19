// TASK - 1 --> Array-də(minimum 5 element olsun) cüt ədədlərlə tək ədədlərin fərqini tapan algorithmi qurun//
// let numArr = [3, 5, 16, 90, 2];

// function difference(array) {
// let sumEven = 0;
// let oddEven = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       sumEven += array[i];
//     } else {
//       oddEven += array[i];
//     }
//   }
// return sumEven - oddEven;
// }
// console.log(difference(numArr));



// TASK - 2 --> Array-də(minimum 5 element olsun) 3 rəqəmli ədədlərlə digər ədədlər arasındakı fərqi tapan algorithmi qurun//
// let numArr = [12, 7, 98, 258, 1, 127];

// function sum(arr) {
// let allSum = 0;
// let threeDigitSum = 0;
//   for (i = 0; i < numArr.length; i++) {
//     let eded = arr[i] / 100;
//     if (eded > 1 && eded < 10) {
//       threeDigitSum += arr[i];
//     } else {
//       allSum += arr[i];
//     }
//   }
// return threeDigitSum - allSum;
// }
// console.log(sum(numArr));



// TASK - 3 --> m natural ədədi n ədədinin o zaman bərabər böləni adlanır ki, n-nin m-ə bölünməsindən alınan tam və qalıq bərabər olsun. Verilmiş n natural ədədinə görə onun bərabər bölənlərinin sayını tapın.//
// let num = parseInt(prompt("ededi daxil edin:"));

// function reminder(){
// let counter = 0;

// for(i = 0; i < num; i++){
//     if(num % i == parseInt(num / i) && num % i == parseInt(num / i)){
//         counter++;
//     }
// }
// return counter;
// }
// console.log(reminder(num));



// TASK - 4 --> Simmetriya dərəcəsi//
// let number = parseInt(prompt("ededi daxil edin:"));
// let arr = [];
// let counter = 0;
// while(number){
//     let digit = number % 10;
//     number = parseInt(number / 10);
//     arr.push(digit);
// }
// // console.log(arr);
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == arr[i + 1]){
//         counter++;
//     }
// }
// console.log(counter);



// TASK - 5 --> Final turuna keçənlər //
// let studentCounter = parseInt(prompt("Sagirdlerin sayini daxil edin:"));
// let avaragePrice = parseFloat(prompt("Sagirdin ortalama qiymetini daxil edin:"));

// for(let i = 0; i < studentCounter; i++){
//     if(avaragePrice > 4 && avaragePrice <= 5){
//         console.log("A");
//     }else if(avaragePrice > 3 && avaragePrice <= 4){
//         console.log("B");
//     }else if(avaragePrice > 2 && avaragePrice <= 3){
//         console.log("C");
//     }else if(avaragePrice > 1 && avaragePrice <= 2){
//         console.log("D");
//     }else if(avaragePrice > 0 && avaragePrice <= 1){
//         console.log("E");
//     }else if(avaragePrice == 0){
//         console.log("F");
//     }else{
//         console.log("Duzgun price daxil edin.");
//     }
// }



// TASK - 6 --> Birinci massivin o elementlərini çap edin ki, qiymətləri ikinci massivdə olmasın//
// let arr1 = [1, 4, 6, 12, 33, 8];
// let arr2 = [2, 4, 11, 12, 98, 10];
// function checkArr(first, second) {
//   for (let i = 0; i < first.length; i++) {
//     for (let j = 0; j < second.length; j++) {
//       if (first[i] == second[j]) {
//         first.splice(i, 1);
//       }
//     }
//   }
//   return first;
// }
// console.log(checkArr(arr1, arr2));

