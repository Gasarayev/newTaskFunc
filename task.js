
// //1-----------------------------------------

// function buildFunctions(){
//     var arr = [];

//     for(let index = 0; index <3; index++){
//         arr.push(
//             function(){
//                 console.log(index);
//             }
//         )
//     }

//     return arr
// }

// var fs = buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();

// // 2-----------------------------------

function buildFunctions() {
  var arr = [];

  for (var index = 0; index < 3; index++) {
    (function (index) {
      arr.push(function () {
        console.log(index);
      });
    })(index);
  }

  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();



// //-------------------

// let arr = [1,5,4,7,4,6];


// let sum = arr.reduce((value, numb)=>{

//     return value + numb

// });

// console.log(sum)