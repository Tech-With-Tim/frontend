import styled from "styled-components";

export const HomeContainer = styled.div`
    margin: 0 5%;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    margin-top: 75px;

    align-items: center;
    justify-content: space-between;
`;

export const HomeImageContainer = styled.div`
    flex: 1;
    min-width: fit-content;
    text-align: center;
`;

export const HomeImage = styled.img`
    max-width: 600px;
    min-width: 300px;
    width: 100%;
`;

export const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-transform: uppercase;

    min-width: fit-content;
    word-wrap: none;

    h5{
        font-size: 1.25rem;
        letter-spacing: 5px;
    }

    h1{
        color: #F39200;
        letter-spacing: 3px;
        font-size: 2.75rem;
    }

    h4{
        color: #E94E1B;
        letter-spacing: 2px;
    }
`;

export const InfoButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -15px;
`;

export const InfoButton = styled.a`
    display: flex;
    align-items: center;
    padding: 5px 10px;

    cursor: pointer;

    min-width: fit-content;
    outline: none;

    img{
        padding: 0;
        margin: 0;
        width: 50px;
    }

    span{
        color: white;
        letter-spacing: 1px;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 600;
        margin-left: 5px;
    }
`;
