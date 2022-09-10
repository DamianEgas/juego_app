import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  
} from 'react-native';
import { WebView } from 'react-native-webview';

export default function Juego() {
  return (
    <View style={styles.contenedor}>


      

        
        <View style={{flex: 1,width:'100%', height:'100%'}}>
       <WebView
         style={{ flex: 1, width:'100%', height:'100%' }}
         originWhitelist={['*']}
         javaScriptEnabled={true}
         automaticallyAdjustContentInsets={false}
         scalesPageToFit={false}
         mixedContentMode={'always'}
         allowUniversalAccessFromFileURLs={true}
        scrollEnabled={false}
        
         source={{
           html: `<head><meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" user-scalable=no /><body><iframe height="100%" style="width: 100%;" scrolling="no" allowfullscreen src="https://encuentramas.net/juego/" frameborder="no"></body></head>
          
         </iframe>`
         }}
       />
       </View>
        
        

      

     
    </View>
       
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center'

  },

  subtitulo: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#1A44A5',
    fontSize: 20,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',


  },
  descripcion: {
    textAlign: 'justify',
    color: '#2E3D5D',
    fontSize: 15,



  },
  ingredientes: {
    textAlign: 'justify',

    color: '#2E3D5D',
    fontSize: 15,



  },
  proceso: {
    textAlign: 'justify',
    color: '#2E3D5D',
    fontSize: 15,


  },
  foto: {
    width: '100%',
    height: 200
  },
  separador: {
    width: "80%", margin: 20
  }

});
