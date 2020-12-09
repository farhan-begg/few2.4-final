import React from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, TouchableHighlight} from 'react-native'
import Data from '../metal.json'

export default function Home() {

    const metaData = Data.map((data) => {
        return {
            name: data.band_name,
            origin: data.origin,
            fans: data.fans,
            formed: data.formed,
            split: data.split
        }
    })

    // inside
    const Cell = ({ name, origin, fans, formed, split }) => { 
      let splitName 
      if (split === "-"){
        splitName = 
        (
            <Text style={{ textDecorationLine: "line-through", color: "#666"}} >
              {name}
            </Text>
        )
      }else {
          splitName = 
        (
            <Text style={{ fontWeight: 'bold', color: "#666"}} >
                {name}
            </Text>
        )}
    
                  
      return(
      
        <View style={styles.container}>
                  {splitName}
          <Text style={styles.origin}>{origin}</Text>
          <Text style={styles.fans}>{fans}</Text>
          <Text style={styles.formed} >{formed}</Text>
        </View>
      )};
    
    return(
        <SafeAreaView>
            <FlatList 
                data={metaData}
                renderItem={({ item }) => (
                  <Cell
                      name={item.name} 
                      origin={item.origin} 
                      fans={item.fans}
                      formed={item.formed}
                      split={item.split}
                  />
          
                )}
                keyExtractor={(item) => item.id}
                style={styles.listContainer}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#000',
      
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      paddingRight: 15,
      paddingLeft: 15,
      paddingTop: 15,

     

   
    },

    name: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',

      },
      origin:{
        fontSize: 18,
        color:  '#999',
        textAlign: 'right'

      },
      fans:{
        color: 'white',
        textAlign: 'right',
        fontSize: 12,

      },
      formed: {
        color: 'white',
        fontSize: 12

      }


  });