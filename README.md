# Cumulocity Device Details Widget Plugin [<img width="35" src="https://user-images.githubusercontent.com/67993842/97668428-f360cc80-1aa7-11eb-8801-da578bda4334.png"/>](https://github.com/SoftwareAG/cumulocity-device-details-widget-plugin/releases/download/1.0.0-beta/device-details-runtime-widget-1.0.0-beta.zip)

This Device Details Widget Plugin is the Cumulocity module federation plugin created using c8ycli. This plugin can be used in Application Builder or Cockpit. This Plugin is designed to display the Device Details can fetch the details from the Api call  and can display data according to the fields provided. The angular widget has the ability to summarize  information relating to the names from the Api call.

### Please note that this plugin is in currently under BETA mode.

### Please choose Device Details Widget Plugin release based on Cumulocity/Application builder version:

|APPLICATION BUILDER | CUMULOCITY  | DEVICE DETAILS WIDGET PLUGIN  |
|--------------------|-------------|-------------------------------|
| 2.0.x(coming soon) | >= 1016.x.x | 1.x.x                         |  


![Device_Details_1](https://user-images.githubusercontent.com/99970126/181510210-2e16463e-0c57-4048-b458-4253a1c913ec.PNG)

![Device-Details-Config](https://user-images.githubusercontent.com/99970126/188394087-58a3da72-1ae3-4812-8aef-a6afe3a64c9a.png)


## Features

## Installation

### Runtime Widget Deployment?

 - This plugin support runtime deployment. Download  [Runtime Binary](https://github.com/SoftwareAG/cumulocity-device-details-widget-plugin/releases/download/1.0.0-beta/device-details-runtime-widget-1.0.0-beta.zip)  and follow runtime deployment instructions from  [here](https://github.com/SoftwareAG/cumulocity-runtime-widget-loader).

## Supported Product Versions

-  **App Builder:**  Tested with Cumulocity App Builder version 1.3.0
**Requirements:**
* Git
* NodeJS (release builds are currently built with `v14.18.0`)
* NPM (Included with NodeJS)

**Instructions**
1. Clone the repository: 
```
git clone https://github.com/SoftwareAG/cumulocity-device-details-widget-plugin.git
```
2. Change directory: 
```
cd cumulocity-device-details-widget-plugin
```
3. Install the dependencies: 
```
npm install
```
4. (Optional) Local development server: 
```
npm start -- --shell cockpit
```
5. Build the app: 
```
npm run build
```
6. Deploy the app: 
```
npm run deploy
```


------------------------------

These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECH Community Forums](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).

