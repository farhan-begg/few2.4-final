// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import { Ionicons } from 'react-native-vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





const Tab = createBottomTabNavigator();

function App() {
  return (

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? "md-home" : "md-home"
              } else if (route.name === 'Second') {
                iconName = focused ? "ios-checkmark-circle-outline" : "ios-checkmark-circle-outline"
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor:'#f00',
            inactiveTintColor:"#600",    
            activeBackgroundColor:"#111",
            inactiveBackgroundColor: "#000"
          }}
        >

          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Second" component={SecondScreen} />
    
         
        </Tab.Navigator>

      </NavigationContainer>

  );
}

export default App;