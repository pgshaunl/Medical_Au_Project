import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-community/picker';


class QuestionsChildScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: null,
            Burning:false
        };
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:"white"}}>
                <Header/>
                <ScrollView>
                    <Text style={styles.topText}>Child Symptom</Text>
                    <View style={styles.questionTitle}>
                        <Image style={styles.image} source={require('../img/icons/ic_question.jpg')} resizeMode={"center"}></Image>
                        <View style={styles.border}>
                            <Picker
                                mode="dropdown"
                                selectedValue={this.state.language}
                                onValueChange={(lang) => this.setState({language: lang})}>
                                <Picker.Item label="Where are you uncomfortable?" value="Where" />
                                <Picker.Item label="Diarrhea" value="Diarrhea" />
                                <Picker.Item label="Anorexia" value="Anorexia" />
                                <Picker.Item label="Toothache" value="Toothache" />
                                <Picker.Item label="Stomachache" value="Stomachache" />
                                <Picker.Item label="...." value="...." />
                            </Picker>
                        </View>
                    </View>
                    <Text style={styles.leftLabel}>Pain is:</Text>
                    <View style={{flexDirection:"row",width:"70%",marginLeft:1}}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={this.state.Burning}
                                onValueChange={(value) =>
                                    this.setState({
                                        Burning : value
                                    })}
                            />
                            <Text style={styles.label}>Burning</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={this.state.Sudden}
                                onValueChange={(value) =>
                                    this.setState({
                                        Sudden : value
                                    })}
                            />
                            <Text style={styles.label}>Sudden</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",width:"70%",marginLeft:1}}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={this.state.Ongoing}
                                onValueChange={(value) =>
                                    this.setState({
                                        Ongoing : value
                                    })}
                            />
                            <Text style={styles.label}>Ongoing</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={this.state.Crampy}
                                onValueChange={(value) =>
                                    this.setState({
                                        Crampy : value
                                    })}
                            />
                            <Text style={styles.label}>Crampy</Text>
                        </View>
                    </View>
                    <Text style={styles.leftLabel}>Pain located in:</Text>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.Middle}
                            onValueChange={(value) =>
                                this.setState({
                                    Middle : value
                                })}
                        />
                        <Text style={styles.label}>Middle adbomen</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.Low}
                            onValueChange={(value) =>
                                this.setState({
                                    Low : value
                                })}
                        />
                        <Text style={styles.label}>Low adbomen</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.Upper}
                            onValueChange={(value) =>
                                this.setState({
                                    Upper : value
                                })}
                        />
                        <Text style={styles.label}>Upper adbomen</Text>
                    </View>
                    <View style={styles.questionTitle}>
                        <Image style={styles.image} source={require('../img/icons/ic_question.jpg')} resizeMode={"center"}></Image>
                        <Text style={styles.questionText}>Have you eaten the following foods ?</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.Watermelon}
                            onValueChange={(value) =>
                                this.setState({
                                    Watermelon : value
                                })}
                        />
                        <Text style={styles.label}>Watermelon</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.Ice}
                            onValueChange={(value) =>
                                this.setState({
                                    Ice : value
                                })}
                        />
                        <Text style={styles.label}>Ice-cream</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.Sea}
                            onValueChange={(value) =>
                                this.setState({
                                    Sea : value
                                })}
                        />
                        <Text style={styles.label}>Sea-food</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.Beer}
                            onValueChange={(value) =>
                                this.setState({
                                    Beer : value
                                })}
                        />
                        <Text style={styles.label}>Beer</Text>
                    </View>

                    <View style={{flexDirection:"row-reverse",marginRight:10}}>

                        <TouchableOpacity style={styles.rowItem}
                                          onPress={()=>{
                                              this.props.navigation.navigate('ResultAdult')
                                          }}>
                            <Image style={styles.image} source={require('../img/icons/right-arrow.jpg')} resizeMode={"center"}></Image>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    topText: {
        margin:10,
        fontSize:20,
        color: "#2243e3",
        textDecorationLine:"underline"
    },
    leftLabel: {
        margin:10,
        fontSize:16,
        textDecorationLine:"underline"
    },

    questionTitle: {
        flex: 1,
        flexDirection:"row",
        paddingLeft:5,
        marginTop:15,
        alignItems: "center"
    },
    questionText:{
        fontSize:16,
        height:40,
        textAlign:"center",
        borderWidth:1.5,
        borderRadius:16,
        padding:5,
        borderColor:"#E5E5E5",
        lineHeight:30,
    },
    border:{
        width:"75%",
        height: 40,
        borderWidth:1.5,
        borderRadius:16,
        borderColor:"#E5E5E5",
        justifyContent:"center"
    },
    image:{
        width:30,
        height:30,
        marginRight:10
    },
    checkboxContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    }
});

export default QuestionsChildScreen;
