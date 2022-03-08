import React, { useLayoutEffect } from "react";
import { ScrollView, FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import MenuImage from "../../components/MenuImage/MenuImage";
import Blogs from '../Blogs/Blogs'

export default function CategoriesScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressCategory = () => {

    navigation.navigate("Location");
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCategory()}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.name}</Text>
        {/* <Text style={styles.category}>{getNumberOfRecipes(item.id)} doctors</Text> */}
      </View>
    </TouchableHighlight>
  );

  const renderAdds =()=>{
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
    <View style={styles.categoriesItemContainer}>
      <Image style={styles.categoriesPhoto}  source={{ uri: item.photo_url }} />
      <Text style={styles.categoriesName}>fddfd</Text>
      <Text style={styles.categoriesInfo}>yoooo</Text>
    </View>
  </TouchableHighlight>
  }

  return (
    <ScrollView>
      <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={6} renderItem={renderAdds} />
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={6} data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
      </View>
      <Blogs />
    </ScrollView>
  );
}