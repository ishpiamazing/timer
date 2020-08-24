

let arg = process.argv.slice(2);

const beepTimer = function(){

  if(arg.length >= 1){

    for (let a of arg) {
      a = a * 1;
      if(Number.isInteger(a) && a >= 1) {
        setTimeout(()=> process.stdout.write('.'),a * 1000);
      }
    }
    
  }
}

beepTimer();