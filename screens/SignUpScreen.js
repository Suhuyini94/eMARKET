import React from "react";
import { View, Text, SafeAreaView, TextInput, Image, } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "./const/color";
import STYLES from "./styles";

export default function SignUpScreen(params) {
    const navigation = params.navigation;
    return (
        <SafeAreaView style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 60 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.dark }}>EDGE</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.secondary }}>TECH</Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <Text style={{ fontsize: 27, fontWeight: 'bold', color: COLORS.dark }}>
                        Welcome Back,</Text>
                    <Text style={{ fontsize: 27, fontWeight: 'bold', color: COLORS.light }}>
                        Sign up to continue</Text>

                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}></View>
                    <Icon
                        name='person-outline'
                        size={20}
                        color={COLORS.light}
                        style={STYLES.inputIcon}

                    />

                    <TextInput
                        placeholder='First Name'
                        style={STYLES.input}

                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}></View>
                    <Icon
                        name='person-outline'
                        size={20}
                        color={COLORS.light}
                        style={STYLES.inputIcon}

                    />

                    <TextInput
                        placeholder='Last Name'
                        style={STYLES.input}

                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}></View>
                    <Icon
                        name='mail-outline'
                        size={20}
                        color={COLORS.light}
                        style={STYLES.inputIcon}

                    />

                    <TextInput
                        placeholder='Email'
                        style={STYLES.input}

                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}></View>
                    <Icon name='lock-outline' size={20} color={COLORS.light} style={STYLES.inputIcon} />

                    <TextInput
                        placeholder='Password'
                        style={STYLES.input}
                        secureTextEntry
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}></View>
                    <Icon name='lock-outline' size={20} color={COLORS.light} style={STYLES.inputIcon} />

                    <TextInput
                        placeholder='Confirm Password'
                        style={STYLES.input}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity>
                    <View style={STYLES.buttonPrimary} >
                        <Text
                            style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 18 }} >
                            Sign Up
                        </Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <View style={{
                        marginVertical: 20,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={STYLES.line}></View>
                        <Text style={{ fontWeight: 'bold', marginHorizontal: 5 }}>OR</Text>
                        <View style={STYLES.line}></View>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity>
                            <View style={STYLES.buttonSecondary}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 15 }}>Sign up with</Text>
                                <Image style={STYLES.buttonImage} source={require('../assets/facebook-logo.png')} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ width: 10 }} />

                        <TouchableOpacity>
                            <View style={STYLES.buttonSecondary}>
                                <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 15 }}>Sign up with</Text>
                                <Image style={STYLES.buttonImage} source={require('../assets/google-logo.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    marginTop: 40,
                    marginBottom: 20,
                }}>
                    <Text style={{ color: COLORS.light, fontWeight: 'bold' }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIN')}
                    >
                        <Text
                            style={{
                                color: COLORS.pink,
                                fontWeight: 'bold',
                                paddingHorizontal: 5,
                            }}>
                            Sign in
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </SafeAreaView>

    );
}