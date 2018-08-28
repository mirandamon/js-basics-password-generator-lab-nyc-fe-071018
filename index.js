window.addEventListener("load", () => {
  //start your code here
  let outputResult = document.querySelector("output")
  let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz".split('')
  let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  let numberCharacters = "0123456789".split('')
  let specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_{|}~".split('')

  document.addEventListener('submit', (event) => {
    // stay on the same page
    event.preventDefault();
    
    let input = document.getElementById("passwordLength")
    let passwordLength = input.value
    if (passwordLength < 4) {
      passwordLength = 4
    }
    let newPassword = ""
    for (let i = 0; i < passwordLength;) {
      if (i < passwordLength) {
        newPassword += lowerCaseCharacters[
          Math.floor(Math.random() * lowerCaseCharacters.length)
        ]
        i++
      }
      if (i < passwordLength) {
        newPassword += upperCaseCharacters[
          Math.floor(Math.random() * upperCaseCharacters.length)
        ]
        i++
      }
      if (i < passwordLength) {
        newPassword += numberCharacters[
          Math.floor(Math.random() * numberCharacters.length)
        ]
        i++
      }
      if (i < passwordLength) {
        newPassword += specialCharacters[
          Math.floor(Math.random() * specialCharacters.length)
        ]
        i++
      }
    }
    
    outputResult.innerHTML = newPassword
  })
  
})
    
    
    
    
    
    
    
    
    
    /*if (passwordLength < 4) {
      outputResult.innerText = "Error: Password must be at least 4 characters long."
    } else {
      let i=0;
      let randomPassword = ""
      for (; i < passwordLength;) {
        if (i < passwordLength) {
          randomPassword += lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
          i++
        }
        if (i < passwordLength) {
          randomPassword += upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
          i++
        }
        if (i < passwordLength) {
          randomPassword += numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
          i++
        }
        if (i < passwordLength) {
          randomPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
          i++
        }
        if (usedPasswords.indexOf(randomPassword) > -1) {
          randomPassword = "";
          i = 0;
        }
      }
      outputResult.innerText = randomPassword
      usedPasswords[clickCounter] = randomPassword;
      clickCounter++
    }
    
  })*/
