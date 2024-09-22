import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/App/Home';
import List from '../../screens/App/List';
import { homePath, listPath, homeStackPath, listStackPath, infoCharacterPath } from '../../constants/pathLocations';
import Header from '../../components/Header';
import { tabIcon } from '../TabBar/TabBar';
import InfoCharacter from '../../screens/App/List/InfoCharacter';


const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  const HomeStack = createStackNavigator();  
  return (
    <HomeStack.Navigator initialRouteName={homeStackPath}>
      <HomeStack.Screen
        name={homeStackPath}
        component={Home}
        options={{
          header: () => <Header title='Home Screen' />,
        }}
      />
    </HomeStack.Navigator>
  );
};

const ListStackScreen = () => {
  const ListStack = createStackNavigator();  
  return (
    <ListStack.Navigator initialRouteName={listStackPath}>
      <ListStack.Screen
        name={listStackPath}
        component={List}
        options={{ 
          header: () => <Header title='List Screen'/>,
        }}
      />
      <ListStack.Screen
        name={infoCharacterPath}
        component={InfoCharacter}
        options={{ 
          headerShown: false
        }}
      />
    </ListStack.Navigator>
  );
};

const BottomMenu: FC = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}: {focused: boolean}) => tabIcon(focused, route.name),
        tabBarLabel: () => <></>,
      })}
      initialRouteName={homePath}
    >
      <Tab.Screen name={homePath} component={HomeStackScreen} />
      <Tab.Screen name={listPath} component={ListStackScreen} />
    </Tab.Navigator>
  );
};

export default BottomMenu;

