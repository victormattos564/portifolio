import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import Lista from './components/lista/lista.jsx';
import Tecnologias from './components/tecnologias/tecnologias.jsx';
import Sobre from './components/sobre/sobre.jsx';



export default function App() {

  const trabalhos = [
    {
      id: "1",
      work: "Valorant AP",
      img: require('./src/valorant4.png'),
      description: "API for Valorant.",
      tecnologies: "React.js, JS, HTML5, css, Node.js",
    },
    {
      id: "2",
      work: "lista de espera ",
      img: require('./src/lista de espera.png'),
      description: "lista de espera",
      tecnologies: "React.js, JS, HTML5, css, Node.js",
    },


  ];

  return (
    <View className="bg-slate-100 min-h-screen flex flex-col justify-center items-center">

      <Sobre />

      <Tecnologias />

      <Lista trabalhos={trabalhos} />

      <StatusBar style="auto" />
    </View>

  );
}