const li = document.getElementsByTagName("li");
console.log(li);
const li2 = document.getElementsByClassName("li2");
console.log(li2);
const li3 = document.querySelectorAll(".li2");
console.log(li3);

li3.forEach((e) => console.log(e.innerHTML));
for (const x of li) {
  console.log(x.innerHTML);
}
for (const x of li3) {
  console.log(x.innerHTML);
}
