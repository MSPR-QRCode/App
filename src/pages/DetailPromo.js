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

const {height, width} = Dimensions.get('screen');

class DetailPromo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const promo = this.props.route.params;
    console.log(this.promo);
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={styles.container}>
        
          <ScrollView style={styles.container}>
            <Image
              style={styles.image_detail}
              source={{
                uri:
                  'https://www.technikart.com/wp-content/uploads/2019/08/020A8293-770x538.jpg',
              }}
            />
            <View style={styles.container_promo}>
              <Text style={styles.title_code}>{this.promo.title_code}</Text>
              <View style={styles.container_text}>
                <Text style={styles.title}>{this.promo.title}</Text>
                <Text style={styles.date}>{this.promo.date}</Text>
                <Text style={styles.description}>
                {this.promo.description}
            
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image_detail: {
    height: height / 3,
    marginBottom: -20,
    backgroundColor: 'blue',
    resizeMode: 'cover',
  },
  container_promo: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  title_code: {
    fontSize: 50,
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
    fontSize: 15,
  },
});

export default DetailPromo;
