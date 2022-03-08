

import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 5;
// item size
const RECIPE_ITEM_HEIGHT = 65;
const RECIPE_ITEM_OFFSET = 5;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 18;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: RECIPE_ITEM_OFFSET,
    marginTop: 30,
    width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT + 20
  },
  title: {
    margin: 0,
    marginBottom: 5,
    color: 'black',
    fontSize: 8,
    textAlign: 'center'
  },
  photo: {
    width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 60
  }
});



export default styles;