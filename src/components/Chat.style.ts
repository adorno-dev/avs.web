import styled from "styled-components"

export const Window = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;


    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    justify-self: center;

    width: 550px;
    height: 350px;
    background: #f9f9f9;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    box-shadow: 0 0 25px rgba(0,0,0,.2);
`

export const Titlebar = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    background: #000;
    color: #fff;
    padding: 10px 20px;
    border-bottom: 1px solid black;

    display: flex;
    justify-content: space-between;
`

export const Body = styled.div`
    background: #fff;
    height: 100vh;
`

export const Footer = styled.div`
    display: flex;
    input {
        width: 100%;
        padding: 10px 20px;
    }

    button {
        margin-left: 5px;
        padding: 10px 20px;
    }
`