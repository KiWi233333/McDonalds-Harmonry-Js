/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @devices tv, phone, tablet, wearable
 * @since 5
 */
declare interface Result {
  /**
   * Result code.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  code: number;

  /**
   * Returned data.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  data: object;
}

/**
 * @devices liteWearable
 * @since 5
 */
declare interface SubscribeMessageResponse {
  /**
   * Peer device ID.
   * @devices liteWearable
   * @since 5
   */
  deviceId: string;

  /**
   * Name of the bundle where the peer ability locates. The name is case sensitive.
   * @devices liteWearable
   * @since 5
   */
  bundleName: string;

  /**
   * Peer ability name, which is case sensitive.
   * @devices liteWearable
   * @since 5
   */
  abilityName: string;

  /**
   * Messages received from the device.
   * @devices liteWearable
   * @since 5
   */
  message: string;
}

/**
 * @devices tv, phone, tablet, wearable
 * @since 5
 */
declare interface CallAbilityParam {
  /**
   * Name of the bundle where the ability locates. The name is case sensitive and must be the same as that on the AA side.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  bundleName: string;

  /**
   * Ability name, which is case sensitive and must be the same as that on the AA side.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  abilityName: string;

  /**
   * Ability operation code, which defines the service function of an AA and must be consistent with the AA side.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  messageCode: number;

  /**
   * Ability type. Different types of abilities have different implementation on the AA side.
   * 0: Ability, which has an independent lifecycle. The FA starts and requests an AA through an RPC. Such type of abilities are used to provide basic services for multiple FAs to call or are used when the abilities should run in the background.
   * 1: Internal ability, which shares the same process with the FA and communicates with it by calling internal functions. Such type of abilities are used in scenarios that require low response latency and cannot be called by other FAs.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  abilityType: number;

  /**
   * Data sent to the ability. The data to carry differs depending on the service to be processed and its field name must be consistent with the AA side.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  data?: object;

  /**
   * Whether the request is synchronous or asynchronous. The synchronous mode is used by default. Currently, the asynchronous mode is available only for internal abilities.
   * 0: Synchronous mode (default value)
   * 1: Asynchronous mode
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  syncOption?: number;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface SubscribeAbilityEventParam {
  /**
   * Name of the bundle where the ability locates. The name is case sensitive and must be the same as that on the AA side.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  bundleName: string;

  /**
   * Ability name, which is case sensitive and must be the same as that on the AA side.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  abilityName: string;

  /**
   * Ability operation code, which defines the service function of an AA and must be consistent with the AA side.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  messageCode: number;

  /**
   * Ability type. Different types of abilities have different implementation on the AA side.
   * 0: Ability, which has an independent lifecycle. The FA starts and requests an AA through an RPC. Such type of abilities are used to provide basic services for multiple FAs to call or are used when the abilities should run in the background.
   * 1: Internal ability, which shares the same process with the FA and communicates with it by calling internal functions. Such type of abilities are used in scenarios that require low response latency and cannot be called by other FAs.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  abilityType: number;

  /**
   * Whether the request is synchronous or asynchronous. The synchronous mode is used by default. Currently, the asynchronous mode is available only for internal abilities.
   * 0: Synchronous mode (default value)
   * 1: Asynchronous mode
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  syncOption?: number;
}

/**
 * @devices liteWearable
 * @since 5
 */
declare interface SendMessageOptions {
  /**
   * Destination device ID.
   * @devices liteWearable
   * @since 5
   */
  deviceId: string;

  /**
   * Name of the destination bundle where the ability locates. The name is case sensitive.
   * @devices liteWearable
   * @since 5
   */
  bundleName: string;

  /**
   * Destination ability name, which is case sensitive.
   * @devices liteWearable
   * @since 5
   */
  abilityName: string;

  /**
   * Messages sent to the destination device.
   * A maximum of 1 KB of data can be transmitted at a time.
   * If more than 1 KB of data needs to be transmitted, split the messages into multiple parts to transmit.
   * @devices liteWearable
   * @since 5
   */
  message?: string;

  /**
   * Called when the messages are sent successfully.
   * @devices liteWearable
   * @since 5
   */
  success?: () => void;

