const firstArea = document.querySelector("textarea[name='txtarea']");//select both textarea
const secArea = document.querySelector("textarea[name='txtarea2']");
document.querySelector("button").addEventListener("click", lookUp);//select button and add event listerners
function lookUp() {
  const rawTxt = firstArea.value;
  const eData = rawTxt.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
  const holder = [];
  for (let x = 0; x < eData.length; x++) {//loop through the email address
    if (holder.indexOf(eData[x]) == -1) {
      holder.push(eData[x]);
    }
  }
  secArea.value = holder.join(",");//use join method join the results found within the content and output it into the second textarea
}
