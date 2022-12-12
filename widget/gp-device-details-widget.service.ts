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
import { Injectable } from '@angular/core';
import { InventoryService, IdentityService, IResultList, IManagedObject } from '@c8y/client';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GpDeviceDetailsWidgetService {
  restItems: any;
  constructor(public inventory: InventoryService, private http: HttpClient,
    public identity: IdentityService) { }
  response: any;
  deviceExternalId: any;

  getAllDevices(id: string, pageToGet: number, allDevices: { data: any[], res: any }): Promise<IResultList<IManagedObject>> {
    const inventoryFilter = {
      pageSize: 50,
      withTotalPages: true,
      currentPage: pageToGet
    };
    if (!allDevices) {
      allDevices = { data: [], res: null };
    }
    return new Promise(
      (resolve, reject) => {
        this.inventory.childAssetsList(id, inventoryFilter)
          .then((resp) => {
            if (resp.res.status === 200) {
              if (resp.data && resp.data.length >= 0) {
                allDevices.data.push.apply(allDevices.data, resp.data);
                if (resp.data.length < inventoryFilter.pageSize) {
                  resolve(allDevices);
                } else {
                  this.getAllDevices(id, resp.paging.nextPage, allDevices)
                    .then((np) => {
                      resolve(allDevices);
                    })
                    .catch((err) => reject(err));
                }
              }
            } else {
              reject(resp);
            }
          });
      });
  }
  async getDeviceData(config) {
    const inventory = await this.inventory.detail(config.device.id);
    //const inventory = await this.inventory.detail('00010238');
    this.response = inventory.data;
    if ((this.response.hasOwnProperty('c8y_IsDevice')) || (this.response.hasOwnProperty('c8y_IsAsset'))) {
      this.deviceExternalId = await this.getExternalId(config.device.id);
    } else {
      alert('Please select a device or asset for this widget to fuction correctly');
    }
    return this.deviceExternalId;
  }
  async getExternalId(id) {
    const { data, res, paging } = await this.identity.list(id);
    return data[0].externalId;
  }
  async getRestItems(url): Promise<any> {
    this.restItems = await this.http.get(url).toPromise();
    return this.restItems;
  }
  async getExternalIdForDevice(config) {
    const inventory = await this.inventory.detail(config.device.id);
    this.response = inventory.data;
    if ((this.response.hasOwnProperty('c8y_IsDevice')) || (this.response.hasOwnProperty('c8y_IsAsset'))) {
      this.deviceExternalId = await this.getExternalId(config.device.id);
    } else {
      alert('Please select a device for this widget to fuction correctly');
    }
    return this.deviceExternalId;
  }

  async getDeviceDataByID(config) {
   // let deviceExternalID = await this.getExternalIdForDevice(config);
    let deviceDetailsURL = config.deviceDetailsUrl + '00001246';
    return this.http.get(deviceDetailsURL);
  }
}

