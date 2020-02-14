const cipher = {
  encode: (number, str) => {
    const offset = parseInt(number);
    const text = str.toUpperCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " ") {
        result += " ";
      } else {
        let letterCode = text.charCodeAt(i);
        let position = (letterCode - 65 + offset) % 26 + 65;
        let finalLetter = String.fromCharCode(position);
        result += finalLetter;
      }
    }
    return result;
  },
  decode: (number, str) => {
    const offset = parseInt(number);
    const text = str.toUpperCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " ") {
        result += " ";
      } else {
        let letterCode = text.charCodeAt(i);
        let position = (letterCode - 65 - offset) % 26 + 65;
        let finalLetter = String.fromCharCode(position);
        result += finalLetter;
      }
    }
    return result;
  }
};

export default cipher;
