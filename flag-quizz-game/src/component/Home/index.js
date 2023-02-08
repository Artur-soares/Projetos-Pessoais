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

  return (
    <Display>
      <Row className='header'>

        { sound ? <img className={showSound ? "visible"  : "invisible"} 
        onClick={() => setSound(!sound)}
        src={SoundOn} 
        alt='sound on image'/> : 
        
        <img 
         className='sound'
        onClick={() => setSound(!sound)} 
        src={SoundOff} 
        alt='sound off image'/>}

        {showSetting ?    
        
        <Settings >
            <p 
            className='close'
            onClick={handleShowSound}>X</p>
            <p className='contact'>Contato</p>
          <Mid className='sound'>
            <label>Volume: {volume}%</label>
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={e => setVolume(e.target.value)}
            />
          </Mid>
          <Mid className='flagCount'>
            10 bandeiras
            <input
              className=''
              type="checkbox"
              value="10"
              checked={flagCount === "10"}
              onChange={handleChange}
            />
            20 bandeiras 
            <input
              className=''
              type="checkbox"
              value="20"
              checked={flagCount === "20"}
              onChange={handleChange}
            />
            50 bandeiras
            <input
              type="checkbox"
              value="50"
              checked={flagCount === "50"}
              onChange={handleChange}
            />
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
        <img  src={Github} alt="github logo"/>
        <img src={Email} alt="email logo"/>
        <img src={Linkedin} alt="linkedin logo"/>
      </Row>
    </Display>
  )
}

export default HomeComponent