  /**
   * Called when the messages fail to be sent.
   * @devices liteWearable
   * @since 5
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   * @devices liteWearable
   * @since 5
   */
  complete?: () => void;
}

/**
 * @devices liteWearable
 * @since 5
 */
declare interface SubscribeMessageOptions {
  /**
   * Called when the messages are sent successfully.
   * @devices liteWearable
   * @since 5
   */
  success?: (data: SubscribeMessageResponse) => void;

  /**
   * Called when the messages fail to be sent.
   * @devices liteWearable
   * @since 5
   */
  fail?: (data: string, code: number) => void;
}

/**
 * @devices tv, phone, tablet, wearable
 * @since 5
 */
declare interface RequestParams {
  /**
   * The name of the bundle to start. It should be used with abilityname and case sensitive.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  bundleName?: string;

  /**
   * Ability name, which is case sensitive.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  abilityName?: string;

  /**
   * The list of entities to which the FA to be called. If it is not filled in, all entity lists will be found by default. It should be used with action.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  entities?: Array<string>;

  /**
   * Without specifying the bundle name and ability name, you can start the application according to other properties with action.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  action?: string;

  /**
   * If more than one FA meets the conditions, the user can select the device from the popup.
   * 0: Default. Select the FA to start from the local and remote devices.
   * 1: start FA from the local device.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  deviceType?: number;

  /**
   * Data sent to the ability which need to be serializable.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  data?: object;

  /**
   * Configuration switch when start FA.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  flag?: number;

  /**
   * Specify the url of the page which the FA to be called. Use home page directly by default.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  url?: string;
}

/**
 * @devices tv, phone, tablet, wearable
 * @since 5
 */
declare interface FinishWithResultParams {
  /**
   * Result code.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  code: number;

  /**
   * Returned data.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  result: object;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable
 * @since 5
 */
declare class FeatureAbility {
  /**
   * Start a FA without callback result.
   * @param request Indicates the request param.
   * @returns A Promise object is returned, which contains the result of whether to call Ability's interface successfully.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  static startAbility(request: RequestParams): Promise<Result>;

  /**
   * Start a FA with callback result.
   * @param request Indicates the request param.
   * @returns A Promise object is returned, which contains the result of the data FA returned.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  static startAbilityForResult(request: RequestParams): Promise<Result>;

  /**
   * FA call the interface to destory itself and set the result as parameters.
   * @param request Indicates the request param.
   * @returns A Promise object is returned, which contains the result whether to callback successfully.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  static finishWithResult(param: FinishWithResultParams): Promise<Result>;

  /**

   * Get device information list.
   * @param flag Default 0, get the information list of all devices in the network.
   * @returns A Promise object is returned, which contains the result whether the device information list is obtained successfully.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  static getDeviceList(flag: number): Promise<Result>;

  /**

   * Calls an AA.
   * @param param Indicates the request param.
   * @returns A Promise object is returned, which contains the result data returned by the AA. The result is a JSON string.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  static callAbility(param: CallAbilityParam): Promise<string>;

  /**
   * Start FA migration.
   * @returns A Promise object is returned, which contains the result data returned by the AA. The result is a JSON string.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  static continueAbility(): Promise<Result>;

  /**
   * Subscribes to events of an AA.
   * @param param Indicates the request param.
   * @param func Indicates the event reporting callback.
   * @returns A Promise object is returned, which contains the result data returned by the AA. The result is a JSON string.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  static subscribeAbilityEvent(param: SubscribeAbilityEventParam, func: Function): Promise<string>;

  /**
   * Unsubscribes from events of an AA.
   * @param param Indicates the request param.
   * @returns A Promise object is returned, which contains the result data returned by the AA. The result is a JSON string.
   * @devices tv, phone, tablet, wearable
   * @since 5
   */
  static unsubscribeAbilityEvent(param: SubscribeAbilityEventParam): Promise<string>;

  /**
   * Sends messages to the destination device.
   * @param options Options.
   * @devices liteWearable
   * @since 5
   */
  static sendMsg(options: SendMessageOptions): void;

  /**
   * Listens for messages sent from other devices.
   * @param options Options.
   * @devices liteWearable
   * @since 5
   */
  static subscribeMsg(options: SubscribeMessageOptions): void;

  /**
   * Cancels the listening for messages sent from other devices.
   * @devices liteWearable
   * @since 5
   */
  static unsubscribeMsg(): void;
}
