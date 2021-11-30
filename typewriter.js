const sentence = "hello there from lighthouse labs";

let timer = 0;

const typeWriter = function (words) {
  for (const char of words) {

    setTimeout(() => {
      process.stdout.write(char)
    }, timer);
    timer += 50;
  };



  setTimeout(() => {

    console.log('\n')

  }, timer)


};

typeWriter(sentence);

