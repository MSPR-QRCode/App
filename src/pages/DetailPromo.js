//import React
import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

//import styles
import {red} from '../styles/color';

//import Animation
import SlideBottom from '../animations/SlideBottom';

//service
import {formatDate} from '../services/date';

const {height, width} = Dimensions.get('screen');


/**
 * COMPONENT
 * @category Pages
 */
class DetailPromo extends React.Component {
  promo = {};

  /**
   * @param {*} props 
   */
  constructor(props) {
    super(props);
  }

  /**
   * If codePromo exist : display codePromo
   * @param {jsx} promo 
   */
  displayCodePromo(promo) {
    if (promo.codePromo) {
      return <Text style={styles.title_code}> {promo.codePromo} </Text>;
    }
  }

  /**
   * Render JSX
   */
  render() {
    const promo = this.props.route.params;

    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <SlideBottom>
          <View testID="detailPromo">
            <ScrollView style={styles.container}>
              <Image
                style={styles.image_detail}
                source={{
                  uri: promo.image,
                }}
              />
              <View style={styles.container_promo}>
                {this.displayCodePromo(promo)}
                <View style={styles.container_text}>
                  <Text style={styles.title}>{promo.name}</Text>
                  <Text style={styles.date}>
                    Date limite : {formatDate(promo.dateExp)}
                  </Text>
                  <Text style={styles.description}>{promo.description}</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </SlideBottom>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    minHeight: height,
    backgroundColor: 'white',
  },
  image_detail: {
    height: height / 3,
    marginBottom: -20,
    backgroundColor: 'grey',
    resizeMode: 'cover',
  },
  container_promo: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  title_code: {
    fontSize: 40,
    fontFamily: 'Montserrat-ExtraBold',
    color: red,
    textAlign: 'center',
  },
  container_text: {
    paddingRight: 20,
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 17,
  },
  description: {
    marginTop: 20,
    paddingBottom: 50,
    fontSize: 15,
  },
});

export default DetailPromo;
