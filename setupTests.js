'use strict';

import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NativeModules } from 'react-native';

const EventEmitter = require('EventEmitter');
const RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

/**
 * Mock the NativeEventEmitter as a normal JS EventEmitter.
 */
class NativeEventEmitter extends EventEmitter {
	constructor() {
		super(RCTDeviceEventEmitter.sharedSubscriber);
	}
}

jest.mock('NativeEventEmitter');

const nativeEmitter = new NativeEventEmitter();
nativeEmitter.emit('SomeEventYouListenTo');

jest.mock('react-native-aws3', () => {
	return { Request: { FormData: {} } };
});

NativeModules.BlobModule = {
	...NativeModules.BlobModule,
	addNetworkingHandler: jest.fn()
};

Enzyme.configure({ adapter: new Adapter() });
