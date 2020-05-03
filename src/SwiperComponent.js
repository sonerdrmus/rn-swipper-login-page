import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

export default class SwiperComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            animation_signup: null,
            animation_login: null,
            show: false
        }
    }

    onIndexChanged(index) {
        if(index==2) {
            this.setState({
                animation_signup: 'bounceInLeft',
                animation_login: 'bounceInRight',
                show: true
            });
        }else {
            this.setState({
                animation_signup: null,
                animation_login: null,
                show: false
            })
        }
    }

    render(){
        return(
            <Swiper
                loop={false}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                onIndexChanged={(index) => this.onIndexChanged(index)} >

                <View style={styles.silde}>
                    <View style={styles.header}>
                        <Image 
                            source={require('./assets/asset1.png')}
                            style={styles.image}
                            resizeMode={'stretch'}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Hoşgeldiniz!</Text>
                        <Text style={styles.text}>Benzersiz içeriklerin yer aldığı uygulamamızı sizlere sunuyoruz</Text>
                    </View>
                </View>

                <View style={styles.silde}>
                    <View style={styles.header}>
                        <Image 
                            source={require('./assets/asset2.png')}
                            style={styles.image}
                            resizeMode={'stretch'}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Kayıt Ol veya Giriş Yap</Text>
                        <Text style={styles.text}>Ücretsiz kayıt ol ve kolayca giriş yap</Text>
                    </View>
                </View>

                <View style={styles.silde}>
                    <View style={styles.header}>
                        <Image 
                            source={require('./assets/asset2.png')}
                            style={styles.image}
                            resizeMode={'stretch'}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.title}>Kullanmaya Başla!</Text>
                        <Text style={styles.text}>Kolay kullanım arayüzü ve benzersiz içeriklere ulaşmanın kolay yolu</Text>
                        { this.state.show ? 
                            <View style={{flexDirection: 'row'}}>
                                <Animatable.View
                                animation={this.state.animation_signup}
                                delay={0}
                                duration={1500}
                                useNativeDriver>
                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('SignScreen')}
                                    style={[styles.button, {
                                        borderColor: '#3465d9',
                                        borderWidth: 1,
                                        borderRadius: 50,
                                        marginTop: 15
                                    }]}>
                                        <Text style={{color: '#3465d9'}}>Kayıt Ol</Text>
                                    </TouchableOpacity>
                                </Animatable.View>

                                <Animatable.View
                                animation={this.state.animation_login}
                                delay={0}
                                duration={1500}
                                useNativeDriver>
                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                                    style={[styles.button, {
                                        backgroundColor: '#3465d9',
                                        borderWidth: 1,
                                        borderRadius: 50,
                                        marginTop: 15,
                                        marginLeft: 20
                                    }]}>
                                        <Text style={{color: '#fff'}}>Giriş Yap</Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            </View>
                        :null }
                    </View>
                </View>

            </Swiper>
        )
    }
}

const {width, height} = Dimensions.get('screen');
const height_image = height * 0.4 * 0.8;
const width_image = height_image * 1.1; 
const width_button = width * 0.3;

var styles = StyleSheet.create({
    silde: {
        flex:1,
        backgroundColor: 'white'
    },
    header: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex:1,
        alignItems:'center',
        paddingHorizontal: 20
    },
    image: {
        height: height_image,
        width: width_image
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    text: {
        color: 'gray',
        textAlign: 'center',
        marginTop: 20
    },
    dot: {
        backgroundColor: 'rgba(52,101,217,.4)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        marginVertical: 3
    },
    activeDot: {
        backgroundColor: '#3465d9',
        width: 20,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5, 
        marginVertical: 3
    },
    button: {
        width: width_button,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})