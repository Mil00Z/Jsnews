/**
 * Gère l'affichage et les interactions de la page d'accueil
 */
const currentPage = 'home';

if (document.body.classList.contains(`${currentPage}`)) {
    console.log(`Is Page => '${currentPage}'`);
}