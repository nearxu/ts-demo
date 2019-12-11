import React from 'react';
import SortableList from './sortable-list';


export default class SortAble extends React.Component {
    state = {
        items:[1,2,3,4,5]
    }
    render(){
        return (
            <SortableList 
                items={this.state.items} 
                onChange={(items:number[]) => {this.setState({items})}}
            >

            </SortableList>
        )
    }
}