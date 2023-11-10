const baseURL = "https://jarom27.github.io/wdd230/";
const linksURL = "https://jarom27.github.io/wdd230/data/links.json";
const links = document.getElementById("links");
const getLinks = async () => {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.lessons);
}
const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        console.log(week);
        let weekLinks = document.createElement("li");
        let sentence = `Week ${week.lesson}: `;
        week.links.forEach((link, index) => {

            if (index + 1 == week.links.length) {
                sentence += `<a href=${link.url}>${link.title}</a>`;
            } else {
                sentence += `<a href=${link.url}>${link.title}</a> | `;
            }
        });
        weekLinks.innerHTML = sentence
        links.appendChild(weekLinks);
    });
}
getLinks();