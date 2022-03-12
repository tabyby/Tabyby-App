import { useState } from 'react'
import { Picker, Text, View, Button, ScrollView ,TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Location({ navigation }) {
    const [selectedCountry, setSelectedCountry] = useState("tunis")
    const [country] = useState(
        [
            "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Bizerte", "Beja", "Jendouba", "Kasserine", "Kef", "Seliana", "Kairouan", "Sidi Bouzid", "Gafsa", "Tozeur", "Gbelli", "Tataouine", "Medenin", "Gabes", "Sfax", "Mahdia", "Monastir", "Sousse", "Zaghouane"
        ].sort())
    const presslogin = () => {
        navigation.navigate('Categories')
    }


    return (
        <ScrollView style={styles.container}>
            {/* <View style={styles.userCardRight} >
                {country.map((elem,i)=>(
                    <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                key={i}  >{elem}
                  </Text>
                ))}
            

                  </View> */}
                  <Text>chose your location</Text>
                  {country.map((elem,i)=>(
                  <TouchableOpacity
                style={styles.userCard}
               onPress={presslogin}
              >
                  
                  <View style={styles.userCardRight} key={i}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >{elem}</Text>
                  
                </View>
                
                
              </TouchableOpacity>))}
            {/* <Picker
                style={{ marginVertical: 10 }}
                SelectedValue={{ selectedCountry }}
                onValueChange={(itemVal) => {
                    setSelectedCountry(presslogin)
                }}>
                {country.map((c) => (<Picker.Item label={c} value={c} />))}
            </Picker> */}
        </ScrollView>
    )

}
