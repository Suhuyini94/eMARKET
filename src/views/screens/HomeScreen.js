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
import furnitures from '../../consts/furnitures';

const HomeScreen = ({navigation}) => {
  const categoryItems = [
    {name: 'Chair', iconName: 'seat-outline'},
    {name: 'Table', iconName: 'table-furniture'},
    {name: 'Cupboard', iconName: 'cupboard-outline'},
    {name: 'bed', iconName: 'bed-queen-outline'},
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

  const Card = ({furniture}) => {
    return (
      <Pressable
        onPress={() => navigation.navigate('DetailsScreen', furniture)}>
        <View style={STYLES.card}>
          <View style={STYLES.iconContainer}>
            <Icon
              name="heart"
              color={furniture.liked ? COLORS.red : COLORS.primary0}
            />
          </View>
          <Image
            source={furniture.image}
            style={{height: 120, width: '100%', borderRadius: 10}}
          />

          <Text style={STYLES.cardName}>{furniture.name}</Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={STYLES.price}>{furniture.price}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text style={STYLES.rating}>4.3</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const PopularItemCard = ({furniture}) => {
    return (
      <View style={STYLES.popularItemCard}>
        <View style={STYLES.iconContainer}>
          <Icon
            name="heart"
            color={furniture.liked ? COLORS.red : COLORS.primary0}
          />
        </View>
        <Image
          source={furniture.image}
          style={{
            width: 100,
            height: '100%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginRight: 10,
          }}
        />
        <View style={{paddingVertical: 15, justifyContent: 'center'}}>
          <Text style={STYLES.cardName}>{furniture.name}</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={STYLES.price}>{furniture.price}</Text>
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

        {/* Render To Furnitures */}
        <Text style={STYLES.title}>Top Furniture</Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={furnitures}
          horizontal
          renderItem={({item}) => <Card furniture={item} />}
        />

        {/* Render To Popular */}
        <Text style={STYLES.title}>Popular</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={furnitures}
          renderItem={({item}) => <PopularItemCard furniture={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeScreen;
