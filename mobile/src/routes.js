import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar', 
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Gibhub'
                
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false, //stack de activitys canto esquerdo no IOS(mostra o nome da activity anterior)
            headerStyle: {
                backgroundColor: '#7d40e7',
            }
        }
    })
);

export default Routes;