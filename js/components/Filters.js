import React, { Component } from 'react';
import {
    View
} from 'react-native';
import FilterLink from '../containers/FilterLink';
import { visibilityFilters } from '../global';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = visibilityFilters;

class Filters extends Comment {
    render (
        return (
            <View style={{ flexDirection:'row', marginTop:20}}>
                <FilterLink filter={SHOW_ALL} />
                <FilterLink filter={SHOW_COMPLETE} />
                <FilterLink filter={SHOW_ACTIVE} />
            </View>
        );
    )
}

export default Filters;