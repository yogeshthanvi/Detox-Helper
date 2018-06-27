const { exec } = require('child-process-async');
var Platform = require('react-native');

const Screen = (FileName) =>{
  try{
    if(Platform.OS === 'ios')
    {
      exec(`xcrun simctl io booted screenshot e2e/screenshots/${FileName++}.png`);
    }
    else
    {
      exec(`adb shell screencap -p /sdcard/${FileName++}.png`);
      exec(`adb pull /sdcard/${FileName++}.png /Users/punchh_yogesh/Noodles/e2e/screenshots`)
    }
  }catch (e)
  {
    console.log(e);
  }
};

export default Screen;
