
const mt100mLangs = fetch("https://api.github.com/repos/alvissraghnall/mytop100movies/languages")
.then(res => res.json())
.catch(err => console.error(err));

window.addEventListener("DOMContentLoaded", async function(ev) {
    console.log(await mt100mLangs);
    console.log("xy");
})

func

for(let i = 0; i < mt100mLangs.length; i++) {
    const mt100m = document.createElement("a");
    mt100m.classList.add(["inline-flex text-white items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-600 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"]);
    mt100m.textContent = await mt100mLangs[i];
}
document.getElementById("mt100m").appendChild("a");
