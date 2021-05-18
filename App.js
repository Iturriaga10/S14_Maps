import React from 'react';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={ PROVIDER_GOOGLE }
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}  
      >
        <Marker
        coordinate={{ 
          latitude: 37.78825,
          longitude: -122.4324
        }}
        title="Here"
      />

      {/* <Marker
        coordinate={{ 
          latitude: 37.78825,
          longitude: -122.4324
        }}
        image={{uri: 'https://www.cp-desk.com/wp-content/uploads/2019/02/map-marker-free-download-png.png'}}
      /> */}
      </MapView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
