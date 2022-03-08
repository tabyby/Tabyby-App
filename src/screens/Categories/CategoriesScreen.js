import React, { useLayoutEffect,useEffect,useState } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName} from "../../data/MockDataAPI";
import axios from "axios";

export default function HomeScreen(props) {
  const { navigation } = props;
  const [doctor, setdoctors] = useState([]);
  useEffect(() => {
    var ip= "http://192.168.1.191:3000"
  axios.get(`${ip}/doctor/doctors`).then(res=>{
   setdoctors(res.data)
  }).catch(err=>{console.log(err);})
  },[])

  useLayoutEffect(() => {
    navigation.setOptions({
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

  const onPressRecipe = (item) => {
    navigation.navigate("Doctor profile", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)} >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.profilePicture }} />
        <Text style={styles.title}>{item.firstName}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={doctor} renderItem={renderRecipes} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}