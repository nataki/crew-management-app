//@flow
import React from 'react';

type Props = {
    id: string,
    label: string,
    value: string,
    onChange: () => {}
}
const FilterField = ({id, label, value, onChange}: Props) => (
    <div className='filter_field'>
        <label htmlFor={id}>
            {label}
:
            {' '}
        </label>
        <input type="text" id={id} name={id} onChange={onChange} value={value} />
    </div>
);

export default FilterField;