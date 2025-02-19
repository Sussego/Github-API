import React, { useState} from 'react';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import {Container, Sidebar, Main} from "./styles";
import { getLangsFrom } from '../../services/api';

export default function RepositoriesPage() {
    const[currentLanguage, setCurrentLanguage] = useState();

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
            id:1,
            name: 'Repo 1',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'Javascript'
        },

        {
            id:2,
            name: 'Repo 2',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'Javascript'
        },

        {
            id:3,
            name: 'Repo 3',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'PHP'
        },

        {
            id:4,
            name: 'Repo 4',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'Ruby'
        },

        {
            id:5,
            name: 'Repo 5',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'Java'
        },

        {
            id:6,
            name: 'Repo 6',
            description: 'Description',
            html_url: 'https://github.com/Sussego/Github-API',
            language: 'TypeScript'
        },
    ];

    const languages = getLangsFrom(repositories);

    const onFilterClick = (language) => {
        setCurrentLanguage(language);
    }

    return(
        <Container>
            <Sidebar>
                <Profile user={user}/>
                <Filter
                    languages={languages}
                    currentLanguage={currentLanguage}
                    onClick={onFilterClick}
                />
            </Sidebar>
            <Main>
                <Repositories 
                    repositories={repositories}
                    currentLanguage={currentLanguage}
                />
            </Main>
        </Container>
    );
}
