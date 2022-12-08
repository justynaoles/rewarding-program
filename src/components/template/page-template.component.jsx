import React from 'react';
import './page-template.styles.scss';

function PageTemplate(props){
    return (
        <div className="page">
            <div className="page__content">
                {props.children}
            </div>
        </div>
    )
};

export default PageTemplate;