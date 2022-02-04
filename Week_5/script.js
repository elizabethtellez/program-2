const list = document.getElementById("list");
const addChapter = document.getElementById("submit");

addChapter.addEventListener("click", function () {
  let chapter = document.querySelector("#input");

  const book_chapter = document.createElement("div");
  const del = document.createElement("button");
  const content = document.createElement("div");

  content.classList.add("content");
  list.appendChild(content);

  book_chapter.classList.add("object");
  book_chapter.innerHTML = chapter.value;
  content.appendChild(book_chapter);

  del.setAttribute("id", "delete");
  del.classList.add(num);
  del.innerHTML = "❌";
  content.appendChild(del);
});

/*const removeChapter = document.getElementById("delete");

removeChapter.addEventListener("click", () {
    const
});*/
