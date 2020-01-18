import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar,'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no github,'
      }
    },
  }, {
    defaultNavigationOptions:{
      headerTintiColor: {
        color: '#FFF'
      },
      headerTitle: {
        backgroundColor: '#7D40EE7'
      }
    }
  })
);

export default Routes;