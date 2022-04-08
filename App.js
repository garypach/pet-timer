import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RNPickerSelect from 'react-native-picker-select';


function HomeScreen() {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const handleHoursChange = (value) => {
    setHours(value);
  };
  const handleMinutesChange = (value) => {
    setMinutes(value);
  };
  const handleReset = () => {
    setHours(0);
    setMinutes(0);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'red' }}>
      <Text>Remind me every</Text>
      <RNPickerSelect
            onValueChange={(value) => handleHoursChange(value)}
            placeholder={{}}
            items={[
                { label: '0 Hours', value: 0 },
                { label: '1 Hours', value: 1 },
                { label: '2 Hours', value: 2 },
                { label: '3 Hours', value: 3 },
                { label: '4 Hours', value: 4 },
                { label: '5 Hours', value: 5 },
                { label: '6 Hours', value: 6 },
                { label: '7 Hours', value: 7 },
                { label: '8 Hours', value: 8 },
                { label: '9 Hours', value: 9 },
                { label: '10 Hours', value: 10 },
                { label: '11 Hours', value: 11 },
                { label: '12 Hours', value: 12 },
                { label: '13 Hours', value: 13 },
                { label: '14 Hours', value: 14},
                { label: '15 Hours', value: 15 },
                { label: '16 Hours', value: 16 },
                { label: '17 Hours', value: 17 },
                { label: '18 Hours', value: 18 },
                { label: '19 Hours', value: 19 },
                { label: '20 Hours', value: 20 },
                { label: '21 Hours', value: 21 },
                { label: '22 Hours', value: 22 },
                { label: '23 Hours', value: 23 },
                { label: '24 Hours', value: 24 },
            ]}
        />
          <RNPickerSelect
            onValueChange={(value) => handleMinutesChange(value)}
            placeholder={{}}
            items={[
              { label: '0 Minutes', value: 0 },
              { label: '1 Minutes', value: 1 },
              { label: '2 Minutes', value: 2 },
              { label: '3 Minutes', value: 3 },
              { label: '4 Minutes', value: 4 },
              { label: '5 Minutes', value: 5 },
              { label: '6 Minutes', value: 6 },
              { label: '7 Minutes', value: 7 },
              { label: '8 Minutes', value: 8 },
              { label: '9 Minutes', value: 9 },
              { label: '10 Minutes', value: 10 },
              { label: '11 Minutes', value: 11 },
              { label: '12 Minutes', value: 12 },
              { label: '13 Minutes', value: 13 },
              { label: '14 Minutes', value: 14 },
              { label: '15 Minutes', value: 15 },
              { label: '16 Minutes', value: 16 },
              { label: '17 Minutes', value: 17 },
              { label: '18 Minutes', value: 18 },
              { label: '19 Minutes', value: 19 },
              { label: '20 Minutes', value: 20 },
              { label: '21 Minutes', value: 21 },
              { label: '22 Minutes', value: 22 },
              { label: '23 Minutes', value: 23 },
              { label: '24 Minutes', value: 24 },
              { label: '25 Minutes', value: 25 },
              { label: '26 Minutes', value: 26 },
              { label: '27 Minutes', value: 27 },
              { label: '28 Minutes', value: 28 },
              { label: '29 Minutes', value: 29 },
              { label: '30 Minutes', value: 30 },
              { label: '31 Minutes', value: 31 },
              { label: '32 Minutes', value: 32 },
              { label: '33 Minutes', value: 33 },
              { label: '34 Minutes', value: 34 },
              { label: '35 Minutes', value: 35 },
              { label: '36 Minutes', value: 36 },
              { label: '37 Minutes', value: 37 },
              { label: '38 Minutes', value: 38 },
              { label: '39 Minutes', value: 39 },
              { label: '40 Minutes', value: 40 },
              { label: '41 Minutes', value: 41 },
              { label: '42 Minutes', value: 42 },
              { label: '43 Minutes', value: 43 },
              { label: '44 Minutes', value: 44 },
              { label: '45 Minutes', value: 45 },
              { label: '46 Minutes', value: 46 },
              { label: '47 Minutes', value: 47 },
              { label: '48 Minutes', value: 48 },
              { label: '49 Minutes', value: 49 },
              { label: '50 Minutes', value: 50 },
              { label: '51 Minutes', value: 51 },
              { label: '52 Minutes', value: 52 },
              { label: '53 Minutes', value: 53 },
              { label: '54 Minutes', value: 54 },
              { label: '55 Minutes', value: 55 },
              { label: '56 Minutes', value: 56 },
              { label: '57 Minutes', value: 57 },
              { label: '58 Minutes', value: 58 },
              { label: '59 Minutes', value: 59 },
              
          ]}
        />
        <Text>{hours}</Text>
        <Text>{minutes}</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        screenOptions={{
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 15
          },
          tabBarIconStyle: { display: "none" },
        }}
        
     />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}