import styled from "styled-components"

export const ContactList = styled.div`
    display: flex;
    flex-direction: column;
    background: lightgray;
    width: 300px;
    bottom: 0;
    height: calc(100vh - 65px);
    position: absolute;
    right: 0;
    border-top-left-radius: 10px;
    box-shadow: 0 0 25px rgba(0,0,0,.2);

    div {
        overflow: auto;
        display: flex;
        flex-direction: column;
    }

    h3 {
        border-top-left-radius: 10px;
        background: #000;
        color: #fff;
        padding: 10px 20px;
        border-bottom: 1px solid black;
    }

    a {
        padding: 10px 20px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
`

export const ContactListItem = styled.span`
    padding: 10px 20px;
    display: inline-block;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    cursor: pointer;
    &:hover {
        background: rgba(0,0,0,0.2);
    }
`