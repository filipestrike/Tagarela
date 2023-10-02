import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View,
} from "react-native";
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const optionButtonMargin = width * 0.02; // Margin based on screen size

const OptionsMenu = ({ homeColor, favColor, addColor, categoriesColor, userColor }) => {
  const navigation = useNavigation();
    return(
        <View style={styles.containerFather}>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.optionButton, { marginHorizontal: optionButtonMargin }]} onPress={() => {navigation.navigate('Home')}}>
                    <Svg width={70} height={60} viewBox="0 0 70 60" fill={homeColor} xmlns="http://www.w3.org/2000/Svg">
                        <Path d="M31.0327 0L0 23.2745H7.75817V54.3072H23.2745V38.7908H38.7908V54.3072H54.3072V23.0418L62.0653 23.2745L31.0327 0Z"/>
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.optionButton, { marginHorizontal: optionButtonMargin }]}>
                    <Svg width={70} height={60} viewBox="0 0 70 60" fill={favColor} xmlns="http://www.w3.org/2000/svg">
                        <Path d="M34.7451 0L26.0588 22.3088H0L21.7157 37.1814L13.0294 59.4902L34.7451 44.6176L56.4608 59.4902L47.7745 37.1814L69.4902 22.3088H43.4314L34.7451 0Z" />
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.optionButtonAdd, { marginHorizontal: optionButtonMargin }]}>
                    <Svg width={70} height={60} viewBox="0 0 70 60" fill={addColor} xmlns="http://www.w3.org/2000/svg">
                        <Path d="M18.3418 0V20.2168H0V33.6946H18.3418V53.9114H30.5696V33.6946H48.9114V20.2168H30.5696V0H18.3418Z" />
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.optionButtonCategories, { marginHorizontal: optionButtonMargin }]} onPress={() => {navigation.navigate('Categories')}}>
                    <Svg width={70} height={60} viewBox="0 0 70 60" fill={categoriesColor} xmlns="http://www.w3.org/2000/svg">
                        <Path d="M0 0V12.334H60.4441V6.16699H22.6665V0H0ZM0 18.501V46.2524C0 47.9792 1.66221 49.3359 3.77775 49.3359H56.6663C58.7818 49.3359 60.4441 47.9792 60.4441 46.2524V18.501H0Z" />
                    </Svg>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.optionButton, { marginHorizontal: optionButtonMargin }]}>
                    <Svg width={70} height={60} viewBox="0 0 70 60" fill={userColor} xmlns="http://www.w3.org/2000/svg">
                        <Path d="M32.4557 0C23.5304 0 16.2278 8.66759 16.2278 19.3473C16.2278 30.027 23.5304 38.6946 32.4557 38.6946C41.381 38.6946 48.6835 30.027 48.6835 19.3473C48.6835 8.66759 41.381 0 32.4557 0ZM15.4976 38.6946C6.89683 39.0816 0 45.8144 0 54.1725V61.9114H64.9114V54.1725C64.9114 45.8144 58.0957 39.0816 49.4138 38.6946C45.0323 43.4154 39.028 46.4335 32.4557 46.4335C25.8834 46.4335 19.8791 43.4154 15.4976 38.6946Z" />
                    </Svg>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerFather: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
    container: {
        width: width * 0.5, // Width based on screen size
        height: height * 0.14, // Height based on screen size
        backgroundColor: "#F4F4F4",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    optionButton: {
        marginVertical: height * 0.026, // Margin based on screen size
    },
    optionButtonAdd: {
        marginVertical: height * 0.035, // Margin based on screen size
    },
    optionButtonCategories: {
        marginVertical: height * 0.03, // Margin based on screen size
    },
});

export default OptionsMenu;