const cipher = {
  encode: (number, str) => {
    // eslint-disable-next-line no-debugger
    debugger;
    const offset = parseInt(number);
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let letterCode = str.charCodeAt(i);
      let letter = str[i];
      if (letterCode >= 97 && letterCode <= 122) {
        let position = (letterCode - 97 + offset) % 26 + 97;
        let finalLetter = String.fromCharCode(position);
        result += finalLetter;
      } else if (letterCode >= 65 && letterCode <= 90) {
        let position = (letterCode - 65 + offset) % 26 + 65;
        let finalLetter = String.fromCharCode(position);
        result += finalLetter;
      } else {
        result += letter;
      }
    }
    return result;

  },

  decode: (number, str) => {
    const offset = parseInt(number);
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let letterCode = str.charCodeAt(i);
      if (letterCode >= 97 && letterCode <= 122) {
        let position = (letterCode - 97 - offset + 26) % 26 + 97;
        if (position < 97) {
          let finalLetter = String.fromCharCode(position + 26);
          result += finalLetter;
        } else {
          let finalLetter = String.fromCharCode(position);
          result += finalLetter;
        }
      } else if (letterCode >= 65 && letterCode <= 90) {
        let position = (letterCode - 65 - offset + 26) % 26 + 65;
        if (position < 65) {
          let finalLetter = String.fromCharCode(position + 26);
          result += finalLetter;
        } else {
          let finalLetter = String.fromCharCode(position);
          result += finalLetter;
        }
      } else {
        result += str[i];
      }
    }
    return result;
  }
}
export default cipher;
