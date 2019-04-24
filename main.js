// dichiaro il ciclo for
for(i=1 ;i<=100; i++){
// numeri multipli di 5 e 3
  if(i % 3 == 0 && i % 5 == 0){
    console.log('fizzbuzz');
    document.getElementById('list').innerHTML += '<br>fizzbuzz';
// numeri multipli di 3
  }else if(i % 3 == 0 ){
   console.log('fizz');
   document.getElementById('list').innerHTML += '<br>fizz';
// numeri multipli di 5
  }else if(i % 5 == 0 ){
   console.log('buzz');
   document.getElementById('list').innerHTML += '<br>buzz';
// numeri non multipli
  }else{
   console.log(i);
   document.getElementById('list').innerHTML += '<br>'+ i ;
  }
}
