import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from "./type";

let nextToDoId = 0;

export const addToDo = text => {
    type: 'ADD_TODO',
    id: nextToDoId++,
    text
}
export const setVibilityFilter = filter => {
    type: 'SET_VISIBILITY_FILTER',
    filter
};

export const toggleToDo = id => {
    type: 'TOOGLE_TODO',
    id
}