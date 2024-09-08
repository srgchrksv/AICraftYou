import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
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
  mainMessageSelected: {
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

export default styles;