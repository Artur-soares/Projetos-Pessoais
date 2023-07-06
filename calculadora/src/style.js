import styled  from "styled-components";

export const Container = styled.div`
display:flex;
background-color:grey;
align-items:center;
justify-content:center;
width:100vw;
height: 100vh;
`
export const Calc = styled.div`
display:flex;
flex-direction:column;
width:45%;
height:70%;

/* Color */
background:black;
`

export const Buttons = styled.div`
display:grid;

`
export const StyledNumberInput = styled.input.attrs({
    type: 'number',
})`
appearance:none;
align-self:center;
height:50px;
width:99%;
border-radius:10px;
`
export const CustomNumberInput = ({ value, onChange }) => {
    return (
      <StyledNumberInput value={value} onChange={onChange} />
    );
  };

export const StyledButtons = styled.div`
display:flex;
flex-direction:row;

`