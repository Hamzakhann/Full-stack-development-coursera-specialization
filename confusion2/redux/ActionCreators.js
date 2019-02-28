import * as ActionTypes from'./ActionTypes';
import { baseUrl  } from '../shared/baseUrl';
import axios from 'axios';

export const fetchComments = () => (dispatch) => {
        return fetch(baseUrl + 'comments')
                .then(response => {
                        if (response.ok) {
                                return response;
                        }
                        else {
                                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                                error.response = response;
                                throw error;
                        }
                },
                        error => {
                                var errmess = new Error(error.message)
                                throw errmess;
                        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = (errmess) => ({
        type: ActionTypes.COMMENTS_FAILED,
        payload: errmess
});

export const addComments = (comments) => ({
        type: ActionTypes.ADD_COMMENTS,
        payload: comments
})


export const fetchDishes = () => (dispatch) => {
        const dishes = [
                {
                  "id": 0,
                  "name": "Uthappizza",
                  "image": "images/uthappizza.png",
                  "category": "mains",
                  "label": "Hot",
                  "price": "4.99",
                  "featured": true,
                  "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
                },
                {
                  "id": 1,
                  "name": "Zucchipakoda",
                  "image": "images/zucchipakoda.png",
                  "category": "appetizer",
                  "label": "",
                  "price": "1.99",
                  "featured": false,
                  "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
                },
                {
                  "id": 2,
                  "name": "Vadonut",
                  "image": "images/vadonut.png",
                  "category": "appetizer",
                  "label": "New",
                  "price": "1.99",
                  "featured": false,
                  "description": "A quintessential ConFusion experience, is it a vada or is it a donut?"
                },
                {
                  "id": 3,
                  "name": "ElaiCheese Cake",
                  "image": "images/elaicheesecake.png",
                  "category": "dessert",
                  "label": "",
                  "price": "2.99",
                  "featured": false,
                  "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
                }
              ]
        dispatch(dishesLoading());
        setTimeout(() =>{
                dispatch(addDishes(dishes))
        }, 2000)
        // return fetch(baseUrl + 'dishes')
        //         .then(response => {
        //                 if (response.ok) {
        //                         return response;
        //                 }
        //                 else {
        //                         var error = new Error('Error ' + response.status + ': ' + response.statusText)
        //                         error.response = response;
        //                         throw error;
        //                 }
        //         },
        //                 error => {
        //                         var errmess = new Error(error.message)
        //                         throw errmess;
        //                 })
        // .then(response => response.json())
        // .then(() => dispatch(addDishes(dishes)))
        // .catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () => ({
        type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
        type: ActionTypes.DISHES_FAILED,
        payload: errmess
});

export const addDishes = (dishes) => ({
        type: ActionTypes.ADD_DISHES,
        payload: dishes
})




export const fetchPromos = () => (dispatch) => {
        dispatch(promosLoading());
        return fetch(baseUrl + 'promotions')
                .then(response => {
                        if (response.ok) {
                                return response;
                        }
                        else {
                                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                                error.response = response;
                                throw error;
                        }
                },
                        error => {
                                var errmess = new Error(error.message)
                                throw errmess;
                        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
        type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
        type: ActionTypes.PROMOS_FAILED,
        payload: errmess
});

export const addPromos = (promos) => ({
        type: ActionTypes.ADD_PROMOS,
        payload: promos
})


export const fetchLeaders = () => (dispatch) => {
        dispatch(leadersLoading());
        return fetch(baseUrl + 'leaders')
                .then(response => {
                        if (response.ok) {
                                return response;
                        }
                        else {
                                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                                error.response = response;
                                throw error;
                        }
                },
                        error => {
                                var errmess = new Error(error.message)
                                throw errmess;
                        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const leadersLoading = () => ({
        type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
        type: ActionTypes.LEADERS_FAILED,
        payload: errmess
});

export const addLeaders = (leaders) => ({
        type: ActionTypes.ADD_LEADERS,
        payload: leaders
})


export const postFavorite = (dishId) => (dispatch) => {
        setTimeout(() => {
                dispatch(addFavorite(dishId));
}, 2000);
}

export const addFavorite = (dishId) => ({
    type: ActionTypes.ADD_FAVORITE,
        payload: dishId
})

export const postComment = (dish_number, rating, author, comment_string) => (dispatch) => {
        var today = new Date();
        var date_string = today.toISOString();
        var comment = {
                id: 1234,
                dishId: dish_number,
                rating: rating,
                date: date_string,
                author: author,
                comment: comment_string
        }
        setTimeout(() => {
                dispatch(addComment(comment));
}, 2000);
}

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
        payload: comment
})


export const deleteFavorite = (dishId) => ({
        type: ActionTypes.DELETE_FAVORITE,
        payload: dishId
    });  