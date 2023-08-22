document.querySelector('.wrapper').addEventListener('click', clickHandler);

async function clickHandler() {
  const text = await getClipboardValue();
  console.log('input: ', text);

  const encrypted = encrypt(text);

  await writeValueToClipboard(encrypted);

  const changedText = await getClipboardValue();
  console.log('output: ', changedText);
}

async function getClipboardValue() {
  return await navigator.clipboard.readText();
}

async function writeValueToClipboard(text) {
  await navigator.clipboard.writeText(text);
}

function encrypt(text) {
  return text.split('').map(replaceChar).join('');
}

function replaceChar(char) {
  switch (char.toLowerCase()) {
    case 'a':
      return '!';
    case 'b':
      return '@';
    case 'c':
      return '#';
    case 'd':
      return '$';
    case 'e':
      return '/';
    case 'f':
      return '^';
    case 'g':
      return '&';
    case 'h':
      return '*';
    case 'i':
      return '+';
    case 'j':
      return '.';
    case 'k':
      return '_';
    case 'l':
      return '=';
    case 'm':
      return '1';
    case 'n':
      return '2';
    case 'o':
      return '3';
    case 'p':
      return '4';
    case 'q':
      return '5';
    case 'r':
      return '6';
    case 's':
      return '7';
    case 't':
      return '8';
    case 'u':
      return '9';
    case 'v':
      return '0';
    case 'w':
      return 'a';
    case 'x':
      return 'B';
    case 'y':
      return 'c';
    case 'z':
      return 'D';
    case '1':
      return 'e';
    case '2':
      return 'F';
    case '3':
      return 'g';
    case '4':
      return 'H';
    case '5':
      return 'i';
    case '6':
      return 'J';
    case '7':
      return 'k';
    case '8':
      return 'L';
    case '9':
      return 'm';
    case '0':
      return 'N';
    case '!':
      return 'o';
    case '@':
      return 'P';
    case '#':
      return 'q';
    case '$':
      return 'R';
    case '/':
      return 's';
    case '^':
      return 'T';
    case '&':
      return 'u';
    case '*':
      return 'V';
    case '+':
      return 'w';
    case '.':
      return 'z';
    case '_':
      return 'y';
    case '=':
      return 'z';

    default:
      return '?';
  }
}
