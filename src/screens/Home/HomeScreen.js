import React, { useLayoutEffect,useEffect,useState } from "react";
import { ScrollView, FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import Blogs from '../Blogs/Blogs'
import axios from 'axios'

export default function CategoriesScreen(props) {
  const { navigation } = props;
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    var ip= "http://192.168.250.37:3000"
  axios.get(`${ip}/doctor/api/selectBlogs`).then(res=>{
   setblogs(res.data)
   console.log(res.data);
  }).catch(err=>{console.log(err);})
  },[])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        color: 'white',
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

  const onPressBlogs = () => {
    navigation.navigate("Blogs");
  };

  const renderBlogs = ({ item })=>(
    <TouchableHighlight underlayColor="#fff" onPress={()=> onPressBlogs()}>
        <View style={styles.categoriesItemContainer}>
          <Image style={styles.categoriesPhoto} source={{uri: item.img }} />
          <Text style={styles.categoriesName}></Text>
          <Text style={styles.categoriesInfo}>{item.title}</Text>
          {/* <Text>By doctor Mortadha</Text> */}
        </View>
      </TouchableHighlight>
  );

  const renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor="#fff" onPress={() => onPressCategory()}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <ScrollView>
      <View>
        <Text style={styles.TitleText}>   Speciality</Text>
        <FlatList horizontal showsVerticalScrollIndicator={false} data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
        <Text style={styles.TitleText}>   Blogs</Text>
        <FlatList vertical showsVerticalScrollIndicator={false} numColumns={1} data={blogs} renderItem={renderBlogs} keyExtractor={(item) => `${item.id_blog}`} />
      </View>
    </ScrollView>
  );
}