import React from 'react';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import {Container, Sidebar, Main} from "./styles";
import { getLangsFrom } from '../../services/api';

export default function RepositoriesPage() {
    const user = {
        login: 'Sussego',
        name: 'Eduardo Petenasi',
        avatar_url: "https://avatars.githubusercontent.com/u/51163873?v=4",
        followers: 10,
        following: 14,
        company: null,
        blog: "https://github.com/Sussego/Github-API",
        location: 'Bandeirantes',
    };

    const repositories = [
        { 
            name: 'Repo 1',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'Javascript'
        },

        {
            name: 'Repo 2',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'Javascript'
        },

        {
            name: 'Repo 3',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'PHP'
        },

        {
            name: 'Repo 4',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'Ruby'
        },

        {
            name: 'Repo 5',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'Java'
        },

        {
            name: 'Repo 6',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'TypeScript'
        },
    ];

    const languages = getLangsFrom(repositories);

    return(
        <Container>
            <Sidebar>
                <Profile user={user}/>
                <Filter languages={languages}/>
            </Sidebar>
            <Main>
                <Repositories/>
            </Main>
        </Container>
    );
}
