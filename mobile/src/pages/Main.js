import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native'; 
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
  const [ currentRegion, setCurrentRegion ] = useState(nul);
  useEffect(()=> {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted)  {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const [latitude, longitude] = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }
  },[]);
  if (!currentRegion) {
    return null;
  }
  const { latitude, longitude } = currentRegion;
  return (
    <MapView initialRegion={currentRegion} style={styles.map} >
        <Marker coordinate={{latitude, longitude}}>
          <Image style={styles.avatar} source={{uri: ''}} />
          <Callout>
            <View style={styles.callout}>
              <Text />
              <Text />
              <Text />
              <Text />
            </View>
          </Callout>
        </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    height: 54,
    width: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF'
  }
});

export default Main;
