let last_modified_output = document.querySelector("#lastModified");
last_modified_output.innerHTML = `Last modification : ${document.lastModified}`;

let year = new Date().getFullYear();
let year_output = document.querySelector("#copyright");
year_output.innerHTML = `&copy; ${year}`;