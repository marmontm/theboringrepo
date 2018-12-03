function writeNextLine() {
  const lines = document.getElementsByClassName('line');
  const lastLine = lines[lines.length - 1];
  let count = 0;
  let nextLine = document.createElement('div');
  nextLine.className = "line";

  for (let i = 0; i < lastLine.innerHTML.length; i++) {
    if ((lastLine.innerHTML[i] = lastLine.innerHTML[i + 1])) {
      count++;
    } else {
      nextLine.innerHTML = nextLine.innerHTML + count + lastLine[i];
      i = i + count - 1;
    }
  }

  document.getElementById("lines").appendChild(nextLine);
}
