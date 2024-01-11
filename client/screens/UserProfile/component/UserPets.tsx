import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text,StyleSheet ,Dimensions,Image,TouchableOpacity} from 'react-native';
import addPet from '../../../assets/add-pet.png'
import dog1 from '../../../assets/ownerdog2.png'
import dog2 from '../../../assets/ownerdog1.png'
import peticon from '../../../assets/peticon.png'
import axios from 'axios';



const { width, height } = Dimensions.get('screen')
const UserPets: React.FC = () => {
    const [hhh,setHhh]=useState([])
    const getData=async()=>{
        const result=await axios.get("http://localhost:3000/api/events")
        setHhh(result.data);

        
    }

    useEffect(()=>{
        
        getData()
    },[])
    console.log(hhh);
    
    return (
        <View style={styles.petContainer}>
            <View style={styles.myPets}>
            <Image style={{width:width*0.1,height:height*0.045}} source={peticon}></Image>
            <Text style={{fontWeight:'bold',fontSize: 23}}>My Pets</Text>
            </View>
        <View style={{display:"flex",flexDirection:'row', gap:20,  marginVertical:15}}>
        <TouchableOpacity><Image style={styles.PetsImage} source={dog1}></Image></TouchableOpacity>
        <TouchableOpacity><Image style={styles.PetsImage} source={dog2}></Image></TouchableOpacity>
        <TouchableOpacity><Image style={styles.PetsImage} source={addPet}></Image></TouchableOpacity>
        </View>
        </View>
    );
};
const styles = StyleSheet.create({
    PetsImage: {
        width:width*0.22,
        height:height*0.1,
        borderRadius:15
       
       
    },
    myPets : {
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"row",
        gap:10,
       
    },
    petContainer :{
        backgroundColor:"white",
        marginVertical:7,
        marginHorizontal:20,
        borderRadius:20,
        padding:10,
    }

})
export default UserPets;

