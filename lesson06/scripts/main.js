const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const getChapterList = () => {
    return JSON.parse(localStorage.getItem('myFavoriteChapters'));
};
let chaptersArray = getChapterList() || [];
const displayList = (chapter) => {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = chapter;
    deleteButton.textContent = "✖️";
    li.appendChild(deleteButton);
    list.appendChild(li);
    deleteButton.addEventListener("click", e => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
};
chaptersArray.forEach(chapter => {
    displayList(chapter);
});


const setChapterList = () => {
    localStorage.setItem('myFavoriteChapters', JSON.stringify(chaptersArray));
};

const deleteChapter = (chapter) => {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
};
button.addEventListener("click", e => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
    else {
        alert("You need to write something!!!");
        input.focus();
    }
});
input.focus();