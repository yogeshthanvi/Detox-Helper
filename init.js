const detox = require('detox');
const config = require('./package.json').detox;
const adapter = require('detox/runners/jest/adapter');

jest.setTimeout(300000);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 300000;
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
	await detox.init(config);
});

beforeEach(async () => {
	await adapter.beforeEach();
});

afterAll(async () => {
	await adapter.afterAll();
	await detox.cleanup();
});
