import styled from "styled-components";
import { View } from 'react-native';
import React from "react";
import { Constants } from "expo-constants";


export const Colors = {
    primary: "#ffffff",
    tertiary: "#000000",
    secondary: "#ffffff",
}

const { primary } = Colors;


export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    background-color: ${primary};
`

export const HeadContainer = styled.View`
    flex: 1;
    margin-top:20px;
`
export const TextContainer = styled.View`
    margin-top:30px;
`

export const OuterContainer = styled.View`
    align-items: center;
`

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
    margin-top: 30px;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    textAlign: center;
    font-weight: bold;
    padding: 10px;
    margin-top: 30px;
`