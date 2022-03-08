import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { categories, recipes } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";

export default function CategoriesScreen(props) {
  const { navigation } = props;

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitleStyle: {
  //       fontWeight: "bold",
  //       textAlign: "center",
  //       alignSelf: "center",
  //       flex: 1,
  //     },
  //     headerLeft: () => (
  //       <MenuImage
  //         onPress={() => {
  //           navigation.openDrawer();
  //         }}
  //       />
  //     ),
  //     headerRight: () => <View />,
  //   });
  // }, []);

  // const onPressCategory = (item) => {
  //   const title = item.name;
  //   const category = item;
  //   navigation.navigate("RecipesList", { category, title });
  // };

  const renderCategory = ({ item }) => (
    // <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCategory(item)}></TouchableHighlight>
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto}  source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>mlml</Text>
        <Text style={styles.categoriesInfo}>yoooo</Text>
        <Text>awwwwdd</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList data={recipes} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}