# PokedexLiteApp
**QUICK SUMMARY OF THE STRUCTURE OF MY PROJECT AND THE TOOLS USED**
- Reusable components (like main or header).
- Routing for all the app + lazyloading.
- Based on modularization.
- Services
- Interfaces
- Directives such as *ngIf (try to eliminate all the pokemons).
- Enviroment variables (baseURL).
- Modules and components organized separatly, ordered alphabetic.
- In my opinion, some .sccs doesn't deserve a all file, so i keep 'em as inline styles.
- Angular Material (it's not the one i handle best, but i find it interesting so I took the opportunity to practice).
- SweetAlert2 (There are custom alert all over the app, being my fav the one you got by pressing "Atrápalos ya!" in the register page)

**FUNCTIONS**
- If no user has logged in, the application navigates to the login page (it has a minor validation if u don't input the correct user and pass).
- A logged in user can log out from the app.
- The application is able to list all the Pokemons (name, type and a image of his evolution). First, i tried to use GlobalDatabase but since the service doesn't work, i used PokeAPI plus a static CRUD with data made by my own.
- The application is able to list the 2 most important aspects of a Pokemon: “Abilities” and “Evolutions”. By clicking in a specific pokemon a card will appear with his current evolution and two abilities (ability1 and ability2).
- Since, as i said, PokeApi doesn't provide anything else than a GET petition, i made a CRUD where you cand create, edit or delete a pokemon.

**CONCLUSION** 
- I sincerely enjoyed coding this app to the point that i started to like Pokemon. I don't know, maybe after this i'll watch the anime.
