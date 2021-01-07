// 'use strict';
// const headerParent = document.querySelector('.text-part-header');

// const getMarvel = async function () {
//   try {
//     const response = await fetch(
//       'http://gateway.marvel.com/v1/public/characters?name=Spider-Man&ts=1&apikey=ad3a9015df220cd29480c245eff0a9de&hash=13e1ecb06b3ac00f45e9f3616e17942f'
//     );
//     if (!response.ok)
//       throw new Error(`${response.status} ${response.statusText}`);

//     const data = await response.json();
//     const spiderData = data.data.results[0];
//     const markup = `<p>
//     ${spiderData.description}
//     </p>
//     <h1 class="header-hero_name">${spiderData.name}</h1>`;

//     headerParent.insertAdjacentHTML('afterbegin', markup);
//   } catch (err) {
//     console.error(err);
//   }
// };

// getMarvel();
// ad3a9015df220cd29480c245eff0a9de
// 18070c18524b7728dcdc5b775eb967d4d94741ff8ad3a9015df220cd29480c245eff0a9de
//hash =13e1ecb06b3ac00f45e9f3616e17942f

{
  /* <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris.
</p>
<h1 class="header-hero_name">Hero-GUY</h1> */
}
