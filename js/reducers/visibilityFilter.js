import { SET_VISIBILITY_FILTER } from '../actions/types';
import { visibilityFilters } from '../global';

const { SHOW_ALL } = visibilityFilters;

const visibilityFilters = (state=SHOW_ALL, action) => {
    let { type, filter } = action;
    switch( type ){
        case 'SET_VISIBILITY_FILTER':
            return {...state, { filter: filter }} ;
            //return filter;
        default:
        return state;

    }
}

export default visibilityFilters;