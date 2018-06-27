// Used to take screenshots in detox testing
// based on the device OS
// author : Yogesh Thanvi
// Detox Screenshots 
const { exec } = require('child-process-async');
var Platform = require('react-native');

const Screen = (FileName) =>{
  try{
    if(Platform.OS === 'ios')
    {
      // used to take screenshots for ios device and save to machine
      exec(`xcrun simctl io booted screenshot e2e/screenshots/${FileName++}.png`);
    }
    else
    {
      //used to take screenshot for android device and save it in android device
      exec(`adb shell screencap -p /sdcard/${FileName++}.png`);
      //Pull the screenshot from device to local directory
      exec(`adb pull /sdcard/${FileName++}.png /<fullpath of project>/e2e/screenshots`)
    }
  }catch (e)
  {
    console.log(e);
  }
};

export default Screen;
