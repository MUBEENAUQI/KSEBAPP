import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import ImageZoom from 'react-native-image-pan-zoom';
import Swiper from 'react-native-swiper'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DetailScreen = ({ navigation, route }) => {
    const itemId = route.params.itemId;
    const images = route.params.imagesurls;
    const count = route.params.count;
    const renderHeader = () => (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/arrow.jpeg')} resizeMode="contain" style={{ height: screenHeight / 22 }} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{itemId}</Text>
            <View style={{ width: RFValue(24, screenWidth) }} />
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {renderHeader()}
            <Swiper style={styles.wrapper} buttonWrapperStyle={{ color: "pink" }} showsButtons loop={false}>



                {images.map((image, index) => (
                    <View style={{ height: screenHeight , width: screenWidth }} key={index}>
                        <ImageZoom cropWidth={Dimensions.get('window').width}
                            cropHeight={Dimensions.get('window').height-100}
                            imageWidth={screenWidth}
                            imageHeight={screenHeight}>
                            <Image
                                style={styles.image}
                                source={image.url}
                                resizeMode="contain" />
                        </ImageZoom>
                    </View>
                ))}
            </Swiper>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#193a63',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: screenWidth / 20,
        elevation: 2,
        paddingVertical: screenHeight / 50,
    },
    headerTitle: {
        fontSize: RFValue(19, screenHeight),
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: RFValue(4, screenWidth),
        marginRight: screenWidth / 10,
    },
    scrollContainer: {
        flexGrow: 1,
        //backgroundColor: 'white',
        flexDirection: 'row'
    },
    image: {
        flex: 1,
        width: screenWidth,
        height: undefined,
        //marginTop:-(screenHeight / 10),
    },
});

export default DetailScreen;


