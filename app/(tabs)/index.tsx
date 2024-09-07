import { Image, StyleSheet, Pressable, Button, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Camera from '@/components/Camera';
import Stability from '@/components/Stability';
import Confetti from '@/components/Confetti';

const { width: screenWidth } = Dimensions.get('window');


export default function HomeScreen() {
  const [selected, setSelected] = useState('');
  const [image, setImage] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string>('');
  const [message, setMessage] = useState('');
  const [craft, setCraft] = useState('Begin crafting?');
  const [billing, setBilling] = useState(false);
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;

  const beginCraftingText = 'Start';
  const startOverText = 'Click here to start over';

  const handleOrder = async () => {
    setMessage(`Congratulations, your awesome crafted ${selected} is on the way 😁`);
    setBilling(!billing);
    setImage('');
    setSelected('');
  }

  useEffect(() => {
    if (generatedImage) {
      setBilling(true)
    }
  }, [generatedImage])

  return (
    <ParallaxScrollView headerBackgroundColor={{
      dark: '',
      light: '',
    }}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="title" style={{ textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 1, borderStyle: 'dashed', width: screenWidth }}>AICraftYou</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type='subtitle' style={{ textAlign: 'center' }}> 🧸 🎂 🎁 🦖 ✨ 🚀 🦄 🍬 🎡 </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer } >
        <Pressable
          onPress={() => {
            if (craft === beginCraftingText) {
              setCraft(startOverText)
              setMessage('')
            } else {
              setCraft(beginCraftingText)
              setImage('')
              setSelected('')
              setMessage('')
              setBilling(false)
            }
          }
          }
          style={({ pressed }) => [
            styles.beginCrafting,
            (pressed || craft === startOverText) && styles.craftSelected,
          ]}
        >
          <ThemedText type="default" style={{  fontSize: craft != startOverText ? 23 :15 }}>{craft}</ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
        <Image
          source={require('@/assets/sketch.jpeg')}
          style={{ transform: [{ rotate: '345deg' }], width: screenWidth * 0.4, height: screenWidth * 0.4 }}
        />
        <Image
          source={require('@/assets/toy.png')}
          style={{ transform: [{ rotate: '15deg' }], width: screenWidth * 0.4, height: screenWidth * 0.4 }}
        />
      </ThemedView>

      {!message && (<ThemedView style={styles.stepContainer}>
        <ThemedText type='defaultSemiBold'>Use it to superpower your creatives</ThemedText>
        <ThemedText>Bring your sketch to life</ThemedText>
      </ThemedView>)}

      {(craft != beginCraftingText && !message) && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type='defaultSemiBold'>Follow the steps:</ThemedText>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type='defaultSemiBold' >Step 1:</ThemedText>
            <ThemedText type='subtitle' style={styles.stepText}>What to craft?</ThemedText>
          </ThemedView>
          <ThemedView style={styles.container}>
            <Pressable
              onPress={() => {
                if (selected != 'TOY') {
                  setSelected('TOY')
                } else {
                  setSelected('')
                  setImage('')
                }
              }
              }
              style={({ pressed }) => [
                styles.choice,
                (pressed || selected === 'TOY') && styles.choiceSelected,
              ]}
            >
              <ThemedText type="default">TOY</ThemedText>
            </Pressable>
            <Pressable
              onPress={() => {
                if (selected != 'CAKE') {
                  setSelected('CAKE')
                } else {
                  setSelected('')
                  setImage('')
                }
              }
              }
              style={({ pressed }) => [
                styles.choice,
                (pressed || selected === 'CAKE') && styles.choiceSelected,
              ]}
            >
              <ThemedText type="default">CAKE</ThemedText>
            </Pressable>
          </ThemedView>
        </ThemedView>)}

      {selected && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type='defaultSemiBold'>Step 2: </ThemedText>
          <ThemedText type='subtitle' style={styles.stepText}>Create your dream {selected} sketch and then take a picture or upload it:</ThemedText>
          <Camera
            setImage={setImage}
            image={image}
          />
        </ThemedView>
      )}
      {image &&
        <ThemedView style={styles.stepContainer}>
          <ThemedText type='defaultSemiBold'>Step 3:</ThemedText>
          <ThemedText type='subtitle' style={styles.stepText}>Now we need to do some {selected} magic</ThemedText>
          <Stability
            apiKey={apiKey as string}
            image={image}
            typeToGenerate={selected}
            generatedImage={generatedImage}
            setGeneratedImage={setGeneratedImage}
          />
        </ThemedView>}

      {billing && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type='defaultSemiBold'>Step 4:</ThemedText>
          <ThemedText type='subtitle' style={styles.stepText}>Lets {selected === 'CAKE' ? 'bake' : 'make'} your {selected} to life?</ThemedText>
          <ThemedView style={{}}>
            <ThemedText style={{ borderStyle: 'dashed', borderBottomColor: 'black', borderBottomWidth: 1 }}><ThemedText type='defaultSemiBold'>Total:</ThemedText> 50</ThemedText>
            <ThemedText><ThemedText type='defaultSemiBold'>Payment:</ThemedText> Card *********0000</ThemedText>
            <ThemedText><ThemedText type='defaultSemiBold'>Delivery adress:</ThemedText> Crafting St 1, Magicville</ThemedText>
          </ThemedView>
          <Button color="black" title="Craft" onPress={handleOrder} />
        </ThemedView>
      )}
      {message && (
        <ThemedView style={styles.stepContainer}>
          <Image
            source={require('@/assets/toy.png')}
            style={{ width: screenWidth * 0.9, height: screenWidth * 0.9 }}
          />
          <ThemedText style={{ textAlign: 'center', color: 'lime', textShadowColor: 'yellow', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 4 }}>{message}</ThemedText>
          <Confetti />
        </ThemedView>)
      }
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
  beginCrafting: {
    fontWeight: 'bold',
    borderWidth: 3,
    backgroundColor: 'lime',
    borderColor: 'black',
    borderRadius: 100,
    width: 300,
    height: 200,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  craftSelected: {
    borderColor: 'red',
    borderStyle: 'dashed',
    backgroundColor: 'white',
    borderWidth: 3,
    width: 200,
    height: 50,
    marginTop: 0,
  },
  stepText: {
    width: screenWidth,
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  }

});
