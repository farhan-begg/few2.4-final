import React from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, TouchableHighlight} from 'react-native'
import data from '../metal.json'

export default function split(data) {
        for (i = 0 ; i < data.length; i += 1) {
            if (data.split === "-")
                return (
                    <>
                    <Text style={{ textDecorationLine: "line-through", color: "#666"}} >
                        {data.split}
                    </Text>
                    </>
                )
            else {
                 return (
                      <Text style={{ fontWeight: "bold", color: "#666"}} >
                         {data.split}
                     </Text>
                    )
                  }
                }


    return(
        <SafeAreaView>

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


  });