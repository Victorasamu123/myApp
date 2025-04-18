import { View, Text , StyleSheet, ImageBackground, Pressable} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
// import icedCoffee from "@/assets/images/iced-coffee.png"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('@/assets/images/iced-coffee.png')} resizeMode='cover' style={styles.image}>
      <Text style={styles.text} >Coffee shop</Text>

      <Link href='/menu' style={{marginHorizontal: "auto"}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Our Menu</Text>
      </Pressable>
      </Link>
      <Link href='/contact' style={{marginHorizontal: "auto"}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </Pressable>
      </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'column',

  },
  image:{
    width: '100%',
    height: "100%",
    flex : 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize:42,
    fontWeight : 'bold',
    textAlign:'center',
    backgroundColor : 'rgba(0,0,0,0.5)',
    marginBottom:120,
  },
  button:{
    height:60,
    borderRadius: 20,
    backgroundColor : 'rgba(0,0,0,0.5)',
    padding: 6,
    justifyContent: 'center',
    marginBottom:50,
    width:150,
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight : 'bold',
    textAlign:'center',
    // backgroundColor : 'rgba(0,0,0,0.5)',
    // textDecorationLine : 'underline',
    padding:4,
  },
})