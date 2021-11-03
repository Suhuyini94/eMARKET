import { StyleSheet , Dimensions} from "react-native";
import COLORS from "../consts/color";
const {width} = Dimensions.get('screen');

const STYLES = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop: 20
    },

    inputIcon: {
        marginTop: 5,
        position: 'absolute'
    },
    input: {
        color: COLORS.light,
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: COLORS.light,
        flex: 1,
        fontSize: 18,
    },

    buttonPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    line: {
        height: 2,
        width: 30,
        backgroundColor: COLORS.light,
    },
     
    buttonSecondary: {
        backgroundColor: COLORS.light,
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.light,
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
    },

    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      headerTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        width: '55%',
        lineHeight: 30,
        paddingHorizontal: 20,
      },
      searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light0,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 12,
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
    
      categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
      },
      categoryItemButton: {
        flexDirection: 'row',
        backgroundColor: COLORS.light0,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'center',
      },
      categoryText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: COLORS.primary0,
        marginLeft: 5,
      },
      card: {
        height: 190,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width / 2.5,
        marginRight: 20,
        padding: 10,
        marginVertical: 20,
        borderRadius: 10,
      },
      cardName: {
        marginTop: 10,
        fontSize: 12,
        color: COLORS.primary0,
        fontWeight: 'bold',
      },
      price: {fontWeight: 'bold', color: COLORS.primary0, fontSize: 12},
      rating: {
        fontWeight: 'bold',
        color: COLORS.primary0,
        fontSize: 12,
      },
      title: {fontSize: 18, fontWeight: 'bold', paddingHorizontal: 20},
      iconContainer: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.white,
        position: 'absolute',
        elevation: 2,
        right: 15,
        top: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      popularItemCard: {
        height: 90,
        width: width - 100,
        backgroundColor: COLORS.white,
        elevation: 10,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 10,
        flexDirection: 'row',
      },

    buttonImage: {
        width: 20,
        height: 20,
        marginLeft: 5,
        marginRight: 5
    },
    backgroundImage: {
        marginHorizontal: 20,
        height: 300,
        borderRadius: 15,
        overflow: 'hidden',
      },
      header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      headerButton: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.light0,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      ratingTag: {
        height: 30,
        width: 35,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      addToCartButton: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary0,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
      },
      detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
      quantityButton: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.white,
        borderRadius: 7,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      quantityContainer: {
        height: 35,
        width: 100,
        backgroundColor: COLORS.primary0,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
});

export default STYLES;