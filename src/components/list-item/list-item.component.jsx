import React from "react";
import './list-item.styles.scss';
import Item from './item/item.component';
import AppContext from "../../context";

const ListItem = ({...props}) => {

    const {extraClass} = props;

    return (
        <AppContext.Consumer>
            {(context) => (
                context.length ?
                <ul className={extraClass ? extraClass + " list-item" : "list-item"}>
                    {
                        context.map((item, index) => {
                        return  <Item key={index} name={item.name} lastname={item.lastname} total={item.total} transactions={item.transactions} avatar={item.avatar}/>
                        })
                    }
                </ul> : <p className="text-center">No users to display...</p>
            )}
        </AppContext.Consumer>
    )
}

export default ListItem;