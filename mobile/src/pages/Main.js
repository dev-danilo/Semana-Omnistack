import React, { useState,useEffect } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main( {navigation} ) {
    const [currentRegion, setCurrentRegion] = useState(null);
  
    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();
    
            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });
        
                const { latitude, longitude } = coords;
        
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                });
            }
        }
  
        loadInitialPosition();
    }, []);
  
    if (!currentRegion) {
      return null;
    }
  
    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -18.7337015, longitude: -47.4980909 }}>
            <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/29438257?s=460&v=4'}}/>
            <Callout onPress={() => {
                //navegação
                navigation.navigate('Profile', { github_username: 'danilo49'});

            }}>
                <View style={styles.callout}>
                    <Text style={styles.devName}>Danilo Pereira</Text>
                    <Text style={styles.devBio}>Apaixonado por tecnologia.</Text>
                    <Text style={styles.devTechs}>ReactNative, ReactJS, Node.js</Text>  
                </View>
            </Callout>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF',
        borderRadius: 50
    },

    callout: {
        width: 260,

    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    }
});

export default Main; 