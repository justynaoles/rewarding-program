import React from 'react';
import PageTemplate from '../components/template/page-template.component';
import Header from '../components/header/header.component';
import Heading from '../components/heading/heading.component';
import ListItem from '../components/list-item/list-item.component';
import Spinner from '../components/spinner/spinner.component';
import {useSpinner} from '../utils/utils.js';

const Homepage = () => {
    const isLoading = useSpinner();

    return (
        <PageTemplate>
            <Header><Heading tag="h1" text="Welcome to rewarding program" extraClass="text-center"/></Header>
            {
                isLoading ? <Spinner /> : <ListItem/>
            }
        </PageTemplate>
    )
};

export default Homepage;