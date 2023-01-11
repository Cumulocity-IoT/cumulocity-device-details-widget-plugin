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
import { NgModule } from '@angular/core';
import { HOOK_COMPONENTS, CoreModule } from '@c8y/ngx-components';
import * as preview from './preview-image'
import { GpDeviceDetailsWidgetComponent } from './gp-device-details-widget.component';
import { DatePipe } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { GpDeviceDetailsWidgetConfigComponent } from './gp-device-details-widget-config/gp-device-details-widget-config.component';

@NgModule({
  declarations: [GpDeviceDetailsWidgetComponent, GpDeviceDetailsWidgetConfigComponent],
  imports: [
    CoreModule,
    NgSelectModule
  ],
  exports: [GpDeviceDetailsWidgetComponent, GpDeviceDetailsWidgetConfigComponent],
  entryComponents: [GpDeviceDetailsWidgetComponent, GpDeviceDetailsWidgetConfigComponent],
  providers: [
    DatePipe,
    {
      provide: HOOK_COMPONENTS,
      multi: true,
      useValue: {
        id: 'device.details.mat.dashboard',
        previewImage: preview.previewImage,
        label: 'Device Details',
        description: 'Device details Dashboard - Display device details in the dashboard',
        component: GpDeviceDetailsWidgetComponent,
        configComponent: GpDeviceDetailsWidgetConfigComponent,
        data: {
          ng1: {
            options: {
              noDeviceTarget: false,
              noNewWidgets: false,
              deviceTargetNotRequired: false,
              groupsSelectable: true
            }
          }
        }
      }
    }],
})
export class GpDeviceDetailsWidgetModule { }
