let navListElts = document.querySelectorAll('.nav-list-links');

let burgerToggleElt = document.querySelector('#burger-toggle');
console.log(burgerToggleElt);

for (let navListElt of navListElts) {
    navListElt.addEventListener('click', () => {
        burgerToggleElt.click();
    });
}