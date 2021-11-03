import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/color';
import STYLES from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import laptops from '../../consts/laptops';

const HomeScreen = ({navigation}) => {
  const categoryItems = [
    {name: 'Apple', iconName: 'apple'},
    {name: 'Dell', iconName: 'laptop'},
    {name: 'HP', iconName: 'laptop-mac'},
    {name: 'Toshiba', iconName: 'laptop-chromebook'},
  ];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={STYLES.categoriesContainer}>
        {categoryItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={[
                STYLES.categoryItemButton,
                {
                  backgroundColor:
                    selectedCategoryIndex == index
                      ? COLORS.primary0
                      : COLORS.light0,
                },
              ]}>
              <Icon
                name={item.iconName}
                size={20}
                color={
                  selectedCategoryIndex == index ? COLORS.white : COLORS.primary0
                }
              />
              <Text
                style={[
                  STYLES.categoryText,
                  {
                    color:
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary0,
                  },
                ]}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({laptop}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('Product Details', laptop)}>
        <View style={STYLES.card}>
          <View style={STYLES.iconContainer}>
            <Icon
              name="heart"
              color={laptop.liked ? COLORS.red : COLORS.primary0}
            />
          </View>
          <Image
            source={laptop.image}
            style={{height: 120, width: '100%', borderRadius: 10}}
          />

          <Text style={STYLES.cardName}>{laptop.name}</Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={STYLES.price}>{laptop.price}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text style={STYLES.rating}>4.3</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const PopularItemCard = ({laptop}) => {
    return (
      <View style={STYLES.popularItemCard}>
        <View style={STYLES.iconContainer}>
          <Icon
            name="heart"
            color={laptop.liked ? COLORS.red : COLORS.primary0}
          />
        </View>
        <Image
          source={laptop.image}
          style={{
            width: 100,
            height: '100%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginRight: 10,
          }}
        />
        <View style={{paddingVertical: 15, justifyContent: 'center'}}>
          <Text style={STYLES.cardName}>{laptop.name}</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={STYLES.price}>{laptop.price}</Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text style={STYLES.rating}>4.3</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      {/* Header container */}
      <View style={STYLES.header}>
        <Icon name="sort-variant" size={28} color={COLORS.primary0} />
        <Icon name="cart-outline" size={28} color={COLORS.primary0} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={STYLES.headerTitle}>Best Computers For Your Home And Office.</Text>

        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <View style={STYLES.searchInputContainer}>
            <Icon name="magnify" color={COLORS.grey} size={25} />
            <TextInput placeholder="Search" />
          </View>

          <View style={STYLES.sortButton}>
            <Icon name="tune" color={COLORS.white} size={25} />
          </View>
        </View>

        <Text style={STYLES.title}>Categories</Text>
        {/* Render categories */}
        <ListCategories />

        {/* Render To laptops */}
        <Text style={STYLES.title}>Top Laptop</Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={laptops}
          horizontal
          renderItem={({item}) => <Card laptop={item} />}
        />

        {/* Render To Popular */}
        <Text style={STYLES.title}>Popular</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={laptops}
          renderItem={({item}) => <PopularItemCard laptop={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeScreen;
