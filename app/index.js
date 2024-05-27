// app/index.js
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import zpp from './_layout';
import { name as appName } from '../app.json';

const App = () => {
    return (
      <NavigationContainer>
        {zpp}
      </NavigationContainer>
    );
  };
  
  export default App;