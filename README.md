# Detox-Helper
This repository contains the files which are helpful in #detox setup. 

To Follow Detox setup with Jest please follow the link https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md

To run detox for android on #RN57 and #babel7 please follow the config.json configurations 

Also add the following in the android > build.gradle 

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



