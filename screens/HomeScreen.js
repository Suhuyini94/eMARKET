import React from "react";
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    View,
    ScrollView,
    Text,
    TextInput,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "./const/color";
const { width } = Dimensions.get('screen');
const HomeScreen = ({ navigation }) => {
    const categoryItems = [
        {name: 'Chair', iconName: 'seat-outline'},
        {name: 'Table', iconName: 'table-furniture'},
        {name: 'Cupboard', iconName: 'cupboard-outline'},
        {name: 'Bed', iconName: 'bed-queen-outline'}
    ];
    const ListCategories = () => {
        return <View style={style.categoriesContainer}>
            {categoryItems.map ((item, index) => (
                <View style = { [style.categoryItemButton]}>
                    <Icon name = { item.iconName} size = {20} color = {COLORS.primary0} />
                    <Text style = {[style.categoryText]}>{item.name}</Text>
                </View>
            ))}
        </View>;
    };
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <View style={style.header}>
                <Icon name='sort-variant' size={20} color={COLORS.primary0} />
                <Icon name='cart-outline' size={20} color={COLORS.primary0} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={style.headerTitle}>Best Furniture For Your Home.</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                }}>
                    <View style={style.searchInputCintainer}>
                        <Icon name='magnify' color={COLORS.grey} size={25} />
                        <TextInput placeholder='Search' />
                    </View>
                    <View style={style.sortButton}>
                        <Icon name='tune' color={COLORS.white} size={25} />
                    </View>
                </View>
                <Text style={style.tittle}>Categories</Text>
                <ListCategories />
            </ScrollView>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    categoryText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: COLORS.primary0,
        marginLeft: 5
    },
    categoryItemButton: {
        flexDirection: 'row',
        backgroundColor: COLORS.light0,
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
    },

    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },

    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    sortButton: {
        backgroundColor: COLORS.primary0,
        height: 50,
        width: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    searchInputCintainer: {
        height: 50,
        backgroundColor: COLORS.light0,
        flex: 1,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    headerTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        width: '55%',
        lineHeight: 30,
        paddingHorizontal: 20
    },

    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});

export default HomeScreen;