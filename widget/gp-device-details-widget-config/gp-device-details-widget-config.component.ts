/*
* Copyright (c) 2020 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GpDeviceDetailsWidgetService } from '../gp-device-details-widget.service';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
@Component({
  selector: 'lib-gp-device-details-widget-config',
  templateUrl: './gp-device-details-widget-config.component.html',
  styleUrls: ['./gp-device-details-widget-config.component.css']
})

export class GpDeviceDetailsWidgetConfigComponent implements OnInit {
  @Input() config: any = {};
  
  // stateCtrl = new UntypedFormControl();
  // myForm = new UntypedFormGroup({
  //   state: this.stateCtrl
  // });
  propertiesToDisplay: any[] = [];

  constructor(private deviceDetailsService: GpDeviceDetailsWidgetService) { }
  deviceDetail = {
    "id": "00010238",
    "parentDeviceId": "",
    "deviceCategoryId": "DEV-CAT-004",
    "deviceCategoryDescription": "Vending Machine",
    "modelId": "00001",
    "modelDescription": "MD76782",
    "serialNumber": "SRN-66378949",
    "customerId": "CUST01001",
    "customerName": "Alexander Tucker",
    "personnelId": "Personnel-1001",
    "personnelName": "REFPER-001. Patrick Jones",
    "monitoring": {
      "repairCount": 9,
      "failureCount": 9
    },
    "deviceStatusId": "DEV-STAT-111",
    "deviceStatusDes": "Status OK, Inventory OK",
    "productId": "PROD01041",
    "productName": "Coil Vending Machine",
    "locationId": "LOC01001",
    "location": "London",
    "manufactureDate": "2015-05-01T01:00:00+0200",
    "manufacturerId": "MNFR_011",
    "manufacturerName": "Terra Manufacturers",
    "runTime": 2160.0,
    "plannedDowntime": 600.0,
    "netTime": 2000.0,
    "oeePercent": 86.9,
    "runningPercent": 95.2,
    "failurePrediction": 95.43,
    "unplannedDowntime": 172.2,
    "unitsProduced": 2573.0,
    "maxCapacity": 3200.2,
    "numberOfStops": 2,
    "predictedDowntime": 570.0,
    "nextScheduledMaintenance": "2022-10-21T07:42:27+0200",
    "uomTypeId": "UOM-003",
    "uomTypeDes": "Each"
  }

  ngOnInit() {
    // this.toDotNotation(this.deviceDetail);
    // this.extractKeysFromObject(this.deviceDetail);
    if (!this.config.propList) {
      this.config.propList = [{ label: '', value: '' }];
    }
    if (this.config.device && this.config.deviceDetailsUrl && this.config.mainListName) {
      this.getDeviceData();
    }
  }

  async getDeviceData() {
    if (this.config.deviceDetailsUrl && this.config.mainListName) {
      this.deviceDetailsService.getDeviceDataByID(this.config)
      .then((response) => response.json())
      .then((data) => {
        this.extractKeysFromObject(data[this.config.mainListName]);
      });
      //this.propertiesToDisplay = [];
    }
  }

  async extractKeysFromObject(jsonObject) {
    let dottedJSON = await this.toDotNotation(jsonObject);
    for (let key in dottedJSON) {
      this.propertiesToDisplay.push(key);
    }
  }

  toDotNotation(obj, res = {}, current = '') {
    for (const key in obj) {
      let value = obj[key];
      let newKey = (current ? current + "." + key : key);  // joined key with dot
      if (value && typeof value === "object") {
        this.toDotNotation(value, res, newKey);  // it's a nested object, so do it again
      } else {
        res[newKey] = value;  // it's not an object, so set the property
      }
    }
    return res;
  }

  removeProperty(i) {
    if (this.config.propList.length > 1) {
      this.config.propList.splice(i, 1);
    }
  }

  addProperty() {
    this.config.propList.push({ label: '', value: '' });
  }
}
