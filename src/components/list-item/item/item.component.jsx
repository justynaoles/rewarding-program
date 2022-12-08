import React from "react";
import "./item.styles.scss";

const Item = ({...props}) => {

    const {name, lastname, total, transactions, avatar} = props;

    return (
        <li className="list-item__item">
            <img src={avatar} className="profile-avatar" alt={name} />
            <div className="item-profile">
                <p className="profile-data"><span className="user">{name} {lastname}</span></p>
                <p className="profile-total">{total} pts</p>
                <div className="profile-detail">
                {
                    transactions.map((item, index) => ( 
                    <p key={item.monthId+index+item.total} className="sumup">
                        <span>{item.month}: </span>
                        <span className="bold">{item.total} pts</span>
                    </p>
                    ))
                }
                </div>
            </div>
        </li>
    )
}

export default Item;