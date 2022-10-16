// import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice.js';
import { selectFilter } from 'redux/selectors.js';

import { FilterField, FilterData } from './Filter.styled.js';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleChange = e => {
        const { value } = e.target;
        return dispatch(setFilter(value));
    };

    return (
        <>
            <FilterField>
                Find contacts by name
                <FilterData
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={handleChange}
                />
            </FilterField>
        </>
    )
};

export default Filter; 