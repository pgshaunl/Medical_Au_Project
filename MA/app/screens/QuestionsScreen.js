import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-community/picker';
import FormButton from '../components/FormButton';

class QuestionsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: null,
            Burning:false,
            painValue:"Burning",
            locatedValue:"Middle"
        };
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:"white"}}>
                <Header/>
                <View>
                <ScrollView>
                    <Text style={styles.topText}>Adult Symptom</Text>
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
                                value={this.state.painValue==="Burning"}
                                onValueChange={(value) =>
                                    this.setState({
                                        painValue : "Burning"
                                    })}
                            />
                            <Text style={styles.label}>Burning</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={this.state.painValue==="Sudden"}
                                onValueChange={(value) =>
                                    this.setState({
                                        painValue : "Sudden"
                                    })}
                            />
                            <Text style={styles.label}>Sudden</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",width:"70%",marginLeft:1}}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={this.state.painValue==="Ongoing"}
                                onValueChange={(value) =>
                                    this.setState({
                                        painValue : "Ongoing"
                                    })}
                            />
                            <Text style={styles.label}>Ongoing</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={this.state.painValue==="Crampy"}
                                onValueChange={(value) =>
                                    this.setState({
                                        painValue : "Crampy"
                                    })}
                            />
                            <Text style={styles.label}>Crampy</Text>
                        </View>
                    </View>
                    <Text style={styles.leftLabel}>Pain located in:</Text>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.locatedValue==="Middle"}
                            onValueChange={(value) =>
                                this.setState({
                                    locatedValue : "Middle"
                                })}
                        />
                        <Text style={styles.label}>Middle adbomen</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.locatedValue==="Low"}
                            onValueChange={(value) =>
                                this.setState({
                                    locatedValue : "Low"
                                })}
                        />
                        <Text style={styles.label}>Low adbomen</Text>
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            value={this.state.locatedValue==="Upper"}
                            onValueChange={(value) =>
                                this.setState({
                                    locatedValue : "Upper"
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
                </ScrollView>
                </View>
                
                <View style={{alignItems:"center"}}>
                        <FormButton buttonTitle="See the result" onPress={()=>{
                                              this.props.navigation.navigate('Result')
                                          }}></FormButton>
                                
                       
                       
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topText: {
        margin:10,
        fontSize:20,
        fontWeight:"bold"
        
    },
    leftLabel: {
        margin:10,
        fontSize:16,
    },

    questionTitle: {
        flex: 1,
        flexDirection:"row",
        paddingLeft:5,
        marginTop:15,
        alignItems: "center"
    },
    questionText:{
        fontSize:14,
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

export default QuestionsScreen;
