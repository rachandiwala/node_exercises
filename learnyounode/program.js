// Ex: 1 Hello world

 console.log("HELLO WORLD");


// Ex: 2 process.argv


var total = 0;

for(var i =2; i < process.argv.length; i++) {

   total += Number(process.argv[i]);
}

  console.log(total);



//    Example
// print process.argv
/*

process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

      Example 2:

  for (var i = 2; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}
  console.log(result);



*/