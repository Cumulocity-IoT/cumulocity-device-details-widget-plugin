# Cumulocity Device Details Widget Plugin [<img width="35" src="https://user-images.githubusercontent.com/32765455/211497905-561e9197-18b9-43d5-a023-071d3635f4eb.png"/>](https://github.com/SoftwareAG/cumulocity-device-details-widget-plugin/releases/download/1.0.2/sag-ps-pkg-device-details-widget-1.0.2.zip)

The Device Details Widget Plugin is the Cumulocity module federation plugin created using c8ycli. This plugin can be used in Application Builder or Cockpit. This Plugin is designed to display the Device Details. It fetches the details from the API call and displays the data according to the fields provided. The widget plugin has the ability to summarize  information relating to the names from the Api call.

### Please choose Device Details Widget Plugin release based on Cumulocity/Application builder version:

|APPLICATION BUILDER&nbsp;|&nbsp;CUMULOCITY&nbsp;|&nbsp;DEVICE DETAILS WIDGET PLUGIN&nbsp;|
|--------------------|-------------|-------------------------------|
| 2.0.x              | >= 1016.x.x | 1.x.x                         |  


![Device-details](images/Device-details.png)

![Device-Details-Config](images/Device-Details-config.png)


## Features

*  **Display API data:** Displays API Data for provided API URL.

*  **Configurable Properties:** User can choose what properties to display and also option to display custom label for each property.

## Prerequisite
   Cumulocity c8ycli >=1016.x.x
## Installation
### Runtime Widget Deployment?

 * This plugin support runtime deployment. Download  [Runtime Binary](https://github.com/SoftwareAG/cumulocity-device-details-widget-plugin/releases/download/1.0.2/sag-ps-pkg-device-details-widget-1.0.2.zip)  and install via Administrations --> Ecosystems --> Applications --> Packages.

## QuickStart

This guide will teach you how to add widget in your existing or new dashboard.

1. Open your application from App Switcher

2. Add new dashboard or navigate to existing dashboard

3. Click `Add Widget`

4. Search for `Device Details` 

5. Select `Target Devices`

7. Click `Save`

Congratulations! Device Details is configured.

## User Guide

*  **Target Devices:** Deviceid of interest
*  **Device Details URL:** User has to pass the API URL from where the data needs to be fetched.
*  **Name of the Main document List from API:** User has to pass the name of the List that needs to be picked from the API output to display the data in table.
* **Properties:** User can choose the required property and add the suitable label to display.

------------------------------

This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECH Community Forums](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).

