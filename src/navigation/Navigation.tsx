import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from '../utils/Constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Home from '../screens/home/Home';
import Portfolio from '../screens/portfolio/Portfolio';
import Trade from '../screens/trade/Trade';
import Market from '../screens/market/Market';
import Profile from '../screens/profile/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN.BOTTOMTAB} component={TabNavigation} />
    </Stack.Navigator>
  );
}

const TabNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 56 + insets.bottom,
        },
      }}>
      <Tab.Screen name={SCREEN.HOME} component={Home} />
      <Tab.Screen name={SCREEN.PORTFOLIO} component={Portfolio} />
      <Tab.Screen name={SCREEN.TRADE} component={Trade} />
      <Tab.Screen name={SCREEN.MARKET} component={Market} />
      <Tab.Screen name={SCREEN.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
