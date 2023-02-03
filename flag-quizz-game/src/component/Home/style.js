import styled from "styled-components";

export const Display = styled.div`
background-color:#75e7dc;
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

.config{
    position:fixed;
    top:40px;
    right:40px;
}
.sound{
    position:fixed;
    top:40px;
    right:90px;
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
    top:40px;
    right:90px;
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
    z-index:1;
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
        top:30%;
        left:28%;
    }

    .contact{
        position:absolute;
        top:20px;
        font-size:30px;
    }
    
    .flagCount{
        position:absolute;
        bottom:20px;
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