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
import { GpDeviceDetailsWidgetService } from './gp-device-details-widget.service';
import { InventoryService, IdentityService } from '@c8y/client';
@Component({
  selector: 'lib-gp-device-details-widget',
  templateUrl: './gp-device-details-widget.html',
  styleUrls: ['card-fancy-example.css']
})
export class GpDeviceDetailsWidgetComponent implements OnInit {
  deviceDataColumnName: [];
  @Input() config;
  deviceExtId: any;
  URL = '';
  deviceUrl = '';
  deviceDetails: any;
  deviceDataColumnvalues: [];
  columns: [];
  mainList: any;
  constructor(
    private device: GpDeviceDetailsWidgetService,
    public inventory: InventoryService,
    public identity: IdentityService,
  ) { }
  async ngOnInit() {
    // tslint:disable-next-line: no-unused-expression
    if (!this.config.propList) {
      if (this.config.tableColumnValues) {
        this.config.tableColumnValues = this.config.tableColumnValues.split(',');
      }
      if (this.config.tableColumnNames) {
        this.config.tableColumnNames = this.config.tableColumnNames.split(',');
      }
      let propertyList = this.config.tableColumnValues.reduce((propertyList, field, index) => {
        propertyList[this.config.tableColumnNames[index]] = field;
        return propertyList;
      }, {});
      this.config.propList = Object.entries(propertyList).map(([label, value]) => ({ label, value }));
    }
    this.deviceExtId = await this.device.getDeviceData(this.config);
    this.URL = this.config.deviceDetailsUrl;
    this.deviceUrl = this.URL + this.deviceExtId;
    this.getDeviceDetails()
    .then((response) => response.json())
    .then((devData) => {
      if (devData[this.mainList][0]) {
        this.deviceDetails = devData[this.mainList][0];
        this.extractKeyValuesFromObject();
      } else {
        this.deviceDetails = devData[this.mainList];
        this.extractKeyValuesFromObject();
      }
    });
    if (this.config) {
      this.mainList = this.config.mainListName;
    }
  }
  getDeviceDetails() {
    return fetch(this.deviceUrl);
  }

  async extractKeyValuesFromObject() {
    this.deviceDetails = await this.toDotNotation(this.deviceDetails);
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
}
