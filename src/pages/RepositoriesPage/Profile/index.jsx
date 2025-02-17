import React from "react";
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import {Container, Header, Avatar, Login, Name, Inner, Data } from './styles'

function Profile (){
    return(
        <Container>
            <Header>
                <Avatar src="https://avatars.githubusercontent.com/u/51163873?v=4"/>
                <Login>Nickname</Login>
                <Name>User Name</Name>
            </Header>
            <Inner>
                <Data>
                    <MdGroup size={20}/>
                    10&nbsp;<i>followers</i>&nbsp;&middot;&nbsp;14&nbsp;<i>Following</i>
                </Data>
                <Data>
                    <MdWork size={20}/>
                    Interprise
                    </Data>
                <Data>
                    <MdLocationCity size={20}/>
                    City
                </Data>
                <Data>
                    <MdLink size={20}/>
                    <a href ="https://github.com/Sussego">External Link</a>
                </Data>
            </Inner>
        </Container>
    );
}

export default Profile;