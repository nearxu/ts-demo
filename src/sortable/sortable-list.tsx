import React from 'react';
import Sortable from 'react-sortablejs';

type Props = {
    items:number[];
    onChange:(order:any) => void;
}

const SortableList:React.FC<Props> = props => {
    const {items ,onChange} = props;
    const listItems = items.map((val:number,index:number) => (<li key={`${val}-${index}`}>list item: {val} - {index}</li>))
    return (
        <div>
            <Sortable
                tag='ul'
                onChange = {(order) => onChange(order)}
            >
                {listItems}
            </Sortable>
        </div>
    )
}

export default  SortableList;