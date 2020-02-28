const cipher = {
  encode: (number, str) => {
    // eslint-disable-next-line no-debugger
    debugger;
    const offset = parseInt(number, 10);
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
      const letterCode = str.charCodeAt(i);
      const letter = str[i];
      if (letterCode >= 97 && letterCode <= 122) {
        const position = ((letterCode - 97 + offset) % 26) + 97;
        const finalLetter = String.fromCharCode(position);
        result += finalLetter;
      } else if (letterCode >= 65 && letterCode <= 90) {
        const position = ((letterCode - 65 + offset) % 26) + 65;
        const finalLetter = String.fromCharCode(position);
        result += finalLetter;
      } else {
        result += letter;
      }
    }
    return result;
  },
  decode: (number, str) => {
    const offset = parseInt(number, 10);
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
      const letterCode = str.charCodeAt(i);
      if (letterCode >= 97 && letterCode <= 122) {
        const position = ((letterCode - 97 - offset + 26) % 26) + 97;
        if (position < 97) {
          const finalLetter = String.fromCharCode(position + 26);
          result += finalLetter;
        } else {
          const finalLetter = String.fromCharCode(position);
          result += finalLetter;
        }
      } else if (letterCode >= 65 && letterCode <= 90) {
        const position = ((letterCode - 65 - offset + 26) % 26) + 65;
        if (position < 65) {
          const finalLetter = String.fromCharCode(position + 26);
          result += finalLetter;
        } else {
          const finalLetter = String.fromCharCode(position);
          result += finalLetter;
        }
      } else {
        result += str[i];
      }
    }
    return result;
  },
};
export default cipher;
