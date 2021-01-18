//import test
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai'
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

//Page
import Scanner from '../src/pages/Scanner';

const mockStore = configureStore();
const initialState = {QRCodeScanned: []};
const store = mockStore(initialState); 




describe('Scanner', () => {
  it('scan fail no JSON', async () => {
    
    const mock = jest.fn();
    jest.mock('react-native-camera', () => 'Camera');
    
    const fakeQRCode = {
      type: "QR_CODE", 
      data: "IDQRCODE"
    }

    const wrapper = shallow(<Scanner store={store} />); 

    const component = wrapper.dive(); 
    component.instance().scannerQRCode(); 

    console.log(toJson(wrapper.dive())); 
    // const instance = wrapper.instance();
    // instance.scannerQRCode(fakeQRCode); 

    console.log(toJson(wrapper).children);


    

  }); 



});
