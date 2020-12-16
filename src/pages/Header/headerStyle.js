import styled from "styled-components"

export const Head = styled.header`
    width: 100vw; 
    height: 4.3rem;
    padding: 1.2rem 1.5rem;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid #c1c1c1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const Container = styled.div`
    padding: 0 0.6rem;
    display: flex;
    align-items: center;
`
export const Image = styled.img`
    width: 7rem;
    
    margin-left: 1.4rem;
`

export const Button = styled.button`
    width: 10rem;
    height: 2.9rem;
    background: #FE2C55;
    color: #fff;
    border: none;
    margin-left: 1.4rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
`