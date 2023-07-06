import styled from "styled-components";
import backgroundImage from "../../assets/fundo.png"

export const Display = styled.div`
background-image: url(${backgroundImage});
background-size: cover;
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

.play{
    display:flex;
    background-color:#57dbca;
    width:350px;
    height:90px;
    font-size:70px;
    border-radius:100px ;
    box-shadow:2px 3px black;
    font-family:"Vanilla Caramel";
    align-items:center;
    justify-content:center;

    &:hover{
        background-color:#3acfb8;
    }
}

.config{
    position:fixed;
    top:24px;
    right:40px;
    width:48px;
    border-radius:10px;
}
.sound{
    position:fixed;
    top:20px;
    right:110px;
    border-radius:10px;
    height:60px;
    width:60px;
}
    

/* FONTE */
font-family:"Vanilla Caramel";
font-weight:800;
font-size:80px;

img{
    width:30px;
}

.footer{
        position:fixed;
        bottom:20px;
        gap:10px;
}

.visible{
    position:fixed;
    top:20px;
    right:110px;
    height:60px;
    width:60px;
    border-radius:10px;
    img{
        width:30px;
    }
}
.invisible{
    visibility:hidden;
}

*{
    margin:0;
    padding:0;
}
`
export const Mid = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const Row = styled.div`
display:flex;
`
export const Settings = styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#3acfb8;
    z-index:2;
    top:50%;
    left:50%;
    border-radius:10px;
    border:5px black dashed;
    height:500px;
    width:400px;
    transform:translate(-50%,-50%);

    /* INPUT */
    

    /* FONT */
    font-size:40px;
   

    .sound{
        position:absolute;
        background-color:#3acfb8;    
        top:25%;
        right:0px;
        width:100%;
        font-size:35px;
    }

    .contact{
        display:flex;
        flex-direction:center;
        position:absolute;
        gap:5px;
        top:20px;
        font-size:25px;
    }
    
    .flagCount{
        display:flex;
        flex-direction:row;
        position:absolute;
        bottom:20px;
    img{
        width:100px;
    }
    }

    .close{
        position:absolute;
        right:15px;
        top:1px;
        font-size:60px;
        font-weight:900;
    }
`
export const StyledInput = styled.input`
    padding:0;
    input[type="checkbox"]{
        width: 20px;
        height: 20px;
    }
`

export const Game = styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#3acfb8;
    z-index:1;
    top:50%;
    left:50%;
    border-radius:10px;
    border:5px black dashed;
    height:100%;
    width:600px;
    transform:translate(-50%,-50%);

`