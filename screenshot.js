// Used to take screenshots in detox testing
// based on the device OS
// author : Yogesh Thanvi
// Detox Screenshots
const { exec } = require('child-process-async');
var Platform = require('react-native');
var d = new Date();
const fs = require('fs');
const path = require('path');

const Screen = (FileName) =>{
  try{
    let dp = '/fullpath/e2e/screenshots/'+d.getTime();
    if(device.getPlatform() === 'ios')
    {
      // Create a folder with name as current time
      mkdirSync(path.resolve(dp));
      // Take a screeenshot of the iOS Device whhere filename is a string
      exec(`xcrun simctl io booted screenshot ${dp}/${FileName}.png`);
      sleep(1000);
    }
    else
    {
      mkdirSync(path.resolve(dp));
      // Take a screenshot of android device and store in device storage
      exec(`adb shell screencap -p /sdcard/${FileName}.png`);
      sleep(1000);
      // Pull the screenshot from device and store in local directory
      exec(`adb pull /sdcard/${FileName}.png ${dp}`)
      sleep(1000);
    }
  }catch (e)
  {
    console.log(e);
  }
};

// Used to sleep or hold the process
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e10; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// Creates a folder
const mkdirSync = function (dirPath) {
  try {
    fs.mkdirSync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

export default Screen;
