<script>
function getRandomTSCode(){
  const num = Math.floor(Math.random()*100)+1;
  switch (num){
    case 1:
      return "console.log('Hello World');";
    break;
    case 2:
      return "const name = 'John Doe'; console.log(`My name is ${name}`);";
    break;
    default:
      return `const num = Math.floor(Math.random()*100)+1;
            switch (num){
              case 1:
                return "console.log('Hello World');";
              break;
              case 2:
                return "const name = 'John Doe'; console.log(`My name is ${name}`);";
              break;
              default:
                return "const color = Math.floor(Math.random()*16777215).toString(16); document.body.style.backgroundColor = `#${color}`;";
            }`;
}
</script>
