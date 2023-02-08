import styled from 'styled-components';

export const Game = styled.div`
img{
        width:400px;
        /* padding-bottom:200px; */
    }
    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:1;
    top:50%;
    left:50%;
    height:100%;
    width:600px;
    transform:translate(-50%,-50%);
    gap:20px;
    button{
        width:300px;
        height:40px;
        font-size:30px;
        font-family:'Vanilla Caramel';
        background-color:#3acfb8;
        border:none;
        border-radius:100px;
        word-wrap:break-word;
    }
    
`