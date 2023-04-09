// Задача со звездочкой: вернуть строку очищенную от всех тегов
function deleteTags(str) {
  return str.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, "");
}

console.log(deleteTags("<p>Hello, <b>world!</b></p>"));
// Output: "Hello, world!"
