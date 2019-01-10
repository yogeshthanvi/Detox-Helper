# Detox-Helper
This repository contains the files which are helpful in #detox setup. 

To Follow Detox setup with Jest please follow the link https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md

# Overcome the SSLPinning in the App 

Xcode configurations 

1) In Appdelegate.m 

#if DETOX == 0
    [[SSLPinning sharedInstance] configure];
#endif

2) PreProcessor Macros 

Add for Debug : DETOX = ${DETOX}
Add for Release : DETOX = ${DETOX}

3) In build Setting > Customized (Click on app name in Xcode ) 

Add user define variable “Detox = 0”  (user defined variable ) and under that 
Debug=0 , Release = 0 

4) DETOX=1 , is placed in the app while building the app in order to disable the SSL Pinning  

# Package.Json configurations and devdependencies for Detox 
"devDependencies": {
		"babel-jest": "23.6.0",
        "babel-plugin-transform-remove-console": "^6.9.4",
        "detox": "^9.0.3",
        "jest": "23.6.0",
        "jest-environment-selenium": "^2.0.0",
        "metro-react-native-babel-preset": "0.48.5",
        "react-test-renderer": "16.6.1",
        "enzyme": "^3.8.0",
        "enzyme-adapter-react-16": "^1.7.1",
        "enzyme-to-json": "^3.3.5",
        "jest-sonar-reporter": "^2.0.0",
        "react-addons-test-utils": "^15.6.2",
		"react-dom": "^16.7.0",
        "redux-mock-store": "^1.5.3",
	},
	"jest": {
		"preset": "react-native",
        "setupFiles": [
			"./e2e/setupTests.js"
		],
        "snapshotSerializers": [
			"enzyme-to-json/serializer"
		]
	},

# Detox Configurations 
"detox": {
		"test-runner": "jest",
        "runner-config": "./config.json",  --> It is placed outside e2e folder to avoid root directory dection errors
        "configurations": {
			"ios.sim.debug": {
				"binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/AppName.app",
				"build": "xcodebuild -workspace ios/AppName.xcworkspace -scheme AppName -configuration Debug DETOX=1 -sdk iphonesimulator -derivedDataPath ios/build",
				"type": "ios.simulator",
				"name": "iPhone X"
			},
			"android.emu.debug": {
				"binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
                "testBinaryPath":"android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk", //Optional 
				"build": "cd android && ./gradlew assembleAndroidTest -DtestBuildType=debug && cd ..",
				"type": "android.emulator",
				"name": "Pixel_2_XL_API_27"
			}
		}
	}
}

# To run detox for android on #RN57 and #babel7 please follow the config.json configurations 

# Also add the following in the android > build.gradle 

//Add the complileSdkVersion as 28 and buildToolVersion as 28.0.3 

subprojects {
    afterEvaluate { project ->
        if (project.hasProperty("android")) {
            android {
                compileSdkVersion 28
                buildToolsVersion "28.0.3"
            }
        }
    }
}

//--Detox Configurations Android ------



