import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import bele from '../../../assets/profile.jpg';

const { width, height } = Dimensions.get('screen');

const PetsPhoto: React.FC = (): React.ReactElement => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.View}>
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={bele} style={styles.image}  />
          </TouchableOpacity>
          <View style={styles.nameContainer}>
            <Text  style={{fontSize:30,fontWeight:"bold"}}>Bella</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderEndEndRadius:20,
    marginBottom:35
  },
  imageContainer: {
    width: width * 0.9,
    height: width * 0.9,
 
    alignItems: 'center', 

   },
  image: {
    width: width*0.6,
    height: height*0.3,
    borderRadius: 30, 
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  View: {
    backgroundColor: "#ffc368",
    width: width,
    height: width,
    justifyContent:"center",
    alignItems:"center",
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30
  },
  nameContainer:{
    backgroundColor: 'rgba(254, 254, 254, 0.7)',
  width: width * 0.9,
  height: height * 0.12,
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  top: 290,
  alignContent: "center",
  left: 20,
  right: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2 ,
  shadowRadius: 4,
  elevation: 4,
  }

});

export default PetsPhoto;
