import React, { useState } from 'react';
import { Container, Calc , Buttons, Input, StyledButtons } from './style';
import CustomNumberInput from './style';



function App() {

  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <Container>
      <Calc>
        <CustomNumberInput value={value} onChange={handleChange} />
        <Buttons>
          {/* Numbers */}
          <StyledButtons>
            <button>ON/CE</button>
            <button></button>
            <button></button>
            <button></button>
          </StyledButtons>
          <StyledButtons>
            <button>off</button>
            <button>&radic;</button>
            <button>&#37;</button>
            <button>&divide;</button>
          </StyledButtons>
          <StyledButtons>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>&times;</button>
          </StyledButtons>
          <StyledButtons>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>&minus;</button>
          </StyledButtons>
          <StyledButtons>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>&#43;</button>
          </StyledButtons>
          <StyledButtons>
            <button>0</button>
            <button>.</button>
            <button>=</button>
            <button>&#43;</button>
          </StyledButtons>
        </Buttons>
        
      </Calc>
    </Container>
  );
}

export default App;
