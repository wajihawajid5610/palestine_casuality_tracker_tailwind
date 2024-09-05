import Tittle from './componets/Tittle';
import './App.css';
import MainDisplay from './componets/MainDisplay';
import AppProvider from './AppProvider';

const App = () => {
  return (
    <AppProvider>
      <Tittle />
      <MainDisplay />
    </AppProvider>

  );
}

export default App;
