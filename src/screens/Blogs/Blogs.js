import React, { useLayoutEffect, useRef, useState } from "react";
import { ScrollView, Text, View, Image, Dimensions, TouchableHighlight,image } from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { getIngredientName, getCategoryName, getCategoryById } from "../../data/MockDataAPI";
import {doctor} from "../Categories/CategoriesScreen"
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import Calendar from '../Calender/Calender'


const { width: viewportWidth } = Dimensions.get("window");

export default function Blogs(props) {
  const { navigation, route } = props;

  const item = route.params?.item;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category.id);

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.profilePicture }} />
      </View>
    </TouchableHighlight>
  );

  const onPressIngredient = (item) => {
    var name = getIngredientName(item);
    let ingredient = item;
    navigation.navigate("Ingredient", { ingredient, name });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
      <Image style={styles.imageContainer}  source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00bEG-Dg_zwvNP2jW-MLoVUrngi8-jcv_Fg&usqp=CAU',
        }}  />
        <View style={styles.carousel}>
        </View>
      </View>
      <View style={styles.infoRecipeContainer}>

        <Text style={styles.infoRecipeName}>{item.firstName} {item.lastName}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight onPress={() => navigation.navigate("Appointement", { category, title })}>
            {/* <Text style={styles.category}>{getCategoryName(item.categoryId).toUpperCase()}</Text> */}
          </TouchableHighlight>
        </View>
        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              let ingredients = item.ingredients;
              let title = "Ingredients for " + item.title;
              navigation.navigate("Appointement", { ingredients, title });
            }}
          />
        </View>
        <View style={styles.infoContainer}>

          <Text style={styles.userCard}>{item.description}</Text>
        </View>
      </View>

    </ScrollView>
  );
}