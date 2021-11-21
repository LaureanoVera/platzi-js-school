// REPLACEALL
const string =
  "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

// METODO INTERNO
class Message {
  #show(val) {
    console.log(val);
  }

  get #add(val) {
    
  }
}

const message = new Message()
message.show('Hello!')