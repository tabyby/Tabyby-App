import {useState} from 'react'
import { Picker,Text,View,Button} from 'react-native'

export default function Location ({navigation}){
    const [selectedCountry,setSelectedCountry]=useState("tunis")
const [country]=useState(
    [
        "Tunis","Ariana", "Ben Arous", "Manouba", "Nabeul", "Bizerte", "Beja", "Jendouba", "Kasserine", "Kef", "Seliana", "Kairouan", "Sidi Bouzid", "Gafsa", "Tozeur", "Gbelli", "Tataouine", "Medenin", "Gabes", "Sfax", "Mahdia", "Monastir", "Sousse", "Zaghouane"
    ].sort())
    const presslogin=()=>{
        navigation.navigate('Categories')
      }
    
    
    return(
        
        <Picker 
            style={{marginVertical:10}}
            SelectedValue={{selectedCountry}}
            onValueChange={(itemVal)=>{
            setSelectedCountry(presslogin)
            }}>
            {country.map((c)=>(<Picker.Item label={c} value={c} />)) }
           
        </Picker>
        
    )

}
