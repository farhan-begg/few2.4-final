  
import * as React from 'react';
import {  View, Text, StyleSheet, } from 'react-native';
import { color } from 'react-native-reanimated';
import Data from '../metal.json'

export default function SecondScreen() {


   
    const totalBands = Data.reduce((acc, band) => {
        acc = acc + 1
        return acc
    }, 0)
    const totalFans = Data.reduce((acc, band) => {
        acc = acc + (band.fans * 1000)
        return acc
    }, 0)

    const active = Data.reduce((acc, band) => {
        if( band.split == "-") {
            acc = acc + 1
        }
        
        return acc
    }, 0)
    const split = Data.reduce((acc, band) => {
        if( band.split !== "-"){
            acc = acc + 1
        }
        return acc
    }, 0)
    
    
    
    
    
    
    return (
            <View style={styles.container}>
                <Text style={styles.metal}> METAL 🤘</Text>
    
                <Text style={styles.count} >
                    Count: {totalBands}
                </Text>
                <Text style={styles.fans} >
                    Fans: {totalFans}
                </Text>
                <Text style={styles.countries} >
                    Countries: 80
                </Text>
                <Text style={styles.active } >
                    Active: {active}
                </Text>
                <Text style={styles.split}>
                    Split: {split}
                </Text>
   
                
     
            </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',  
        padding: 10   
    },
    metal: {
        fontSize: 24,
        color: 'white', 
        padding: 5   
    },
    count: {
        color: 'white', 
        padding: 2 

    },
    fans: {
        color: 'white', 
        padding: 2  

    },
    countries: {
        color: 'white', 
        padding: 2  

    },
    active: {
        color: 'white', 
        padding: 2  
    },
    split: {
        color: 'white',
        padding: 2  
    }

})
