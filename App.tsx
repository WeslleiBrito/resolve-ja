import Routes from './src/routes';
import 'react-native-gesture-handler'
import GlobalState from './src/context/GlobalContext';

export default function App() {
  return (
    <GlobalState>
      <Routes/>
    </GlobalState>
  );
}

