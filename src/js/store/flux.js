const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: []
		},
		actions: {
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }));

				fetch("https://www.swapi.tech/api/starships")
					.then(res => res.json())
					.then(data => setStore({ starships: data.results }));

				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
			}
		}
		/**  Use getActions to call a function within a fuction
        exampleFunction: () => {
            getActions().changeColor(0, "green");*/

		/**
            fetch().then().then(data => setStore({ "foo": data.bar }))
        */

		/** changeColor: (index, color) => {
             //get the store
             const store = getStore();
 
             //we have to loop the entire demo array to look for the respective index
             //and change its color
             const demo = store.demo.map((elm, i) => {
                 if (i === index) elm.background = color;
                 return elm;
             });
 
             //reset the global store
             setStore({ demo: demo });*/
	};
};

export default getState;
