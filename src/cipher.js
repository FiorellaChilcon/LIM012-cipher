const cipher = {
  encode: (number, str) => {
    const offset = parseInt(number);
    const text = str.toUpperCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let letterCode = text.charCodeAt(i);
      if (letterCode >= 65 && letterCode <= 90) {
        let position = (letterCode - 65 + offset) % 26 + 65;
        let finalLetter = String.fromCharCode(position);
        result += finalLetter;
      } else {
        result += text[i];
      }
    }
    return result;
  },

  decode: (number, str) => {
    const offset = parseInt(number);
    const text = str.toUpperCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let letterCode = text.charCodeAt(i);
      if (letterCode >= 65 && letterCode <= 90) {
        let position = (letterCode - 65 - offset + 26) % 26 + 65;
        if (position < 65) {
          let finalLetter = String.fromCharCode(position + 26);
          result += finalLetter;
        } else {
          let finalLetter = String.fromCharCode(position);
          result += finalLetter;
        }
      } else {
        result += text[i];
      }
    }
    return result;
  }
}

export default cipher;
