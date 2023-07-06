import React from 'react'
import Github from "../../assets/github-black-logo.png"
import Linkedin from '../../assets/linkedin-black-logo.png'
import Email from "../../assets/email-black-logo.png"
import SoundOn from '../../assets/sound-image.png'
import SoundOff from '../../assets/sound-off-image.png'
import Wrench from '../../assets/wrench-image.png'
import { useState } from 'react'
import GameComponent from './Game/index.js'
import { Display, Game, Mid, Row, Settings, StyledInput } from './style'

const HomeComponent = () => {

const [isPlaying, setIsPlaying] = useState(false)
const [showSetting, setShowSetting] = useState(false)
const [sound, setSound] = useState(true)
const [showSound, setShowSound] = useState(true)
const [volume, setVolume] = useState(50);
const [showGame, setShowGame] = useState(false);
//FLAG STATES 
const [flagCount, setFlagCount] = useState(20);
const [flagCountCorrect, setFlagCountCorrect] = useState(0);
const [flagOptions, setFlagOptions] = useState([
  { id: 1, flag: 'flag1.png', correct: false },
  { id: 2, flag: 'flag2.png', correct: false },
]);

const handleShowGame = () => {
  if(isPlaying===true){
    showGame(true)
  }
}

const handleChange = (event) => {
  setFlagCount(event.target.value);
};

const handleClick = () => {
    setIsPlaying(!isPlaying);
}

const handleHiddenSound = () => {
  setShowSetting(!showSetting);
  setShowSound(false);
}
const handleShowSound = () => {
  setShowSetting(!showSetting);
  setShowSound(true);
}

const handleSoundToggle = () => {
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach(audio => {
    audio.pause();
  });

  setSound(!sound);
};

const goToLinkedin = () => {
  <a href='linkedin.com/in/artur-soares-a5717b262' target={'_blank'} ></a>
}

  return (
    <Display>
      <Row className='header'>

        {showSetting ?    
        
        <Settings >
            <p 
            className='close'
            onClick={handleShowSound}>X</p>
            <p className='contact'>Contato</p>
          <Mid className='sound'>
            <p>Obrigado por jogar :)</p>
            <p>Este projeto foi desenvolvido para fins didáticos e de aperfeiçoamento profissional por Artur.</p>
          </Mid>
          <Mid className='flagCount'>
          <a href='https://github.com/Artur-soares' target='_blank' ><img  src={Github} alt="github logo"/></a>
          <a href='https://criarmeulink.com.br/u/1688575125' target='_blank' ><img src={Email} alt="email logo"/></a>
          <a href='https://www.linkedin.com/in/artur-soares-a5717b262' target='_blank' ><img src={Linkedin} alt="linkedin logo"/></a>
          </Mid>
        </Settings> :
       
        <img 
        className='config'
        onClick={handleHiddenSound} 
        src={Wrench} 
        alt='wrench image'/>
        }
        
      </Row>

      <Mid>
        {isPlaying ? 
        <GameComponent flagCount={flagCount}>

        </GameComponent> : 
        <button className='play' onClick={handleClick}>Jogar</button>}
      </Mid>
      <Row className='footer'>
      <a href='https://github.com/Artur-soares' target='_blank' >
        <img  src={Github} alt="github logo"/>
      </a>
        <a href='https://criarmeulink.com.br/u/1688575125' target='_blank' >
        <img src={Email} alt="email logo"/>
        </a>
        <a href='https://www.linkedin.com/in/artur-soares-a5717b262' target='_blank' >
          <img src={Linkedin} alt="linkedin logo"/>
        </a>
      </Row>
    </Display>
  )
}

export default HomeComponent