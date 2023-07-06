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
    p{
        position: relative;
        top:150px;
        font-size:50px;
    }
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
export const GameOver = styled.div`
img{
        width:400px;
        /* padding-bottom:200px; */
    }
    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    background:#afffff;
    z-index:1;
    top:50%;
    left:50%;
    height:300px;
    border-radius:40px;
    width:600px;
    transform:translate(-50%,-50%);
    gap:20px;
    h5{

    }
    p{
        font-size:50px;
    }
    button{
        width:300px;
        height:40px;
        font-size:30px;
        font-family:'Vanilla Caramel';
        background-color:#92f3ed;
        border:none;
        border-radius:100px;
        word-wrap:break-word;
        border:black solid 3px;
    }
    button:hover{
        background-color:#57dbca;
    }
    
`