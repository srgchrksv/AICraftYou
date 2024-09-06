import { Image, StyleSheet, Platform, Pressable, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Camera from '@/components/Camera';
import Stability from '@/components/Stability';
import Confetti from '@/components/Confetti';




export default function HomeScreen() {
  const [selected, setSelected] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;


  const handleOrder = async () => {
    setMessage(`Soon you will receive your ${selected.toUpperCase()} 😁`);
  }

  return (
    <ParallaxScrollView headerBackgroundColor={{
      dark: '',
      light: ''
    }}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title">AICraftYou</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText  type='subtitle' style={{ textAlign: 'center' }}> 🧸 🎂 🎁 🦖 ✨ 🚀 🦄 🍬 🎡 </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText >Use it with your creative superpowers</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='defaultSemiBold' >Step 1:</ThemedText>
        <ThemedText type='subtitle'>What you want to create?</ThemedText>
      </ThemedView>

      <ThemedView style={styles.container}>
        <Pressable
          onPress={() => {
            if (selected != 'Toy') {
              setSelected('Toy')
            } else {
              setSelected('')
              setImage(null)
            }
          }
          }
          style={({ pressed }) => [
            styles.choice,
            (pressed || selected === 'Toy') && styles.choiceSelected,
          ]}
        >
          <ThemedText type="default">Toy</ThemedText>
        </Pressable>
        <Pressable
          onPress={() => {
            if (selected != 'Cake') {
              setSelected('Cake')
            } else {
              setSelected('')
              setImage(null)
            }
          }
          }
          style={({ pressed }) => [
            styles.choice,
            (pressed || selected === 'Cake') && styles.choiceSelected,
          ]}
        >
          <ThemedText type="default">Cake</ThemedText>
        </Pressable>
      </ThemedView>
      {selected && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type='defaultSemiBold'>Step 2: </ThemedText>
            <ThemedText type='subtitle' style={{ textAlign: 'center' }}>Create your dream sketch and then take a picture or upload it:</ThemedText>
          <Camera
            setImage={setImage}
            image={image}
          />
        </ThemedView>
      )}
      {image &&
        <ThemedView style={styles.stepContainer}>
          <ThemedText type='defaultSemiBold'>Step 3:</ThemedText>
          <ThemedText  type='subtitle' style={{ textAlign: 'center' }}>Now we need to do some {selected.toUpperCase()} magic</ThemedText>
          <Stability
            apiKey={apiKey as string}
            image={image}
            typeToGenerate={selected}
            setGeneratedImage={setGeneratedImage}
          />
        </ThemedView>}

      {generatedImage && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type='defaultSemiBold'>Step 4:</ThemedText>
          <ThemedText  type='subtitle' style={{ textAlign: 'center' }}>Lets {selected === 'Cake' ? 'bake' : 'make'} your {selected.toUpperCase()} to life?</ThemedText>
          <Button color="black" title="Make it real" onPress={handleOrder} />
        </ThemedView>
      )}
      {message && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText >{message}</ThemedText>
          <Confetti />
        </ThemedView>)}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  choice: {
    fontWeight: 'bold',
    borderWidth: 3,
    borderColor: 'black',
    width: 100,
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  choiceSelected: {
    borderColor: 'lime',
    borderStyle: 'dashed',
    borderWidth: 3,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

});
