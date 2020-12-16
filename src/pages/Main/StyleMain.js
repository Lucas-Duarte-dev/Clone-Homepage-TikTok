import styled from 'styled-components';

export const Content = styled.main`
    padding-top: 4rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.4rem 0 0 0;
`;
export const Text = styled.h1`
    font-size: 5rem;
`;

export const SubTitle = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
`;

export const Button = styled.button`
width: 15.5rem;
height: 2.9rem;
margin: 1.8rem 0;
background: #FE2C55;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
border: none;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
text-align: center;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Image = styled.div`
    width: 28rem;
    height: 43rem;

    &:nth-child(1) {
        background: #190E4F;
    }
    &:nth-child(2) {
       background: #B33C86;
    }
    &:nth-child(3) {
        background: #E980FC;
    }
    &:nth-child(4) {
        background: #8377D1;
    }
    &:nth-child(5) {
        background: #5EFC8D;
    }

`