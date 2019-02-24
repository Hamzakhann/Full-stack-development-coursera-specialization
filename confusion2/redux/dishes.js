import * as ActionTypes from './ActionTypes';

export const dishes = (state = { isLoading: true,
                                 errMess: null,
                                 dishes:[
                                     {
                                        category: "mains",
                                        description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
                                        featured: true,
                                        id: 0,
                                        image: "images/uthappizza.png",
                                        label: "Hot",
                                        name: "Uthappizza",
                                        price: "4.99"
                                     },
                                     {
                                        category: "mains",
                                        description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
                                        featured: true,
                                        id: 0,
                                        image: "images/uthappizza.png",
                                        label: "Hot",
                                        name: "Uthappizza",
                                        price: "4.99"
                                     },
                                     {
                                        category: "mains",
                                        description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
                                        featured: true,
                                        id: 0,
                                        image: "images/uthappizza.png",
                                        label: "Hot",
                                        name: "Uthappizza",
                                        price: "4.99"
                                     }
                                 ]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};