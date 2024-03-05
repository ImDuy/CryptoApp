import {createStackNavigator} from '@react-navigation/stack';
import {COLOR, ICON, SCREEN} from '../utils/Constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Home from '../screens/home/Home';
import Portfolio from '../screens/portfolio/Portfolio';
import Trade from '../screens/trade/Trade';
import Market from '../screens/market/Market';
import Profile from '../screens/profile/Profile';
import {View} from 'react-native';
import TabIcon from '../components/TabIcon';

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
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70 + insets.bottom,
          backgroundColor: COLOR.secondary,
          paddingBottom: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name={SCREEN.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon label="Home" icon={ICON.HOME} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.PORTFOLIO}
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              label="Portfolio"
              icon={ICON.PORTFOLIO}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.TRADE}
        component={Trade}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon label="Trade" icon={ICON.TRADE} isCircle={true} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.MARKET}
        component={Market}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon label="Market" icon={ICON.MARKET} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon label="Profile" icon={ICON.PROFILE} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
