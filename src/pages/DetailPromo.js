//import React
import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
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
    return (
      <>
        {/* <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        /> */}
         <StatusBar
          barStyle="light-content"
          backgroundColor="red"
        />
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.container}>
            <Image
              style={styles.image_detail}
              source={{
                uri:
                  'https://www.technikart.com/wp-content/uploads/2019/08/020A8293-770x538.jpg',
              }}
            />
            <View style={styles.container_promo}>
              <Text style={styles.title_code}>224GG</Text>
              <View style={styles.container_text}>
                <Text style={styles.title}>Nom Promo</Text>
                <Text style={styles.date}>Date : 21/09/2000</Text>
                <Text style={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris sed mauris suscipit, commodo ipsum a, lobortis felis.
                  Sed elit velit, imperdiet at metus quis, suscipit lacinia
                  enim. Aliquam in nunc a urna eleifend fringilla quis eu felis.
                  Mauris sed lacus massa. Ut a ipsum at ligula scelerisque
                  aliquam quis vel libero. Donec vel arcu vitae odio elementum
                  fermentum eu a sem. Vestibulum elementum libero ac dui aliquam
                  consectetur. Cras turpis velit, vulputate nec sapien sodales,
                  lobortis congue lacus. Duis cursus faucibus urna, a dapibus
                  ante elementum vel. Nulla tempus turpis sit amet odio
                  imperdiet, et ullamcorper sem dignissim. Nullam tincidunt
                  gravida leo, feugiat malesuada eros ultrices in. Praesent odio
                  magna, porta gravida fermentum eu, tincidunt sit amet sem.
                  Suspendisse potenti. Curabitur tempor quam ut massa tempus,
                  nec fermentum diam mattis. In magna tortor, consectetur
                  fermentum nisl nec, gravida fermentum purus. Mauris placerat
                  sem magna, et bibendum dui pharetra eget.
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
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
