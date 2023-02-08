import React, {useState, useEffect} from "react"
import { Game } from "./style";
import Afghanistan from "../../../assets/flags/flag-of-Afghanistan.png";
import Albania from "../../../assets/flags/flag-of-Albania.png";
import Algeria from "../../../assets/flags/flag-of-Algeria.png";
import Andorra from "../../../assets/flags/flag-of-Andorra.png";
import Angola from "../../../assets/flags/flag-of-Angola.png";
import AntiguaAndBarbuda from "../../../assets/flags/flag-of-Antigua.png";
import Argentina from "../../../assets/flags/flag-of-Argentina.png";
import Armenia from "../../../assets/flags/flag-of-Armenia.png";
import Australia from "../../../assets/flags/flag-of-Australia.png";
import Austria from "../../../assets/flags/flag-of-Austria.png";
import Azerbaijan from "../../../assets/flags/flag-of-Azerbaijan.png";
import Bahamas from "../../../assets/flags/flag-of-Bahamas.png";
import Bahrain from "../../../assets/flags/flag-of-Bahrain.png";
import Bangladesh from "../../../assets/flags/flag-of-Bangladesh.png";
import Barbados from "../../../assets/flags/flag-of-Barbados.png";
import Belarus from "../../../assets/flags/flag-of-Belarus.png";
import Belgium from "../../../assets/flags/flag-of-Belgium.png";
import Belize from "../../../assets/flags/flag-of-Belize.png";
import Benin from "../../../assets/flags/flag-of-Benin.png";
import Bhutan from "../../../assets/flags/flag-of-Bhutan.png";
import Bolivia from "../../../assets/flags/flag-of-Bolivia.png";
import BosniaAndHerzegovina from "../../../assets/flags/flag-of-Bosnia-Herzegovina.png";
import Botswana from "../../../assets/flags/flag-of-Botswana.png";
import Brazil from "../../../assets/flags/flag-of-Brazil.png";
import Brunei from "../../../assets/flags/flag-of-Brunei.png";
import Bulgaria from "../../../assets/flags/flag-of-Bulgaria.png";
import BurkinaFaso from "../../../assets/flags/flag-of-Burkina-Faso.png";
import Burundi from "../../../assets/flags/flag-of-Burundi.png";
import CaboVerde from "../../../assets/flags/flag-of-Cabo-Verde.png";
import Cambodia from "../../../assets/flags/flag-of-Cambodia.png";
import Cameroon from "../../../assets/flags/flag-of-Cameroon.png";
import Canada from "../../../assets/flags/flag-of-Canada.png";
import CentralAfricanRepublic from "../../../assets/flags/flag-of-Central-African-Republic.png";
import Chad from "../../../assets/flags/flag-of-Chad.png";
import Chile from "../../../assets/flags/flag-of-Chile.png";
import China from "../../../assets/flags/flag-of-China.png";
import Colombia from "../../../assets/flags/flag-of-Colombia.png";
import Comoros from "../../../assets/flags/flag-of-Comoros.png";
import DemocraticRepublicOfTheCongo from "../../../assets/flags/flag-of-Congo-Democratic-Republic-of.png";
import Congo from "../../../assets/flags/flag-of-Congo.png";
import CostaRica from "../../../assets/flags/flag-of-Costa-Rica.png";
import CotedIvoire from "../../../assets/flags/flag-of-Cote-d-Ivoire.png";
import Croatia from "../../../assets/flags/flag-of-Croatia.png";
import Cuba from "../../../assets/flags/flag-of-Cuba.png";
import Cyprus from "../../../assets/flags/flag-of-Cyprus.png";
import CzechRepublic from "../../../assets/flags/flag-of-Czech-Republic.png";
import Denmark from "../../../assets/flags/flag-of-Denmark.png";
import Djibouti from "../../../assets/flags/flag-of-Djibouti.png";
import Dominica from "../../../assets/flags/flag-of-Dominica.png";
import DominicanRepublic from "../../../assets/flags/flag-of-Dominican-Republic.png";
// import EastTimor from "../../../assets/flags/flag-of-East-Timor.png";
import Ecuador from "../../../assets/flags/flag-of-Ecuador.png";
import Egypt from "../../../assets/flags/flag-of-Egypt.png";
import ElSalvador from "../../../assets/flags/flag-of-El-Salvador.png";
import EquatorialGuinea from "../../../assets/flags/flag-of-Equatorial-Guinea.png";
import Eritrea from "../../../assets/flags/flag-of-Eritrea.png";
import Estonia from "../../../assets/flags/flag-of-Estonia.png";
import Eswatini from "../../../assets/flags/flag-of-Eswatini.png";
import Ethiopia from "../../../assets/flags/flag-of-Ethiopia.png";
import Fiji from "../../../assets/flags/flag-of-Fiji.png";
import Finland from "../../../assets/flags/flag-of-Finland.png";
import France from "../../../assets/flags/flag-of-France.png";
import Gabon from "../../../assets/flags/flag-of-Gabon.png";
import Gambia from "../../../assets/flags/flag-of-Gambia.png";
import Georgia from "../../../assets/flags/flag-of-Georgia.png";
import Germany from "../../../assets/flags/flag-of-Germany.png";
import Ghana from "../../../assets/flags/flag-of-Ghana.png";
import Greece from "../../../assets/flags/flag-of-Greece.png";
import Grenada from "../../../assets/flags/flag-of-Grenada.png";
import Guatemala from "../../../assets/flags/flag-of-Guatemala.png";
import Guinea from "../../../assets/flags/flag-of-Guinea.png";
import GuineaBissau from "../../../assets/flags/flag-of-Guinea-Bissau.png";
import Guyana from "../../../assets/flags/flag-of-Guyana.png";
import Haiti from "../../../assets/flags/flag-of-Haiti.png";
import Honduras from "../../../assets/flags/flag-of-Honduras.png";
import Hungary from "../../../assets/flags/flag-of-Hungary.png";
import Iceland from "../../../assets/flags/flag-of-Iceland.png";
import India from "../../../assets/flags/flag-of-India.png";
import Indonesia from "../../../assets/flags/flag-of-Indonesia.png";
import Iran from "../../../assets/flags/flag-of-Iran.png";
import Iraq from "../../../assets/flags/flag-of-Iraq.png";
import Ireland from "../../../assets/flags/flag-of-Ireland.png";
import Israel from "../../../assets/flags/flag-of-Israel.png";
import Italy from "../../../assets/flags/flag-of-Italy.png";
import Jamaica from "../../../assets/flags/flag-of-Jamaica.png";
import Japan from "../../../assets/flags/flag-of-Japan.png";
import Jordan from "../../../assets/flags/flag-of-Jordan.png";
import Kazakhstan from "../../../assets/flags/flag-of-Kazakhstan.png";
import Kenya from "../../../assets/flags/flag-of-Kenya.png";
import Kiribati from "../../../assets/flags/flag-of-Kiribati.png";
import NorthKorea from "../../../assets/flags/flag-of-Korea-North.png";
import SouthKorea from "../../../assets/flags/flag-of-Korea-South.png";
import Kosovo from "../../../assets/flags/flag-of-Kosovo.png";
import Kuwait from "../../../assets/flags/flag-of-Kuwait.png";
import Kyrgyzstan from "../../../assets/flags/flag-of-Kyrgyzstan.png";
import Laos from "../../../assets/flags/flag-of-Laos.png";
import Latvia from "../../../assets/flags/flag-of-Latvia.png";
import Lebanon from "../../../assets/flags/flag-of-Lebanon.png";
import Lesotho from "../../../assets/flags/flag-of-Lesotho.png";
import Liberia from "../../../assets/flags/flag-of-Liberia.png";
import Libya from "../../../assets/flags/flag-of-Libya.png";
import Liechtenstein from "../../../assets/flags/flag-of-Liechtenstein.png";
import Lithuania from "../../../assets/flags/flag-of-Lithuania.png";
import Luxembourg from "../../../assets/flags/flag-of-Luxembourg.png";
import NorthMacedonia from "../../../assets/flags/flag-of-North-Macedonia.png";
import Madagascar from "../../../assets/flags/flag-of-Madagascar.png";
import Malawi from "../../../assets/flags/flag-of-Malawi.png";
import Malaysia from "../../../assets/flags/flag-of-Malaysia.png";
import Maldives from "../../../assets/flags/flag-of-Maldives.png";
import Mali from "../../../assets/flags/flag-of-Mali.png";
import Malta from "../../../assets/flags/flag-of-Malta.png";
import MarshallIslands from "../../../assets/flags/flag-of-Marshall-Islands.png";
import Mauritania from "../../../assets/flags/flag-of-Mauritania.png";
import Mauritius from "../../../assets/flags/flag-of-Mauritius.png";
import Mexico from "../../../assets/flags/flag-of-Mexico.png";
import Micronesia from "../../../assets/flags/flag-of-Micronesia.png";
import Moldova from "../../../assets/flags/flag-of-Moldova.png";
import Monaco from "../../../assets/flags/flag-of-Monaco.png";
import Mongolia from "../../../assets/flags/flag-of-Mongolia.png";
import Montenegro from "../../../assets/flags/flag-of-Montenegro.png";
import Morocco from "../../../assets/flags/flag-of-Morocco.png";
import Mozambique from "../../../assets/flags/flag-of-Mozambique.png";
import Myanmar from "../../../assets/flags/flag-of-Myanmar.png";
import Namibia from "../../../assets/flags/flag-of-Namibia.png";
import Nauru from "../../../assets/flags/flag-of-Nauru.png";
import Nepal from "../../../assets/flags/flag-of-Nepal.png";
import Netherlands from "../../../assets/flags/flag-of-Netherlands.png";
import NewZealand from "../../../assets/flags/flag-of-New-Zealand.png";
import Nicaragua from "../../../assets/flags/flag-of-Nicaragua.png";
import Niger from "../../../assets/flags/flag-of-Niger.png";
import Nigeria from "../../../assets/flags/flag-of-Nigeria.png";
import Norway from "../../../assets/flags/flag-of-Norway.png";
import Oman from "../../../assets/flags/flag-of-Oman.png";
import Pakistan from "../../../assets/flags/flag-of-Pakistan.png";
import Palau from "../../../assets/flags/flag-of-Palau.png";
import Palestine from "../../../assets/flags/flag-of-Palestine.png";
import Panama from "../../../assets/flags/flag-of-Panama.png";
import PapuaNewGuinea from "../../../assets/flags/flag-of-Papua-New-Guinea.png";
import Paraguay from "../../../assets/flags/flag-of-Paraguay.png";
import Peru from "../../../assets/flags/flag-of-Peru.png";
import Philippines from "../../../assets/flags/flag-of-Philippines.png";
import Poland from "../../../assets/flags/flag-of-Poland.png";
import Portugal from "../../../assets/flags/flag-of-Portugal.png";
import Qatar from "../../../assets/flags/flag-of-Qatar.png";
import Romania from "../../../assets/flags/flag-of-Romania.png";
import Russia from "../../../assets/flags/flag-of-Russia.png";
import Rwanda from "../../../assets/flags/flag-of-Rwanda.png";
import SaintKittsandNevis from "../../../assets/flags/flag-of-St-Kitts-Nevis.png";
import SaintLucia from "../../../assets/flags/flag-of-St-Lucia.png";
import SaintVincentandGrenadines from "../../../assets/flags/flag-of-St-Vincent-the-Grenadines.png";
import Samoa from "../../../assets/flags/flag-of-Samoa.png";
import SanMarino from "../../../assets/flags/flag-of-San-Marino.png";
import SaoTomeandPrincipe from "../../../assets/flags/flag-of-Sao-Tome-and-Principe.png";
import SaudiArabia from "../../../assets/flags/flag-of-Saudi-Arabia.png";
import Senegal from "../../../assets/flags/flag-of-Senegal.png";
import Serbia from "../../../assets/flags/flag-of-Serbia.png";
import Seychelles from "../../../assets/flags/flag-of-Seychelles.png";
import SierraLeone from "../../../assets/flags/flag-of-Sierra-Leone.png";
import Singapore from "../../../assets/flags/flag-of-Singapore.png";
import Slovakia from "../../../assets/flags/flag-of-Slovakia.png";
import Slovenia from "../../../assets/flags/flag-of-Slovenia.png";
import SolomonIslands from "../../../assets/flags/flag-of-Solomon-Islands.png";
import Somalia from "../../../assets/flags/flag-of-Somalia.png";
import SouthAfrica from "../../../assets/flags/flag-of-South-Africa.png";
import SouthSudan from "../../../assets/flags/flag-of-South-Sudan.png";
import Spain from "../../../assets/flags/flag-of-Spain.png";
import SriLanka from "../../../assets/flags/flag-of-Sri-Lanka.png";
import Sudan from "../../../assets/flags/flag-of-Sudan.png";
import Suriname from "../../../assets/flags/flag-of-Suriname.png";
import Sweden from "../../../assets/flags/flag-of-Sweden.png";
import Switzerland from "../../../assets/flags/flag-of-Switzerland.png";
import Syria from "../../../assets/flags/flag-of-Syria.png";
import Taiwan from "../../../assets/flags/flag-of-Taiwan.png";
import Tajikistan from "../../../assets/flags/flag-of-Tajikistan.png";
import Tanzania from "../../../assets/flags/flag-of-Tanzania.png";
import Thailand from "../../../assets/flags/flag-of-Thailand.png";
import TimorLeste from "../../../assets/flags/flag-of-Timor-Leste.png";
import Togo from "../../../assets/flags/flag-of-Togo.png";
import Tonga from "../../../assets/flags/flag-of-Tonga.png";
import TrinidadandTobago from "../../../assets/flags/flag-of-Trinidad-and-Tobago.png";
import Tunisia from "../../../assets/flags/flag-of-Tunisia.png";
import Turkey from "../../../assets/flags/flag-of-Turkey.png";
import Turkmenistan from "../../../assets/flags/flag-of-Turkmenistan.png";
import Tuvalu from "../../../assets/flags/flag-of-Tuvalu.png";
import Uganda from "../../../assets/flags/flag-of-Uganda.png";
import Ukraine from "../../../assets/flags/flag-of-Ukraine.png";
import UnitedArabEmirates from "../../../assets/flags/flag-of-United-Arab-Emirates.png";
import UnitedKingdom from "../../../assets/flags/flag-of-United-Kingdom.png";
import UnitedStates from "../../../assets/flags/flag-of-United-States-of-America.png";
import Uruguay from "../../../assets/flags/flag-of-Uruguay.png";
import Uzbekistan from "../../../assets/flags/flag-of-Uzbekistan.png";
import Vanuatu from "../../../assets/flags/flag-of-Vanuatu.png";
import VaticanCity from "../../../assets/flags/flag-of-Vatican-City.png";
import Venezuela from "../../../assets/flags/flag-of-Venezuela.png";
import Vietnam from "../../../assets/flags/flag-of-Vietnam.png";
import Yemen from "../../../assets/flags/flag-of-Yemen.png";
import Zambia from "../../../assets/flags/flag-of-Zambia.png";
import Zimbabwe from "../../../assets/flags/flag-of-Zimbabwe.png";




