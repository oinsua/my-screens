import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import { Avatar, Image, Divider, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Travels = (props) => {


    return (
    <ScrollView>
       <View>
           <View style={styles.viewTitle}>
               <Text style={styles.title}>Mis Viajes</Text>
               <Button style={styles.button}
                    icon={
                        <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                        />
                    }
                    onPress={() => props.navigation.navigate('Form')}
                    />
           </View>

           <View style={styles.ViewMar}>
             <View style={styles.container}>
                <View style={styles.viewContainer1}>
                    <Avatar source={require('../assets/ubicacion.png')} rounded style={styles.avatar}/>
                    <View>
                        <View>
                            <Text >28/02/2020 08:45 PM</Text>
                        </View>
                        <View>
                            <Text style={styles.textGrosor}>FORD KA ASL244</Text>
                        </View>
                    </View>

                    <View style={styles.margView}>
                        <View>
                        <Image  source={require('../assets/ranking.png')} style={{ width: 75, height: 15 }} PlaceholderContent={<ActivityIndicator />}/>
                        </View>
                        <View>
                            <Text style={styles.textGrosor}>$354</Text>
                        </View>
                    </View>
                </View>
                <Image  source={require('../assets/map.png')} style={{ width: 320, height: 130 }} PlaceholderContent={<ActivityIndicator />}/>
            </View>
                
           </View>

           <Divider style={{ backgroundColor: '#BE00F5' }} />;

           <View style={styles.ViewMar}>
             <View style={styles.container}>
                <View style={styles.viewContainer1}>
                    <Avatar source={require('../assets/ubicacion.png')} rounded style={styles.avatar}/>
                    <View>
                        <View>
                            <Text >28/02/2020 08:45 PM</Text>
                        </View>
                        <View>
                            <Text style={styles.textGrosor}>FORD KA ASL244</Text>
                        </View>
                    </View>

                    <View style={styles.margView}>
                        <View>
                        <Image  source={require('../assets/ranking.png')} style={{ width: 75, height: 15 }} PlaceholderContent={<ActivityIndicator />}/>
                        </View>
                        <View>
                            <Text style={styles.textGrosor}>$354</Text>
                        </View>
                    </View>
                </View>
                <Image  source={require('../assets/map.png')} style={{ width: 320, height: 130 }} PlaceholderContent={<ActivityIndicator />}/>
            </View>
                
           </View>

           <Divider style={{ backgroundColor: '#BE00F5' }} />;

           <View style={styles.ViewMar}>
             <View style={styles.container}>
                <View style={styles.viewContainer1}>
                    <Avatar source={require('../assets/ubicacion.png')} rounded style={styles.avatar}/>
                    <View>
                        <View>
                            <Text >28/02/2020 08:45 PM</Text>
                        </View>
                        <View>
                            <Text style={styles.textGrosor}>FORD KA ASL244</Text>
                        </View>
                    </View>

                    <View style={styles.margView}>
                        <View>
                        <Image  source={require('../assets/ranking.png')} style={{ width: 75, height: 15 }} PlaceholderContent={<ActivityIndicator />}/>
                        </View>
                        <View>
                            <Text style={styles.textGrosor}>$354</Text>
                        </View>
                    </View>
                </View>
                <Image  source={require('../assets/map.png')} style={{ width: 320, height: 130 }} PlaceholderContent={<ActivityIndicator />}/>
            </View>
                
           </View>

           <Divider style={{ backgroundColor: '#BE00F5' }} />;

           <View style={styles.ViewMar}>
             <View style={styles.container}>
                <View style={styles.viewContainer1}>
                    <Avatar source={require('../assets/ubicacion.png')} rounded style={styles.avatar}/>
                    <View>
                        <View>
                            <Text >28/02/2020 08:45 PM</Text>
                        </View>
                        <View>
                            <Text style={styles.textGrosor}>FORD KA ASL244</Text>
                        </View>
                    </View>

                    <View style={styles.margView}>
                        <View>
                        <Image  source={require('../assets/ranking.png')} style={{ width: 75, height: 15 }} PlaceholderContent={<ActivityIndicator />}/>
                        </View>
                        <View>
                            <Text style={styles.textGrosor}>$354</Text>
                        </View>
                    </View>
                </View>
                <Image  source={require('../assets/map.png')} style={{ width: 320, height: 130 }} PlaceholderContent={<ActivityIndicator />}/>
            </View>
                
           </View>
       </View>
       
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'flex-start',
        marginBottom: 10,
        width: 320,
    },
    viewContainer1: {
        flex: 1,
        flexDirection: 'row',
        padding:0,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
        color: '#BE00F5',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 15,
    },
    avatar:{
        margin: 0,
        padding: 0,
        textAlign: 'left',
        width: 25,
        height: 25,
        marginLeft: 20,
    },
    raiting: {
        fontSize: 10,
        color: '#BE00F5',
    },
    textGrosor: {
        fontWeight: 'bold',
    },
    margView:{
        marginLeft: 60,
    },
    ViewMar: {
        marginBottom: 10,
    },
    viewTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:0,
    },
    button:{
        marginRight: 10,
        marginTop: 10,
    }

})

export default Travels
