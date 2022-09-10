import React from "react";
import { StyleSheet, View, Text, ImageBackground, ScrollView, StatusBar, Image } from "react-native";

export default function Info() {
    return (
        <View style={styles.contenedor}>
            <ImageBackground
                style={styles.foto}
                source={require('./fotos/fondo.png')}
                resizeMode="cover"
            >
                <ScrollView>
                    <Text style={styles.titulo}>

                        JUEGO DEL AHORCADO
                    </Text>

                    <View style={{
                        padding: 20,
                        backgroundColor: "#E5E8E8",
                        marginTop: 300,
                    }} >
                        <Text style={styles.descripcion}>
                            Usando una fila de guiones, se representa la palabra a adivinar, dando el número de letras, números y categoría. Si el jugador adivinador sugiere una letra o número que aparece en la palabra, el programa la escribe en todas sus posiciones correctas. Si la letra o el número sugerido no ocurre en la palabra, el programa saca un elemento de la figura de hombre palo ahorcado como una marca de conteo. El juego termina cuando: {"\n"}
                            * El jugador adivinador completa la palabra, o adivina la palabra completa correctamente
                            {"\n"}
                            * El programa completa el diagrama.

                        </Text>

                        <Image source={require('./fotos/logo.png')}
                            style={{ width: '100%', height: 200, resizeMode: 'center' }} />
                        <Text>Desarrollado por:</Text>
                        <View style={{ flexDirection: 'row', alignContent: 'space-between', marginTop: 25 }}>
                            <View style={{ flex: 1 }} >
                                <Image source={require('./fotos/programador.jpg')}
                                    style={{ width: '100%', height: 100, resizeMode: 'center' }} />
                                <Text>Robinson Egas</Text>
                            </View>
                            <View style={{ flex: 1 }} >
                                <Image source={require('./fotos/programador.jpg')}
                                    style={{ width: '100%', height: 100, resizeMode: 'center' }} />
                                <Text>Juan Amores</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
            <StatusBar />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        textShadowColor: '#000',
        textShadowOffset: {
            width: 1,
            height: 0,
        },
        textShadowRadius: 1,
    },
    titulo: {
        textAlign: "center",
        fontWeight: "bold",
        color: '#9E0C08',
        fontSize: 50,

    },
    subtitulo: {
        textAlign: "center",
        fontWeight: "bold",
        color: '#2E3D5D',
        fontSize: 40,

    },
    descripcion: {
        alignContent: "flex-end",
        textAlign: "justify",
        color: '#2E3D5D',
        fontSize: 18,


    },
    foto: {
        flex: 1,
        justifyContent: 'center',
    },
});
