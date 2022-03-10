import React, { useLayoutEffect, useRef, useState } from "react";
import { ScrollView, Picker, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-datepicker'


export default function Appointement() {
    const [selectedCountry, setSelectedCountry] = useState("")
    const [country] = useState(
        [
            "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
        ].sort())
    const [date, setDate] = useState('')
    return (
        <ScrollView backgroundColor= 'white' style={styles.container}>
            <View>
                <Text style={styles.text}>Set the day:</Text>
            </View>
            <Text></Text>

            <DatePicker
                style={{ width: '100%' }}
                date={date}
                placeholder='select date'
                format='DD-MM-YY'
                confirmBtnText="confirm"
                cancelBtnText="cancel"
                onDateChange={(d) => setDate(d)
                }

            />
            <Text></Text>
                <Text style={styles.text}>Set the time:</Text>
                <Text></Text>
            <Picker
                style={{ marginVertical: 10 }}
                SelectedValue={{ selectedCountry }}
            // onValueChange={(itemVal)=>{
            // setSelectedCountry(presslogin)
            // }}
            >
                {country.map((c) => (<Picker.Item label={c} value={c} />))}

            </Picker>
            <Text></Text>

            <View>
            </View>
            <Text></Text>

            <View
                style={{
                    // display: 'flex',
                    // flexDirection: 'row',
                    // alignItems: 'center'
                }}>
                <Text style={{ fontSize: 18, fontWeight: '400' }}>Name:</Text>
                <TextInput style={{ flex: 1, height: 44, backgroundColor: '#fff', marginLeft: 10, borderRadius: 8, paddingHorizontal: 10 }}
                    placeholder='full name'
                />
            </View>
            <View
                style={{
                    // // display: 'flex',
                    // flexDirection: 'row',
                    // alignItems: 'center'
                }}>
                <Text style={{ fontSize: 18, fontWeight: '400' }}>Phone number:</Text>
                <TextInput style={{ flex: 1, height: 44, backgroundColor: '#fff', marginLeft: 10, borderRadius: 8, paddingHorizontal: 10 }}
                    placeholder='xx xxx xxx'
                />
            </View>
            <View
                style={{
                    // // display: 'flex',
                    // flexDirection: 'row',
                    // alignItems: 'center'
                }}>
                <Text style={{ fontSize: 18, fontWeight: '400' }}>Date of birth:</Text>
                <TextInput style={{ flex: 1, height: 44, backgroundColor: '#fff', marginLeft: 10, borderRadius: 8, paddingHorizontal: 10 }}
                    placeholder='dd/mm/yy'
                />
            </View>
            <Text></Text>

            <TouchableOpacity
                style= {styles.roundedButton}
            >
                
                <Text style={styles.buttonText}>
                    validate 
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    basicTextInput: {
        width: '100',
        height: 44,
        backgroundColor: '#f1f3f6',
        borderRadius: 6,
        paddingHorizontal: 10
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    roundedButton: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 40,
        backgroundColor: '#1B9CFC',
        borderRadius: 1000,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 2 , height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16 
    },
        container: {
          flex: 1,
          padding: 40,
        },
})