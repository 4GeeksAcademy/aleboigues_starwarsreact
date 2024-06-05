import Characters from "../views/Characters";
import StarShips from "../views/Starship";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Characters: [],
			Planets: [],
			StarShip: [],
			Fav: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://swapi.dev/api/people")
					.then((response) => response.json())
					.then((data) => setStore({ Characters: data.results }))

				fetch("https://swapi.dev/api/planets")
					.then((response) => response.json())
					.then((data) => setStore({ Planets: data.results }))

				fetch("https://swapi.dev/api/starships")
					.then((response) => response.json())
					.then((data) => setStore({ StarShip: data.results }))

			},


			favorito:(nombreFav)=>{

				const store = getStore();
				if(store.Fav.includes(nombreFav)){
					setStore({Fav:store.Fav.filter((rep)=>rep!=nombreFav)});
				} else {
					setStore({Fav:[...store.Fav,nombreFav]})
				}
			},

			colorBoton: name => {
				const store = getStore();
				return store.Fav.includes(name);
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
