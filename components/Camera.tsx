import React, { useEffect, useState } from 'react';
import { View, Button, Image, Platform, Alert, Dimensions } from 'react-native';
import { ThemedText } from './ThemedText';
import * as ImagePicker from 'expo-image-picker';
const { width: screenWidth } = Dimensions.get('window');
interface CameraProps {
    image: string | null;
    setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

  const Camera: React.FC<CameraProps> = ({ image, setImage }) => {

    useEffect(() => {
        getPermissions();
    }, []);

    const getPermissions = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Sorry, we need camera permissions to make this work!');
            }
            const mediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (mediaLibraryStatus.status !== 'granted') {
                Alert.alert('Sorry, we need media library permissions to make this work!');
            }
        }
    };

    const takePicture = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Button     color="black" title="Take Picture" onPress={takePicture} />
            <ThemedText type="default">or</ThemedText>
            <Button     color="black" title="Upload" onPress={pickImage} />
            {image && <Image 
            source={{ uri: image }} 
            style={{ width:   screenWidth * 0.9, height: screenWidth * 0.9 }}
            />}
        </View>
    );
};

export default Camera;