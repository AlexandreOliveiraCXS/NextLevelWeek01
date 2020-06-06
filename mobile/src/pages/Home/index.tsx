import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { View, Image, StyleSheet, Text, ImageBackground, TextInput, KeyboardAvoidingView,Platform } from 'react-native';

const Home = () => {
    const naigation = useNavigation();
    const [uf, setUf]= useState('');
    const [city, setCity]= useState('');
    
    function handlerNavigationToPoints(){
        naigation.navigate('Points', {
          uf,
          city
        });
    }

    return (
      <KeyboardAvoidingView
        style={{flex:1}} 
        behavior={Platform.OS === 'ios'? 'padding': undefined}
      >
        <ImageBackground 
            source={require('../../assets/home-background.png')}
            style={styles.container}
            imageStyle={{width:274,height:368}}
            
        >
            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')}/>
                <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text> 
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiênte</Text> 
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Digite a UF"
                maxLength={2}
                autoCapitalize="characters"
                autoCorrect={false}
                value={uf}
                onChangeText={text => setUf(text)} 
              ></TextInput>
              <TextInput 
                style={styles.input}
                value={city}
                autoCorrect={false}
                onChangeText={text => setCity(text)}
                placeholder="Digite a Cidade"
              ></TextInput>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handlerNavigationToPoints}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icons name="arrow-right" size={24} color="#fff" />
                        </Text>
                    </View>
                        <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
            </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  }); 
export default Home;