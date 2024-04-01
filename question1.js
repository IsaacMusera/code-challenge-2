var sentence = changecapitallettertosmall("IsAAc MusERA iS haNDsoME");
console.log(sentence);


function changecapitallettertosmall(input) {
  
  let convertedletters = [];

// looping the input
  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    // Check if letter is capitalletter
    if (char === char.toUpperCase()) {
      // If capitalletter, change it to smallletter and push to converted lettrs array
      convertedletters.push(char.toLowerCase());
    } else {
      // If lowercase, change it to capitalletter and push to converted lettrs array
      convertedletters.push(char.toUpperCase());
    }
  }

  //joining the array
  return convertedletters.join("");
}
