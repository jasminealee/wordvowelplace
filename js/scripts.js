var checkVowel = function(str){
  if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u"){
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(function() {
  $("button#enter").click(function(event) {
    event.preventDefault();
    debugger;
    var sentence = $("#userInput").val().split("");
    for (var i = 0; i < sentence.length; i++) {
      if(checkVowel(sentence[i])){
        sentence[i] = "-";
      }
    }
    var result = sentence.join("");
    $("#output").append(result);
  });
});

// $(document).ready(function() {
//   $("button").click(function(){
//     var userSentence = $("input#textInput").val(); //targets input field with id="textInput" and calls on the value
//     var userString = userSentence.split(''); //splits var userSentence into an array "userString"
//
//
//     console.log(userString)
//
