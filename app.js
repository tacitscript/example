import ts from "tacitscript";

const double = /*ts 2* */ // inline ts expression
/*ts
  half  /2    multiline ts block
*/

document.getElementById("input").addEventListener("input", e => {
  const value = +e.target.value;

  document.getElementById("double").innerText = double(value);
  document.getElementById("half").innerText = half(value);
});
document.getElementById("app").classList.remove("hidden");