const GameComponent = () => {

  const allFlags = [
    { name: "Albania", fileName: Albania },
    { name: "Algeria", fileName: Algeria },
    { name: "Andorra", fileName: Andorra },
    { name: "Angola", fileName: Angola },
    { name: "AntiguaandBarbuda", fileName: AntiguaAndBarbuda },
    { name: "Argentina", fileName: Argentina },
    { name: "Armenia", fileName: Armenia },
    { name: "Australia", fileName: Australia },
    { name: "Austria", fileName: Austria },
    { name: "Azerbaijan", fileName: Azerbaijan },
    { name: "Bahamas", fileName: Bahamas },
    { name: "Bahrain", fileName: Bahrain },
    { name: "Bangladesh", fileName: Bangladesh },
    { name: "Barbados", fileName: Barbados },
    { name: "Belarus", fileName: Belarus },
    { name: "Belgium", fileName: Belgium },
    { name: "Belize", fileName: Belize },
    { name: "Benin", fileName: Benin },
    { name: "Bhutan", fileName: Bhutan },
    { name: "Bolivia", fileName: Bolivia },
    { name: "BosniaandHerzegovina", fileName: BosniaAndHerzegovina },
    { name: "Botswana", fileName: Botswana },
    { name: "Brazil", fileName: Brazil },
    { name: "Brunei", fileName: Brunei },
    { name: "Bulgaria", fileName: Bulgaria },
    { name: "BurkinaFaso", fileName: BurkinaFaso },
    { name: "Burundi", fileName: Burundi },
    { name: "CaboVerde", fileName: CaboVerde },
    { name: "Cambodia", fileName: Cambodia },
    { name: "Cameroon", fileName: Cameroon },
    { name: "Canada", fileName: Canada },
    { name: "CentralAfricanRepublic", fileName: CentralAfricanRepublic },
    { name: "Chad", fileName: Chad },
    { name: "Chile", fileName: Chile },
    { name: "China", fileName: China },
    { name: "Colombia", fileName: Colombia },
    { name: "Comoros", fileName: Comoros },
    { name: "Congo", fileName: Congo },
    { name: "DemocraticRepublicOfTheCongo" , fileName: DemocraticRepublicOfTheCongo},
    { name: "CostaRica", fileName: CostaRica },
    { name: "CotedIvoire", fileName: CotedIvoire },
    { name: "Croatia", fileName: Croatia },
    { name: "Cuba", fileName: Cuba },
    { name: "Cyprus", fileName: Cyprus },
    { name: "CzechRepublic", fileName: CzechRepublic },
{ name: "Denmark", fileName: Denmark },
{ name: "Djibouti", fileName: Djibouti },
{ name: "Dominica", fileName: Dominica },
{ name: "Dominican Republic", fileName: DominicanRepublic },
{ name: "Ecuador", fileName: Ecuador },
{ name: "Egypt", fileName: Egypt },
{ name: "El Salvador", fileName: ElSalvador },
{ name: "Equatorial Guinea", fileName: EquatorialGuinea },
{ name: "Eritrea", fileName: Eritrea },
{ name: "Estonia", fileName: Estonia },
{ name: "Eswatini", fileName: Eswatini },
{ name: "Ethiopia", fileName: Ethiopia },
{ name: "Fiji", fileName: Fiji },
{ name: "Finland", fileName: Finland },
{ name: "France", fileName: France },
{ name: "Gabon", fileName: Gabon },
{ name: "Gambia", fileName: Gambia },
{ name: "Georgia", fileName: Georgia },
{ name: "Germany", fileName: Germany },
{ name: "Ghana", fileName: Ghana },
{ name: "Greece", fileName: Greece },
{ name: "Grenada", fileName: Grenada },
{ name: "Guatemala", fileName: Guatemala },
{ name: "Guinea", fileName: Guinea },
{ name: "Guinea-Bissau", fileName: GuineaBissau },
{ name: "Guyana", fileName: Guyana },
{ name: "Haiti", fileName: Haiti },
{ name: "Honduras", fileName: Honduras },
{ name: "Hungary", fileName: Hungary },
{ name: "Iceland", fileName: Iceland },
{ name: "India", fileName: India },
{ name: "Indonesia", fileName: Indonesia },
{ name: "Iran", fileName: Iran },
{ name: "Iraq", fileName: Iraq },
{ name: "Ireland", fileName: Ireland },
{ name: "Israel", fileName: Israel },
{ name: "Italy", fileName: Italy },
{ name: "Jamaica", fileName: Jamaica },
{ name: "Japan", fileName: Japan },
{ name: "Jordan", fileName: Jordan },
{ name: "Kazakhstan", fileName: Kazakhstan },
{ name: "Kenya", fileName: Kenya },
{ name: "Kiribati", fileName: Kiribati },
{ name: "North Korea", fileName: NorthKorea },
{ name: "South Korea", fileName: SouthKorea },
{ name: "Kosovo", fileName: Kosovo },
{ name: "Kuwait", fileName: Kuwait },
{ name: "Kyrgyzstan", fileName: Kyrgyzstan },
{ name: "Laos", fileName: Laos },
{ name: "Latvia", fileName: Latvia },
{ name: "Lebanon", fileName: Lebanon },
{ name: "Lesotho", fileName: Lesotho },
{ name: "Liberia", fileName: Liberia },
{ name: "Libya", fileName: Libya },
{ name: "Liechtenstein", fileName: Liechtenstein },
{ name: "Lithuania", fileName: Lithuania },
{ name: "Luxembourg", fileName: Luxembourg },
{ name: "NorthMacedonia", fileName: NorthMacedonia },
{ name: "Madagascar", fileName: Madagascar },
{ name: "Malawi", fileName: Malawi },
{ name: "Malaysia", fileName: Malaysia },
{ name: "Maldives", fileName: Maldives },
{ name: "Mali", fileName: Mali },
{ name: "Malta", fileName: Malta },
{ name: "Marshall Islands", fileName: MarshallIslands },
{ name: "Mauritania", fileName: Mauritania },
{ name: "Mauritius", fileName: Mauritius },
{ name: "Mexico", fileName: Mexico },
{ name: "Micronesia", fileName: Micronesia },
{ name: "Moldova", fileName: Moldova },
{ name: "Monaco", fileName: Monaco },
{ name: "Mongolia", fileName: Mongolia },
{ name: "Montenegro", fileName: Montenegro },
{ name: "Morocco", fileName: Morocco },
{ name: "Mozambique", fileName: Mozambique },
{ name: "Myanmar", fileName: Myanmar },
{ name: "Namibia", fileName: Namibia },
{ name: "Nauru", fileName: Nauru },
{ name: "Nepal", fileName: Nepal },
{ name: "Netherlands", fileName: Netherlands },
{ name: "New Zealand", fileName: NewZealand },
{ name: "Nicaragua", fileName: Nicaragua },
{ name: "Niger", fileName: Niger },
{ name: "Nigeria", fileName: Nigeria },
{ name: "North Korea", fileName: NorthKorea },
{ name: "Norway", fileName: Norway },
{ name: "Oman", fileName: Oman },
{ name: "Pakistan", fileName: Pakistan },
{ name: "Palau", fileName: Palau },
{ name: "Panama", fileName: Panama },
{ name: "Papua New Guinea", fileName: PapuaNewGuinea },
{ name: "Paraguay", fileName: Paraguay },
{ name: "Peru", fileName: Peru },
{ name: "Philippines", fileName: Philippines },
{ name: "Poland", fileName: Poland },
{ name: "Portugal", fileName: Portugal },
{ name: "Qatar", fileName: Qatar },
{ name: "Qatar", fileName: Qatar },
{ name: "Romania", fileName: Romania },
{ name: "Russia", fileName: Russia },
{ name: "Rwanda", fileName: Rwanda },
{ name: "Saint Kitts and Nevis", fileName: SaintKittsandNevis },
{ name: "Saint Lucia", fileName: SaintLucia },
{ name: "Saint Vincent and the Grenadines", fileName: SaintVincentandGrenadines },
{ name: "Samoa", fileName: Samoa },
{ name: "San Marino", fileName: SanMarino },
{ name: "Sao Tome and Principe", fileName: SaoTomeandPrincipe },
{ name: "Saudi Arabia", fileName: SaudiArabia },
{ name: "Senegal", fileName: Senegal },
{ name: "Serbia", fileName: Serbia },
{ name: "Seychelles", fileName: Seychelles },
{ name: "Sierra Leone", fileName: SierraLeone },
{ name: "Singapore", fileName: Singapore },
{ name: "Slovakia", fileName: Slovakia },
{ name: "Slovenia", fileName: Slovenia },
{ name: "Solomon Islands", fileName: SolomonIslands },
{ name: "Somalia", fileName: Somalia },
{ name: "South Africa", fileName: SouthAfrica },
{ name: "South Korea", fileName: SouthKorea },
{ name: "South Sudan", fileName: SouthSudan },
{ name: "Spain", fileName: Spain },
{ name: "Sri Lanka", fileName: SriLanka },
{ name: "Sudan", fileName: Sudan },
{ name: "Suriname", fileName: Suriname },
{ name: "Sweden", fileName: Sweden },
{ name: "Switzerland", fileName: Switzerland },
{ name: "Syria", fileName: Syria },
{ name: "Taiwan", fileName: Taiwan },
{ name: "Tajikistan", fileName: Tajikistan },
{ name: "Tanzania", fileName: Tanzania },
{ name: "Thailand", fileName: Thailand },
{ name: "Timor-Leste", fileName: TimorLeste },
{ name: "Togo", fileName: Togo },
{ name: "Tonga", fileName: Tonga },
{ name: "Trinidad and Tobago", fileName: TrinidadandTobago },
{ name: "Tunisia", fileName: Tunisia },
{ name: "Turkey", fileName: Turkey },
{ name: "Turkmenistan", fileName: Turkmenistan },
{ name: "Tuvalu", fileName: Tuvalu },
{ name: "Uganda", fileName: Uganda },
{ name: "Ukraine", fileName: Ukraine },
{ name: "United Arab Emirates", fileName: UnitedArabEmirates },
{ name: "United Kingdom", fileName: UnitedKingdom },
{ name: "United States", fileName: UnitedStates },
{ name: "Uruguay", fileName: Uruguay },
{ name: "Uzbekistan", fileName: Uzbekistan },
{ name: "Vanuatu", fileName: Vanuatu },
{ name: "Vatican City", fileName: VaticanCity },
{ name: "Venezuela", fileName: Venezuela },
{ name: "Vietnam", fileName: Vietnam },
{ name: "Yemen", fileName: Yemen },
{ name: "Zambia", fileName: Zambia },
{ name: "Zimbabwe", fileName: Zimbabwe },
];

    const [flags, setFlags] = useState(allFlags);
    const [currentFlag, setCurrentFlag] = useState(null);
    const [flagCountCorrect, setFlagCountCorrect] = useState(0);
    const [options, setOptions] = useState([]);
    const [round, setRound] = useState(1);
    const [maxRounds, setMaxRounds] = useState(20);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * flags.length);
    setCurrentFlag(flags[randomIndex]);
    setOptions(getRandomOptions(flags, flags[randomIndex]));
  }, []);
  
  const getRandomOptions = (flags, currentFlag) => {
    let options = [currentFlag];
    while (options.length < 4) {
      const randomFlag = flags[Math.floor(Math.random() * flags.length)];
      if (!options.includes(randomFlag)) {
        options.push(randomFlag);
      }
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const handleFlagClick = flag => {
    if (flag.name === currentFlag.name) {
        setFlagCountCorrect(prevCount => prevCount + 1);
        setRound(round + 1)
    } else {
        
        setRound(round + 1);
    }
    const randomIndex = Math.floor(Math.random() * flags.length);
    setCurrentFlag(flags[randomIndex]);
    setOptions(getRandomOptions(flags, flags[randomIndex]));
  };
  
  return (
    <Game>
        


        <h6>Round {round}</h6>
          {currentFlag && (
      <img src={currentFlag.fileName} alt={currentFlag.name} />
    )}
    {options.map(flag => (
      <button key={flag.name} onClick={() => handleFlagClick(flag)}>
        {flag.name}
      </button>
    ))}


    
    </Game>
  );
};
  

export default GameComponent