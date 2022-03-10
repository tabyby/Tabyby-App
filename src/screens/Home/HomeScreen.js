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
    <TouchableHighlight underlayColor="#fff" onPress={() => onPressCategory()}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.name}</Text>
        {/* <Text style={styles.category}>{getNumberOfRecipes(item.id)} doctors</Text> */}
      </View>
    </TouchableHighlight>
    
  );
 

  // const renderAdds =()=>{
  //   <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
  //   <View style={styles.categoriesItemContainer}>
  //     <Image style={styles.categoriesPhoto}  source={{ uri: item.photo_url }} />
  //     <Text style={styles.categoriesName}>fddfd</Text>
  //     <Text style={styles.categoriesInfo}>yoooo</Text>
  //   </View>
  // </TouchableHighlight>
  // }

  return (
    <ScrollView>
      <View>
      {/* <FlatList vertical showsVerticalScrollIndicator={false} numColumns={6} renderItem={renderAdds} /> */}
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={6} data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
      </View>
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto}  source={{
          uri: 'https://fscluster.org/sites/default/files/styles/core-group-featured-image/public/banner-696x321.png?itok=l7uFday9',
        }}  />
        <Text style={styles.categoriesName}></Text>
        <Text style={styles.categoriesInfo}>Covid-19: The end!</Text>
        <Text>By doctor Mortadha</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto}  source={{
          uri: 'https://mi-hub.com/wp-content/uploads/2019/02/maintaining-a-healthy-lifestyle.jpeg',
        }}  />
        <Text style={styles.categoriesName}></Text>
        <Text style={styles.categoriesInfo}>Be healthy!</Text>
        <Text>By doctor Lotfi</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto}  source={{
          uri: 'https://img.passeportsante.net/1000x526/2020-01-07/i93183-.jpeg',
        }}  />
        <Text style={styles.categoriesName}></Text>
        <Text style={styles.categoriesInfo}>Winter is coming: Are you ready?</Text>
        <Text>By doctor Marwa</Text>
      </View>
    </TouchableHighlight>
    </ScrollView>
  );
}