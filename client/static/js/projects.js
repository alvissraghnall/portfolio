
const mt100mLangs = fetch("https://api.github.com/repos/alvissraghnall/mytop100movies/languages")
.then(res => res.json())
.catch(err => console.error(err));

window.addEventListener("DOMContentLoaded", async function(ev) {
    console.log(await mt100mLangs);
    console.log("xy");
})

