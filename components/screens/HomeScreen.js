import { View, Text, Button } from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {

 /*  const {itemId} = route.params; */

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen {'\n'}</Text>
      {/* <Text>Initial param : itemId - {itemId}{'\n'}</Text> */}
      {/* <Button
        title='Update param'
        onPress={() => navigation.setParams({
          itemId: Math.floor(Math.random()*100)
        })}
      /> */}
      <Text>{'\n'}</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          //1.Navigate to the Details route with params.
          navigation.navigate('Details',{
            itemId : 1088,
            otherParam: 'React Native App'
          })
        }}
        
      />
    </View>
  );
}

export default HomeScreen