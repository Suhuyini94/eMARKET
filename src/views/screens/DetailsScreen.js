import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
const DetailsScreen = ({ navigation, route }) => {
  const laptop = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={STYLES.header}>
        <View style={STYLES.headerButton}>
          <Icon name="chevron-left" size={25} onPress={navigation.goBack} />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Details</Text>
        <View style={STYLES.headerButton}>
          <Icon name="dots-vertical" size={25} color={COLORS.primary0} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* laptop image */}

        <ImageBackground
          resizeMode="cover"
          style={STYLES.backgroundImage}
          source={laptop.image}>
          <View
            style={{
              height: 60,
              width: 70,
              backgroundColor: COLORS.primary0,
              position: 'absolute',
              borderTopLeftRadius: 15,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.white,
                  fontWeight: 'bold',
                }}>
                4.5
              </Text>
            </View>
            <Text
              style={{ fontSize: 9, color: COLORS.white, fontWeight: 'bold' }}>
              250 Reviews
            </Text>
          </View>
        </ImageBackground>

        <View style={STYLES.detailsContainer}>
          <Text
            style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.primary0 }}>
            {laptop.name}
          </Text>
          <Text
            style={{
              marginVertical: 20,
              fontWeight: 'bold',
              fontSize: 16,
              color: COLORS.primary0,
            }}>
            Description
          </Text>
          <Text style={{ color: COLORS.dark, fontSize: 12, lineHeight: 20 }}>
            Apple M1 chip with 8-core CPU, 8-core GPU, and 16-core Neural Engine
            8GB unified memory
            256GB SSD storage
            13-inch Retina display with True Tone
            Magic Keyboard
            Touch Bar and Touch ID
            Force Touch trackpad
            Two Thunderbolt / USB 4 ports
          </Text>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{ color: COLORS.yellow, fontSize: 22, fontWeight: 'bold' }}>
              {laptop.price}
            </Text>
            <View style={STYLES.quantityContainer}>
              <View style={STYLES.quantityButton}>
                <Icon name="plus" size={20} />
              </View>
              <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>1</Text>
              <View style={STYLES.quantityButton}>
                <Icon name="minus" size={20} />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                height: 50,
                width: 50,
                elevation: 7,
                marginRight: 30,
                borderRadius: 25,
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="heart-outline" size={28} color={COLORS.primary0} />
            </View>
            <View style={STYLES.addToCartButton}>
              <Text style={{ color: COLORS.white }}>Add To Cart</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default DetailsScreen;
