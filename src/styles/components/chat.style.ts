import styled from "styled-components"

export const Window = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;

    left: calc((100vw / 2) - 275px);
    top: calc((100vh / 2) - 175px);

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
    overflow-y: auto;
`

export const MessageReceived = styled.div` 
    margin: 10px;
    padding: 10px;
    border-radius: 10px;

    background: #dcdcdc;
    color: #000;
`

export const MessageSent = styled.div` 
    margin: 10px;
    padding: 10px;
    border-radius: 10px;

    background: #444;
    color: #fff;
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

    form {
        display: flex;
        width: 100%;
        input {
            flex-grow: 1;
            margin: 10px;
            border: none;
            outline: none;
            border-radius: 15px;
            font-size: 1em;
        }
        button {
            margin: 10px;
            padding: 10px 30px;
            font-size: 1em;
            border-radius: 20px;
            border: none;
            background: #444;
            color: #fff;
        }
    }
`