import React from 'react' ;
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class SignUpComponent extends React.Component {
   
    constructor(props) {
        super(props);
        this.state={
            borderColor: null
        }
    }

    onFocus(value){
        this.setState({
            borderColor: value
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Kayıt Ol</Text>
                <Text style={styles.text}>Lütfen E-posta adresinizi ve şifrenizi giriniz. </Text>
                <View style={styles.action}>
                    <View style={[styles.section, { 
                        borderColor: this.state.borderColor=='email' ?
                        '#3465d9' : 'gray'
                     }]}>
                        <MaterialIcons name='email' size={20}
                            color={this.state.borderColor=='email' ? '#3465d9' : 'gray'}
                        />
                        <TextInput 
                            placeholder='E-posta Adresi'
                            style={[styles.textInput,{
                                borderColor: this.state.borderColor=='email' ?
                                '#3465d9' : 'gray'
                            }]}
                            onFocus={()=>this.onFocus('email')}
                        />
                    </View>
                    <View style={[styles.section,{
                        borderColor: this.state.borderColor=='password' ?
                        '#3465d9' : 'gray'
                     }]}>
                        <MaterialIcons name='lock-outline' size={20}
                            color={this.state.borderColor=='password' ? '#3465d9' : 'gray'} />
                        <TextInput 
                            placeholder='Şifre'
                            style={[styles.textInput, {
                                borderColor: this.state.borderColor=='password' ?
                                '#3465d9' : 'gray'
                            }]}
                            
                            secureTextEntry
                            onFocus={()=>this.onFocus('password')}
                        />
                    </View>
                    <View style={[styles.section,{
                        borderColor: this.state.borderColor=='rpassword' ?
                        '#3465d9' : 'gray'
                     }]}>
                        <MaterialIcons name='lock-outline' size={20}
                            color={this.state.borderColor=='rpassword' ? '#3465d9' : 'gray'} />
                        <TextInput 
                            placeholder='Şifre(Tekrar)'
                            style={[styles.textInput, {
                                borderColor: this.state.borderColor=='rpassword' ?
                                '#3465d9' : 'gray'
                            }]}
                            
                            secureTextEntry
                            onFocus={()=>this.onFocus('rpassword')}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textLogin}>Kayıt Ol</Text>
                </TouchableOpacity>
                <View style={styles.buttonSignup}>
                <Text style={[styles.textSignup, {
                        color: 'gray'
                    }]}>Üyeliğiniz var ise </Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoginScreen')}>
                        <Text style={[styles.textSignup, {
                            color: '#3465d9',
                            marginLeft: 3
                        }]}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 100
    },

    title: {
        color: '#3465d9',
        fontWeight: 'bold',
        fontSize: 30
    },

    text: {
        color: 'gray'
    },

    section: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 10
    },

    textInput: {
        flex: 1,
        paddingLeft: 10
    },

    forgot: {
        textAlign: 'right',
        marginTop: 15,
        color: '#3465d9'
    },

    textLogin: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },

    buttonLogin: {
        width: '100%',
        height: 40,
        backgroundColor: '#3465d9',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        borderRadius: 50
    },

    buttonSignup: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    }

});