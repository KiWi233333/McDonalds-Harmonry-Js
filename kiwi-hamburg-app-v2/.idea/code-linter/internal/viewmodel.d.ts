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

// import { Image, ImageData } from "./global";
// import { WebGLContextAttributes, WebGLRenderingContext } from "../webgl/webgl";
// import { WebGL2RenderingContext } from "../webgl/webgl2";

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface FocusParamObj {
  /**
   * @devices tv, phone, tablet, wearable
   */
  focus: boolean;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface RectObj {
  /**
   * @devices tv, phone, tablet, wearable
   */
  width: number;
  /**
   * @devices tv, phone, tablet, wearable
   */
  height: number;
  /**
   * @devices tv, phone, tablet, wearable
   */
  left: number;
  /**
   * @devices tv, phone, tablet, wearable
   */
  top: number;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface ContextAttrOptions {
  antialias: boolean;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface AnimateStyle {
  /**
   * Width value applied to the component after the animation is executed.
   * @devices tv, phone, tablet, wearable
   */
  width: number;
  /**
   * Height value applied to the component after the animation is executed.
   * @devices tv, phone, tablet, wearable
   */
  height: number;
  /**
   * left offset applied to the component after the animation is executed.
   * @devices tv, phone, tablet, wearable
   */
  left: number;
  /**
   * top offset applied to the component after the animation is executed.
   * @devices tv, phone, tablet, wearable
   */
  top: number;
  /**
   * right offset applied to the component after the animation is executed.
   * @devices tv, phone, tablet, wearable
   */
  right: number;
  /**
   * bottom offset applied to the component after the animation is executed.
   * @devices tv, phone, tablet, wearable
   */
  bottom: number;
  /**
   * Background color applied to the component after the animation is executed.
   * The default value is none.
   * @devices tv, phone, tablet, wearable
   */
  backgroundColor: string;
  /**
   * Opacity applied to the component. The value ranges from 0 to 1.
   * The default value is 1.
   * @devices tv, phone, tablet, wearable
   */
  opacity: number;
  /**
   * The value format is "x y", in percentage or pixels.
   * The first value indicates the horizontal position, and the second value indicates the vertical position.
   * If only one value is specified, the other value is 50% by default.
   * @devices tv, phone, tablet, wearable
   */
  backgroundPosition: string;
  /**
   * Origin position of the transformed element.
   * The first value indicates the x-axis position. The value can be left, center, right, a length, or percentage.
   * The second value indicates the y-axis position. The value can be top, center, bottom, a length, or a percentage.
   * @devices tv, phone, tablet, wearable
   */
  transformOrigin: string;
  /**
   * Transformation type applied to an element.
   * @devices tv, phone, tablet, wearable
   */
  transform: "none" | TransformObject;
  /**
   * The value of offset must be within (0.0,1.0] and sorted in ascending order if it is provided.
   * If there are only two frames, offset can be left empty.
   * If there are more than two frames, offset is mandatory.
   * @devices tv, phone, tablet, wearable
   */
  offset?: number;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface TransformObject {
  /**
   * Defines a 2D transformation, using a matrix of six values..
   * @param scaleX the scale value for x-axis
   * @param skewX the skew value for y-axis
   * @param skewY the skew value for x-axis
   * @param scaleY the scale value for y-axis
   * @param translateX the translate value for x-axis
   * @param translateY the translate value for y-axis
   * @devices tv, phone, tablet, wearable
   */
  matrix(
    scaleX: number,
    skewX: number,
    skewY: number,
    scaleY: number,
    translateX: number,
    translateY: number): void;
  /**
   * Defines a 3D transformation using a 4x4 matrix of 16 values.
   * @param n00 the value of the 0 row and 0 column of the 4x4 matrix
   * @param n01 the value of the 0 row and 1 column of the 4x4 matrix
   * @param n02 the value of the 0 row and 2 column of the 4x4 matrix
   * @param n03 the value of the 0 row and 3 column of the 4x4 matrix
   * @param n10 the value of the 1 row and 0 column of the 4x4 matrix
   * @param n11 the value of the 1 row and 1 column of the 4x4 matrix
   * @param n12 the value of the 1 row and 2 column of the 4x4 matrix
   * @param n13 the value of the 1 row and 3 column of the 4x4 matrix
   * @param n20 the value of the 2 row and 0 column of the 4x4 matrix
   * @param n21 the value of the 2 row and 1 column of the 4x4 matrix
   * @param n22 the value of the 2 row and 2 column of the 4x4 matrix
   * @param n23 the value of the 2 row and 3 column of the 4x4 matrix
   * @param n30 the value of the 3 row and 0 column of the 4x4 matrix
   * @param n31 the value of the 3 row and 1 column of the 4x4 matrix
   * @param n32 the value of the 3 row and 2 column of the 4x4 matrix
   * @param n33 the value of the 3 row and 3 column of the 4x4 matrix
   * @devices tv, phone, tablet, wearable
   */
  matrix3d(n00: number, n01: number, n02: number, n03: number,
           n10: number, n11: number, n12: number, n13: number,
           n20: number, n21: number, n22: number, n23: number,
           n30: number, n31: number, n32: number, n33: number): void;
  /**
   * Defines 2D transformations for translation of the X and Y axes
   * @param x the translate value for x-axis
   * @param y the translate value for y-axis
   * @devices tv, phone, tablet, wearable
   */
  translate(x: number, y: number): void;
  /**
   * Defines 3D transformations for translation of the X / Y / Z axes
   * @param x the translate value for x-axis
   * @param y the translate value for y-axis
   * @param z the translate value for z-axis
   * @devices tv, phone, tablet, wearable
   */
  translate3d(x: number, y: number, z: number): void;
  /**
   * Defines 2D transformations for translation of the X axes
   * @param x the translate value for x-axis
   * @devices tv, phone, tablet, wearable
   */
  translateX(x: number): void;
  /**
   * Defines 2D transformations for translation of the Y axes
   * @param y the translate value for y-axis
   * @devices tv, phone, tablet, wearable
   */
  translateY(y: number): void;
  /**
   * Defines 3D transformations for translation of the Z axes
   * @param z the translate value for z-axis
   * @devices tv, phone, tablet, wearable
   */
  translateZ(z: number): void;
  /**
   * Defines 2D transformations for scaling of the X and Y axes
   * @param x the scale value for x-axis
   * @param y the scale value for y-axis
   * @devices tv, phone, tablet, wearable
   */
  scale(x: number, y: number): void;
  /**
   * Defines 3D transformations for scaling of the X / Y / Z axes
   * @param x the scale value for x-axis
   * @param y the scale value for y-axis
   * @param z the scale value for z-axis
   * @devices tv, phone, tablet, wearable
   */
  scale3d(x: number, y: number, z: number): void;
  /**
   * Defines 2D transformations for scaling of the X axes
   * @param x the scale value for x-axis
   * @devices tv, phone, tablet, wearable
   */
  scaleX(x: number): void;
  /**
   * Defines 2D transformations for scaling of the Y axes
   * @param y the scale value for y-axis
   * @devices tv, phone, tablet, wearable
   */
  scaleY(y: number): void;
  /**
   * Defines 3D transformations for scaling of the Z axes
   * @param z the scale value for z-axis
   * @devices tv, phone, tablet, wearable
   */
  scaleZ(z: number): void;
  /**
   * Define the 2D rotation and specify the angle in the parameters.
   * @param angle the rotate value for z-axis
   * @devices tv, phone, tablet, wearable
   */
  rotate(angle: number): void;
  /**
   * Defines a 3D transformation for rotating the X / Y / Z axes.
   * @param x the vector value of the x-axis
   * @param y the vector value of the y-axis
   * @param z the vector value of the z-axis
   * @param angle the rotate value for x&y&z vector.
   * @devices tv, phone, tablet, wearable
   */
  rotate3d(x: number, y: number, z: number, angle: number): void;
  /**
   * Defines 3D transformations for rotating of the X axes.
   * @param x the scale value for x-axis
   * @devices tv, phone, tablet, wearable
   */
  rotateX(angle: number): void;
  /**
   * Defines 3D transformations for rotating of the Y axes.
   * @param y the scale value for y-axis
   * @devices tv, phone, tablet, wearable
   */
  rotateY(angle: number): void;
  /**
   * Defines 3D transformations for rotating of the Z axes.
   * @param z the scale value for z-axis
   * @devices tv, phone, tablet, wearable
   */
  rotateZ(angle: number): void;
  /**
   * Defines the 2D skew transition along the X and Y axes.
   * @param xAngle the angle of inclination along the x axis.
   * @param yAngle the angle of inclination along the y axis.
   * @devices tv, phone, tablet, wearable
   */
  skew(xAngle: number, yAngle: number): void;
  /**
   * Defines the 2D skew transition along the X axes.
   * @param angle the angle of inclination along the x axis.
   * @devices tv, phone, tablet, wearable
   */
  skewX(angle: number): void;
  /**
   * Defines the 2D skew transition along the Y axes.
   * @param angle the angle of inclination along the y axis.
   * @devices tv, phone, tablet, wearable
   */
  skewY(angle: number): void;
  /**
   * Defines a perspective view for the 3D transformation element.
   * @param n the vertical distance from the observation point to the component plane.
   * @devices tv, phone, tablet, wearable
   */
  perspective(verticalDistance: number): void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface AnimateOptions {
  /**
   * Duration of the animation, in milliseconds.
   * The default value is 0.
   * @devices tv, phone, tablet, wearable
   */
  duration: number;

  /**
   * Time curve of the animation. For details about the supported types.
   * linear The animation speed keeps unchanged.
   * ease The animation starts and ends at a low speed, cubic-bezier(0.25, 0.1, 0.25, 1.0).
   * ease-in The animation starts at a low speed, cubic-bezier(0.42, 0.0, 1.0, 1.0).
   * ease-out The animation ends at a low speed, cubic-bezier(0.0, 0.0, 0.58, 1.0).
   * ease-in-out The animation starts and ends at a low speed, cubic-bezier(0.42, 0.0, 0.58, 1.0).
   * fast-out-slow-in Standard curve, cubic-bezier(0.4, 0.0, 0.2, 1.0).
   * linear-out-slow-in Deceleration curve, cubic-bezier(0.0, 0.0, 0.2, 1.0).
   * fast-out-linear-in Acceleration curve, cubic-bezier(0.4, 0.0, 1.0, 1.0).
   * friction Damping curve, cubic-bezier(0.2, 0.0, 0.2, 1.0).
   * extreme-deceleration Extreme deceleration curve, cubic-bezier(0.0, 0.0, 0.0, 1.0).
   * sharp Sharp curve, cubic-bezier(0.33, 0.0, 0.67, 1.0).
   * rhythm Rhythm curve, cubic-bezier(0.7, 0.0, 0.2, 1.0).
   * smooth Smooth curve, cubic-bezier(0.4, 0.0, 0.4, 1.0).
   * cubic-bezier(x1, y1, x2, y2) You can customize an animation speed curve in the cubic-bezier() function. The x and y values of each input parameter must be between 0 and 1.
   * Step curve. The number must be set and only an integer is supported, step-position is optional. It can be set to start or end. The default value is end.
   * The default value is ease.
   * @devices tv, phone, tablet, wearable
   */
  easing: string;

  /**
   * Delay for the animation start. The default value indicates no delay.
   * The default value is 0.
   * @devices tv, phone, tablet, wearable
   */
  delay: number;

  /**
   * Number of times the animation will be played. number indicates a fixed number of playback operations, and Infinity indicates an unlimited number of playback operations.
   * The default value is 1.
   * @devices tv, phone, tablet, wearable
   */
  iterations: number | string;

  /**
   * The animation playback mode.
   * The default value is "normal".
   * @devices tv, phone, tablet, wearable
   */
  direction: "normal" | "reverse" | "alternate" | "alternate-reverse";

  /**
   * Whether to resume to the initial state after the animation is executed.
   * none: The initial state is restored after the animation is executed.
   * forwards: The state at the end of the animation (defined in the last key frame) is retained after the animation is executed.
   * @devices tv, phone, tablet, wearable
   */
  fill: "none" | "forwards" | "backwards" | "both";
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface AnimationResult {
  /**
   * Read-only attribute, which indicates whether the animation playback is complete.
   * @devices tv, phone, tablet, wearable
   */
  finished: boolean;
  /**
   * Read-only attribute, which indicates whether an animation is waiting for the completion of other asynchronous operations (for example, start an animation with a delay).
   * @devices tv, phone, tablet, wearable
   */
  pending: boolean;
  /**
   * Animation running state:
   * idle: The animation is not running (playback ended or not started).
   * running: The animation is running.
   * paused: The animation is paused.
   * finished: Animation playback ends.
   * @devices tv, phone, tablet, wearable
   */
  playstate: string;
  /**
   * Animation start time. This attribute is similar to that of delay in the options parameters.
   * @devices tv, phone, tablet, wearable
   */
  startTime: number;
  /**
   * Starts the animation.
   * @devices tv, phone, tablet, wearable
   */
  play(): void;
  /**
   * Ends the animation.
   * @devices tv, phone, tablet, wearable
   */
  finish(): void;
  /**
   * Pauses the animation.
   * @devices tv, phone, tablet, wearable
   */
  pause(): void;
  /**
   * Cancels the animation.
   * @devices tv, phone, tablet, wearable
   */
  cancel(): void;
  /**
   * Plays the animation in reverse direction.
   * @devices tv, phone, tablet, wearable
   */
  reverse(): void;
  /**
   * The animation is started.
   * @devices tv, phone, tablet, wearable
   */
  onstart: () => void;
  /**
   * The animation is finished.
   * @devices tv, phone, tablet, wearable
   */
  onfinish: () => void;
  /**
   * The animation is canceled.
   * @devices tv, phone, tablet, wearable
   */
  oncancel: () => void;
  /**
   * The animation is repeated.
   * @devices tv, phone, tablet, wearable
   */
  onrepeat: () => void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface Element {
  /**
   * Requests or cancels the focus for a component.
   * If focus is set to true, the focus is requested for the component.
   * If focus is set to false, the focus is canceled for the component.
   * This attribute can be defaulted to true.
   * @param obj { focus: true | false }
   * @devices tv, phone, tablet, wearable
   */
  focus(obj?: FocusParamObj): void;

  /**
   * Requests or cancels the crown rotation focus for a component.
   * If focus is set to true, the crown event focus is requested.
   * If focus is set to false, the crown event focus is canceled.
   * This attribute can be defaulted to true.
   * @param obj { focus: true | false }
   * @devices tv, phone, tablet, wearable
   */
  rotation(obj?: FocusParamObj): void;

  /**
   * Creates and runs an animation shortcut on the component. Specify the keyframes and options required for the animation.
   * @param keyframes keyframes is used to describe key frame parameters of the animation.
   * @param options Options. is used to describe animation parameters.
   * @returns This method returns the animation object.
   * @devices tv, phone, tablet, wearable
   */
  animate(
    keyframes: Array<AnimateStyle>,
    options: AnimateOptions
  ): AnimationResult;

  /**
   * Obtains the size and position of the element.
   * @returns RectObj the size position of the element.
   * @devices tv, phone, tablet, wearable
   */
  getBoundingClientRect(): RectObj;

  /**
   * If 0.5 is returned, 50% of the current component is visible.
   * @param radios Scope of Monitoring components.
   */
  createIntersectionObserver(param: {ratios: Array<number>}): observer;
}

declare interface observer {
  /**
   * Turn on the listener.
   */
  observe(callback: string): void;

  /**
   * Turn off the listenerr.
   */
  unobserve(): void;
}

/**
 * animation element
 * @devices tv, phone, tablet, wearable
 */
declare interface AnimationElement extends Element {
  /**
   * Starts the animation.
   * @devices tv, phone, tablet, wearable
   */
  play(): void;
  /**
   * Ends the animation.
   * @devices tv, phone, tablet, wearable
   */
  finish(): void;
  /**
   * Pauses the animation.
   * @devices tv, phone, tablet, wearable
   */
  pause(): void;
  /**
   * Cancels the animation.
   * @devices tv, phone, tablet, wearable
   */
  cancel(): void;
  /**
   * Plays the animation in reverse direction.
   * @devices tv, phone, tablet, wearable
   */
  reverse(): void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface ScrollParam {
  /**
   * Offset for scrolling in the horizontal direction, in px.
   * @devices tv, phone, tablet, wearable
   */
  dx?: number;

  /**
   * Offset for scrolling in the vertical direction, in px.
   * @devices tv, phone, tablet, wearable
   */
  dy?: number;

  /**
   * Whether a sliding animation is displayed when scroll position is changed.
   * @devices tv, phone, tablet, wearable
   */
  smooth?: boolean;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface CurrentOffsetResultValue {
  /**
   * Scrolling offset in the x-axis, in px.
   * @devices tv, phone, tablet, wearable
   */
  x: number;

  /**
   * Scrolling offset in the y-axis, in px.
   * @devices tv, phone, tablet, wearable
   */
  y: number;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
declare interface ListScrollToOptions {
  /**
   * specified position.
   */
  index: number;
}

/**
 * The <list> component provides a list container.
 * @devices tv, phone, tablet, wearable
 */
declare interface ListElement extends Element {
  /**
   * Scrolls the list to the position of the item at the specified index.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  scrollTo(position: ListScrollToOptions): void;

  /**
   * Scrolls the list for a certain distance.
   * This method applies only to smart TVs.
   * @devices tv
   */
  scrollBy(data: ScrollParam): void;

  /**
   * If smooth is set to false (default value), the list is directly scrolled to the top.
   * If smooth is set to true, the list is smoothly scrolled to the top.
   * @param param
   * @devices tv, phone, tablet, wearable
   */
  scrollTop(param: { smooth: boolean }): void;

  /**
   * If smooth is set to false (default value), the list is directly scrolled to the bottom.
   * If smooth is set to true, the list is smoothly scrolled to the bottom.
   * @param param
   * @devices tv, phone, tablet, wearable
   */
  scrollBottom(param: { smooth: boolean }): void;

  /**
   * If reverse is set to false (default value), the next page is displayed. If there is no next page, the list scrolls to the bottom.
   * If reverse is set to true, the previous page is displayed. If there is no previous page, the list scrolls to the top.
   * If smooth is set to false (default value), the list is directly scrolled to another page.
   * If smooth is set to true, the list is smoothly scrolled to another page.
   * @param params
   * @devices tv, phone, tablet, wearable
   */
  scrollPage(params: { reverse: boolean; smooth: boolean }): void;

  /**
   * If reverse is set to false (default value), the list scrolls towards the bottom for a certain distance. If there is no sufficient distance, the list scrolls to the bottom.
   * If reverse is set to true, the list scrolls towards the top for a certain distance. If there is no sufficient distance, the list scrolls to the top.
   * If smooth is set to false (default value), the list is directly scrolled.
   * If smooth is set to true, the list is smoothly scrolled.
   * @param params
   * @devices tv, phone, tablet, wearable
   */
  scrollArrow(params: { reverse: boolean; smooth: boolean }): void;

  /**
   * Collapses a group.
   * @param param
   * @devices tv, phone, tablet, wearable
   */
  collapseGroup(param: {
    /**
     * groupid: ID of the group to collapse.
     * All groups are collapsed when groupid is not specified.
     */
    groupid: string;
  }): void;

  /**
   * Expands a group.
   * @param param
   * @devices tv, phone, tablet, wearable
   */
  expandGroup(param: {
    /**
     * groupid: ID of the group to expand.
     * All groups are expanded when groupid is not specified.
     */
    groupid: string;
  }): void;

  /**
   * Returns the offset of the current scrolling. The return value type is Object.
   * @devices tv, phone, tablet, wearable
   */
  currentOffset(): CurrentOffsetResultValue;
}

/**
 * The <swiper> component provides a swiper container.
 * @devices tv, phone, tablet, wearable
 */
declare interface SwiperElement extends Element {
  /**
   * Scrolls the child component to the position at the specified index.
   * @devices tv, phone, tablet, wearable
   */
  swipeTo(position: {
    /**
     * specified position.
     */
    index: number;
  }): void;

  /**
   * Shows the next child component.
   * @devices tv, phone, tablet, wearable
   */
  showNext(): void;

  /**
   * Shows the previous child component.
   * @devices tv, phone, tablet, wearable
   */
  showPrevious(): void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface CameraTakePhotoOptions {
  /**
   * Picture quality.
   */
  quality: "high" | "normal" | "low";

  /**
   * Callback function for successful interface invocation.
   * @param result the request execution result.
   * @devices tv, phone, tablet, wearable
   */
  success?: (result: Object) => void;

  /**
   * Callback function for interface invocation failure.
   * @param result the request execution result.
   * @devices tv, phone, tablet, wearable
   */
  fail?: (result: Object) => void;

  /**
   * Callback function at the end of the interface invoking (executed both successfully and unsuccessfully).
   * @param result the request execution result.
   * @devices tv, phone, tablet, wearable
   */
  complete?: (result: Object) => void;
}

/**
 * The <camera> component provides preview and photographing functions..
 * @devices tv, phone, tablet, wearable
 */
declare interface CameraElement extends Element {
  /**
   * Take photos with specified parameters.
   * @param options the parameters of camera.
   * @devices tv, phone, tablet, wearable
   */
  takePhoto(options: CameraTakePhotoOptions): void;
}

/**
 * The <web> component is a container for displaying web page content.
 * @devices tv, phone, tablet
 */
declare interface WebElement extends Element {
  /**
   * Reload the web page content
   * @devices tv, phone, tablet
   */
  reload(): void;
}

/**
 * The <dialog> component is a custom pop-up container.
 * @devices tv, phone, tablet, wearable
 */
declare interface DialogElement extends Element {
  /**
   * Shows a dialog box.
   * @devices tv, phone, tablet, wearable
   */
  show(): void;
  /**
   * Closes a dialog box.
   * @devices tv, phone, tablet, wearable
   */
  close(): void;
}

/**
 * The <image-animator> component is used to provide an image frame animator.
 * @devices tv, phone, tablet, wearable
 */
declare interface ImageAnimatorElement extends Element {
  /**
   * Starts to play the frame animation of an image. If this method is called again, the playback starts from the first frame.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  start(): void;
  /**
   * Pauses the frame animation playback of an image.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  pause(): void;
  /**
   * Stops the frame animation playback of an image.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  stop(): void;
  /**
   * Resumes the frame animation playback of an image.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  resume(): void;
  /**
   * Obtains the playback state. Available values are as follows:
   * Playing
   * Paused
   * Stopped
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  getState(): "Playing" | "Paused" | "Stopped";
}

/**
 * The <marquee> component inserts scrolling text, which is displayed in a single line by default.
 * When the text length exceeds the display area of the component, the marquee effect is displayed.
 * @devices tv, phone, tablet, wearable
 */
declare interface MarqueeElement extends Element {
  /**
   * Starts scrolling.
   * @devices tv, phone, tablet, wearable
   */
  start(): void;

  /**
   * Stops scrolling.
   * @devices tv, phone, tablet, wearable
   */
  stop(): void;
}

/**
 * The <menu> component provides menus as temporary pop-up windows to display operations that can be performed by users.
 * @devices tv, phone, tablet
 */
declare interface MenuElement extends Element {
  /**
   * Displays the menu.
   * x and y specify the position of the displayed menu.
   * x indicates the X-axis coordinate from the left edge of the visible area, and does not include any scrolling offset.
   * y indicates the Y-axis coordinate from the upper edge of the visible area, and does not include any scrolling offset or a status bar.
   * The menu is preferentially displayed in the lower right corner.
   * When the visible space on the right is insufficient, the menu is moved leftward.
   * When the visible space in the lower part is insufficient, the menu is moved upward.
   * @param position
   * @devices tv, phone, tablet
   */
  show(position: { x: number; y: number }): void;
}

/**
 * The <chart> component displays line charts, gauge charts, and bar charts.
 * @devices tv, phone, tablet, wearable
 */
declare interface ChartElement extends Element {
  /**
   * Data is dynamically added to an existing data sequence.
   * The target sequence is specified based on serial, which is the subscript of the datasets array and starts from 0.
   * datasets[index].data is not updated. Only line charts support this attribute.
   * The value is incremented by 1 based on the horizontal coordinate and is related to the xAxis min/max setting.
   * @devices tv, phone, tablet, wearable
   */
  append(params: {
    /**
     * Set the data subscript of the line chart to be updated.
     */
    serial: number;
    /**
     * Set the new data.
     */
    data: Array<number>;
  }): void;
}

/**
 * The <input> component provides an interactive interface to receive user input, which is displayed in a single line by default.
 * @devices tv, phone, tablet, wearable
 */
declare interface InputElement extends Element {
  /**
   * Obtains or loses the focus of a component.
   * When the component type is set to text, email, date, time, number, or password, the input method can be displayed or collapsed.
   * @param param If focus is not passed, the default value true is used.
   * @devices tv, phone, tablet, wearable
   */
  focus(param: { focus: boolean }): void;

  /**
   * Displays the error message.
   * This attribute is available when the component type is set to text, email, date, time, number, or password.
   * @param param
   * @devices tv, phone, tablet, wearable
   */
  showError(param: { error: string }): void;

  /**
   * Deletes the previous character at the cursor position.
   * @devices tv, phone, tablet, wearable
   */
  delete(): void;
}

/**
 * The <button> component includes capsule, circle, text, arc, and download buttons.
 * @devices tv, phone, tablet, wearable
 */
declare interface ButtonElement extends Element {
  /**
   * Progress bar of the download button.
   * The value ranges from 0 to 100. The progress bar is displayed if the value is greater than 0.
   * If the value is greater than or equal to 100, the progress bar is not displayed.
   * NOTE
   * The text displayed on the progress bar is changed based on the value.
   * @param param
   * @devices tv, phone, tablet, wearable
   */
  setProgress(param: { progress: number }): void;
}

/**
 * The <textarea> component provides an interactive interface to receive user input, which is displayed in multiple lines by default.
 * @devices tv, phone, tablet
 */
declare interface TextAreaElement extends Element {
  /**
   * Obtains or loses the focus of a component, which can display or collapse the input method.
   * @param param If focus is not passed, the default value true is used.
   * @devices tv, phone, tablet
   */
  focus(param: { focus: boolean }): void;
}

/**
 * The <picker> component supports common, date, time, and multi-column text selectors.
 * @devices tv, phone, tablet
 */
declare interface PickerElement extends Element {
  /**
   * Displays the picker.
   * @devices tv, phone, tablet
   */
  show(): void;
}

/**
 * The <video> component provides a video player.
 * @devices tv, phone, tablet
 */
declare interface VideoElement extends Element {
  /**
   * Requests to start playing a video.
   * @devices tv, phone, tablet
   */
  start(): void;

  /**
   * Requests to pause a video.
   * @devices tv, phone, tablet
   */
  pause(): void;

  /**
   * Specifies the video playing position.
   * @param param
   * @devices tv, phone, tablet
   */
  setCurrentTime(param: { currenttime: number }): void;

  /**
   * Requests to enter the full screen mode.
   * @param param
   * @devices tv, phone, tablet
   */
  requestFullscreen(param: { screenOrientation: "default" }): void;

  /**
   * Requests to exit the full screen mode.
   * @devices tv, phone, tablet
   */
  exitFullscreen(): void;

  /**
   * Requests to stop playing a video.
   * @devices tv, phone, tablet
   */
  stop(): void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface TextMetrics {
  /**
   * @devices tv, phone, tablet, wearable
   */
  width: number;
}

/**
 * Provides a 2D rendering context for the drawing surface of the < Canvas > element.
 * It is used to draw shapes, text, images and other objects.
 */
declare interface OffscreenCanvasRenderingContext2D {
  /**
   * Gets the dotted spacing of a line.
   * Returns the current line segment style array containing an even number of non-negative numbers.
   */
  getLineDash: Array<number>;

  /**
   * Fill style attribute.
   * Paint color used to fill the area.
   * Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object.
   * Canvas pattern. You can call createPattern() to create a CanvasPattern object.
   */
  fillStyle?: string | CanvasGradient | CanvasPattern;

  /**
   * Sets the stroke paint style.
   * Color of the stroke paint.
   * Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object.
   * Canvas pattern. You can call createPattern() to create a CanvasPattern object.
   */
  strokeStyle?: string | CanvasGradient | CanvasPattern;

  /**
   * Sets the dotted spacing of a line.
   * @param segments A set of numbers describing the length of alternating drawn line segments and spacing (coordinate space units).
   */
  setLineDash(segments: Array<number>): void;

  /**
   * Draw an Image object.
   * @param image An element drawn to the context.
   * @param dx The top left corner of the image is the X-axis coordinates on the target canvas.
   * @param dy The top left corner of the image is the Y-axis coordinates on the target canvas.
   * @param dw Image The width drawn on the target canvas.
   * @param dh Image The height drawn on the target canvas.
   */
  drawImage(image: Image, dx: number, dy: number, dw: number, dh: number): void;

  /**
   * Draw an Image object.
   * @param image An element drawn to the context.
   * @param dx The top left corner of the image is the X-axis coordinates on the target canvas.
   * @param dy The top left corner of the image is the Y-axis coordinates on the target canvas.
   * @param dw Image The width drawn on the target canvas.
   * @param dh Image The height drawn on the target canvas.
   * @param sx The upper-left X-axis coordinates of the image's rectangular (clipped) selection box that need to be drawn into the target context.
   * @param sy The upper-left Y-axis coordinates of the image's rectangular (clipped) selection box that need to be drawn into the target context.
   * @param sw The width of the image's rectangular (clipped) selection box that needs to be drawn into the target context.
   * @param sh The height of the image's rectangular (clipped) selection box that needs to be drawn into the target context.
   */
  drawImage(image: Image, sx: number, sy: number, sw: number, sh: number,dx: number, dy: number, dw: number, dh: number): void;

  /**
   * Creates a drawing path.
   */
  beginPath(): void;

  /**
   * Crop the current canvas.
   */
  clip(): void;

  /**
   * Fills the current canvas with color.
   */
  fill(): void;

  /**
   * Check whether the specified coordinate point is on the Path.
   * @param x The X coordinate of the detection point.
   * @param y The Y coordinate of the detection point.
   * @returns boolean Return true if the detection point is contained within the current or specified path Otherwise return false.
   */
  isPointInPath(x: number, y: number): boolean;

  /**
   * Check whether the specified coordinate point is on the Path.
   * @param path The Path2D path that needs to be populated.
   * @param x The X coordinate of the detection point.
   * @param y The Y coordinate of the detection point.
   * @param fillRule This algorithm determines whether a point is in or out of the path.
   * @returns boolean Return true if the detection point is contained within the current or specified path Otherwise return false.
   */
  isPointInPath(path: Path2D, x: number, y: number): boolean;

  /**
   * Checks whether the specified coordinate point is on the stroke edge.
   * @param x The X coordinate of the detection point.
   * @param y The Y coordinate of the detection point.
   * @returns boolean A Boolean value that returns true when the point is on the line of the path, false otherwise.
   */
  isPointInStroke(x: number, y: number): boolean;

  /**
   * Checks whether the specified coordinate point is on the stroke edge.
   * @param path Path2D path.
   * @param x The X coordinate of the detection point.
   * @param y The Y coordinate of the detection point.
   * @returns boolean A Boolean value that returns true when the point is on the line of the path, false otherwise.
   */
  isPointInStroke(path: Path2D, x: number, y: number): boolean;

  /**
   * Stroke draws the current path.
   */
  stroke(): void;

  /**
   * Stroke draws the current path.
   * @param path The object of Path2D.
   */
  stroke(path: Path2D): void;

  /**
   * Create a radial tween object.
   * @param x0 The x coordinate of the circle at the beginning.
   * @param y0 The y coordinate of the circle at the beginning.
   * @param r0 The radius of the starting circle.
   * @param x1 X-coordinate of the end point.
   * @param y1 Y-coordinate of the end point.
   * @param r1 The radius of End Circle.
   * @returns RadialGradient object.
   */
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;

  /**
   * Create a drawing style template.
   * @param image The CanvasImageSource object that is the source of the duplicate image.
   * @param repetition Specify how to repeat images.
   * @returns CanvasPattern An opaque object that describes a schema.
   */
  createPattern(image: Image, repetition: string): CanvasPattern;

  /**
   * Creates a linear gradient color.
   * @param x0 X-coordinate of the start point.
   * @param y0 Y-coordinate of the start point.
   * @param x1 X-coordinate of the end point.
   * @param y1 Y-coordinate of the end point.
   * @returns LinearGradient object.
   */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;

  /**
   * Create an ImageData object.
   * @param sw The width of the new object.
   * @param sh The height of the new object.
   * @returns ImageData New ImageData object with width and height specified.
   */
  createImageData(sw: number, sh: number): ImageData;

  /**
   * Create an ImageData object.
   * @param imagedata Copy an object of the same width and height from an existing ImageData object The image itself is not allowed to be copied.
   * @returns ImageData New ImageData object with width and height specified.
   */
  createImageData(imagedata: ImageData): ImageData;

  /**
   * Creates a path that is later used by the CanvasRenderingContext2D object.
   * @param path another created Path2D object.
   * @returns the object of Path2D.
   */
  createPath2D(path?: Path2D): Path2D;

  /**
   * Creates a path that is later used by the CanvasRenderingContext2D object.
   * @param cmds a string defined using the SVG path command.
   * @returns the object of Path2D.
   */
  createPath2D(cmds?: string): Path2D;

  /**
   * Get an ImageData object.
   * @param sx The upper-left x-coordinate of the rectangular area of the image data to be extracted.
   * @param sy The upper-left y coordinate of the rectangular region of the image data to be extracted.
   * @param sw The width of the rectangular area of the image data to be extracted.
   * @param sh The height of the rectangular area of the image data to be extracted.
   * @returns ImageData An ImageData object that contains the rectangular ImageData given by the canvas.
   */
  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;

  /**
   * Draws the specified ImageData object to the canvas.
   * @param imagedata An array object containing pixel values.
   * @param dx The offset of the position of the source image data in the target canvas (the offset in the X-axis direction).
   * @param dy The offset of the position of the source image data in the target canvas (the Y-axis offset).
   */
  putImageData(imagedata: ImageData, dx: number, dy: number): void;

  /**
   * Draws the specified ImageData object to the canvas.
   * @param imagedata An array object containing pixel values.
   * @param dx The offset of the position of the source image data in the target canvas (the offset in the X-axis direction).
   * @param dy The offset of the position of the source image data in the target canvas (the Y-axis offset).
   * @param dirtyX In the source image data, the position of the upper left corner of the rectangular region Default is the upper left corner of the entire image data (x coordinate).
   * @param dirtyY In the source image data, the position of the upper left corner of the rectangular region Default is the top left corner (y coordinate) of the entire image data.
   * @param dirtyWidth In the source image data, the width of a rectangular region. Default is the width of the image data.
   * @param dirtyHeight In the source image data, the height of a rectangular region. Default is the height of the image data.
   */
  putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;

  /**
   * Draw an arc.
   * @param radius Radius of an arc.
   * @param x The X-axis coordinates of the center of the circle.
   * @param y The Y-axis coordinates of the center of an arc (center of a circle).
   * @param startAngle The starting point of the arc, in the X-axis direction, is calculated in radians.
   * @param endAngle The end point of an arc, expressed in radians.
   * @param anticlockwise An optional Boolean value. If true, the arc is drawn counterclockwise, and otherwise clockwise.
   */
  arc(radius: number, x: number, y: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

  /**
   * Draws an arc from the beginning to the end.
   * @param radius Radius of an arc.
   * @param x1 The X-axis coordinates of the first control point.
   * @param y1 The y-coordinate of the first control point.
   * @param x2 The X-axis coordinates of the second control point.
   * @param y2 The Y-axis coordinates of the second control point.
   */
  arcTo(x1: number, x2: number, y1: number, y2: number, radius: number): void;

  /**
   * Draw a third order Bezier curve.
   * @param cp1x The X-axis coordinates of the first control point.
   * @param cp1y The y-coordinate of the first control point.
   * @param cp2x The X-axis coordinates of the second control point.
   * @param cp2y The Y-axis coordinates of the second control point.
   * @param x The x-coordinate of the end point.
   * @param y The y-coordinate of the end point
   */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

  /**
   * Closing the current path.
   */
  closePath(): void;

  /**
   * Draw a straight line.
   * @param x The X-axis coordinates at the end of the line.
   * @param y The Y-axis coordinates at the end of the line.
   */
  lineTo(x: number, y: number): void;

  /**
   * Draw an ellipse.
   * @param x The X-axis coordinates of the center of the ellipse.
   * @param y The Y-axis coordinates of the center of the ellipse.
   * @param radiusX The radius of the major axis of an ellipse.
   * @param radiusY The radius of the short axis of an ellipse.
   * @param rotation The Angle of rotation of an ellipse, expressed in radians.
   * @param startAngle The starting point Angle to be plotted, measured from the X-axis, is expressed in radians.
   * @param endAngle The Angle, expressed in radians, at which the ellipse will be drawn.
   * @param anticlockwise If true, the ellipse is drawn counterclockwise (counterclockwise) and clockwise otherwise.
   */
  ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;

  /**
   * Moves the current canvas to the specified coordinate point.
   * @param x The x axis.
   * @param y The y axis.
   */
  moveTo(x: number, y: number): void;

  /**
   * Draw a second order Bezier curve.
   * @param x The X-axis of the end point.
   * @param y The Y-axis of the end point.
   * @param cpx The X-axis coordinates of the control points.
   * @param cpy The y-coordinate of the control point.
   */
  quadraticCurveTo(cpx: number, cpy: number,x: number, y: number): void;

  /**
   * Draw a rectangle.
   * @param x The X-axis coordinates at the beginning of the rectangle.
   * @param y The Y-axis coordinates at the beginning of the rectangle.
   * @param w The width of a rectangle.
   * @param h The height of a rectangle.
   */
  rect(x: number, y: number, w: number, h: number): void;

  /**
   * Clears the contents of the specified rectangular area.
   * @param x The X-axis coordinates at the beginning of the rectangle.
   * @param y The Y-axis coordinates at the beginning of the rectangle.
   * @param w The width of a rectangle.
   * @param h The height of a rectangle.
   */
  clearRect(x: number, y: number, w: number, h: number): void;

  /**
   * Fills a rectangular area.
   * @param x The X-axis coordinates at the beginning of the rectangle.
   * @param y The Y-axis coordinates at the beginning of the rectangle.
   * @param w The width of a rectangle.
   * @param h The height of a rectangle.
   */
  fillRect(x: number, y: number, w: number, h: number): void;

  /**
   * Stroke a rectangular area.
   * @param x The X-axis coordinates at the beginning of the rectangle.
   * @param y The Y-axis coordinates at the beginning of the rectangle.
   * @param w The width of the rectangle. Positive values on the right, negative values on the left.
   * @param h The height of the rectangle. Positive values are down, negative values are up.
   */
  strokeRect(x: number, y: number, w: number, h: number): void;

  /**
   * Stroke a rectangular area.
   * @param text Render text using the current values of font, textAlign, textBaseline, and direction.
   * @param y The Y-axis coordinates of the starting point of the text.
   * @param x The X-axis coordinates of the starting point of the text.
   * @param maxWidth Maximum width to draw.
   */
  fillText(text: string, y: number, x: number/*, maxWidth?: number*/): void;

  /**
   * Returns a TextMetrics object used to obtain the width of specified text.
   * @param text Text to be measured.
   * @returns Object that contains the text width. You can obtain the width by TextMetrics.width.
   */
  measureText(text: string): TextMetrics;

  /**
   * Draws the stroke of a text string.
   * @param text Text stroke to draw.
   * @param x X-coordinate of the lower left corner of the text stroke.
   * @param y Y-coordinate of the lower left corner of the text stroke.
   * @param maxWidth Maximum width to draw.
   */
  strokeText(text: string, x: number, y: number/*, maxWidth?: number*/): void;

  /**
   * Resets the current matrix transformation effect.
   */
  resetTransform(): void;

  /**
   * Adds a rotation effect to the current canvas.
   * @param angle The radian of clockwise rotation.
   */
  rotate(angle: number): void;

  /**
   * Adds a zoom effect to the current canvas.
   * @param x The horizontal scaling factor.
   * @param y The scaling factor in the vertical direction.
   */
  scale(x: number, y: number): void;

  /**
   * Set the rotation, pan, and zoom effects.
   * @param a The level of zoom.
   * @param b Vertical tilt.
   * @param c Horizontal tilt.
   * @param d Vertical scaling.
   * @param e The level of mobile.
   * @param f Vertical movement.
   */
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  /**
   * Set the rotation, pan, and zoom effects.
   * @param a The level of zoom.
   * @param b Vertical tilt.
   * @param c Horizontal tilt.
   * @param d Vertical scaling.
   * @param e The level of mobile.
   * @param f Vertical movement.
   */
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  /**
   * Adds a pan effect to the current canvas.
   * @param x Horizontal movement distance.
   * @param y Vertical movement.
   */
  translate(x: number, y: number): void;

  /**
   * Restores the configuration information of the last saved canvas context.
   */
  restore(): void;

  /**
   * Saves configuration information for the current canvas context.
   */
  save(): void;
}

/**
 * CanvasRenderingContext2D allows you to draw rectangles, text, images, and other objects on a canvas.
 * You can call getContext('2d') on canvas to obtain a CanvasRenderingContext2D object.
 */
declare interface CanvasRenderingContext2D {
  /**
   * Fills a rectangle on the canvas.
   * @param x X-coordinate of the upper left corner of the rectangle.
   * @param y Y-coordinate of the upper left corner of the rectangle.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  fillRect(x: number, y: number, width: number, height: number): void;

  /**
   * Sets the style of a paint to fill an area.
   * Paint color used to fill the area.
   * Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object.
   * Canvas pattern. You can call createPattern() to create a CanvasPattern object.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  fillStyle?: string | CanvasGradient | CanvasPattern;

  /**
   * Clears the content in a rectangle on the canvas.
   * @param x X-coordinate of the upper left corner of the rectangle.
   * @param y Y-coordinate of the upper left corner of the rectangle.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   * @devices tv, phone, tablet, wearable
   */
  clearRect(x: number, y: number, width: number, height: number): void;

  /**
   * Draws a rectangle stroke on the canvas.
   * @param x X-coordinate of the upper left corner of the rectangle stroke.
   * @param y Y-coordinate of the upper left corner of the rectangle stroke.
   * @param width Width of the rectangle stroke.
   * @param height Height of the rectangle stroke.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  strokeRect(x: number, y: number, width: number, height: number): void;

  /**
   * Draws filled text on the canvas.
   * @param text Text to draw.
   * @param x X-coordinate of the lower left corner of the text.
   * @param y Y-coordinate of the lower left corner of the text.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  fillText(text: string, x: number, y: number): void;

  /**
   * Draws a text stroke on the canvas.
   * @param text Text stroke to draw.
   * @param x X-coordinate of the lower left corner of the text stroke.
   * @param y Y-coordinate of the lower left corner of the text stroke.
   * @devices tv, phone, tablet, wearable
   */
  strokeText(text: string, x: number, y: number): void;

  /**
   * Returns a TextMetrics object used to obtain the width of specified text.
   * @param text Text to be measured.
   * @returns Object that contains the text width. You can obtain the width by TextMetrics.width.
   * @devices tv, phone, tablet, wearable
   */
  measureText(text: string): TextMetrics;

  /**
   * Sets the width of a line.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  lineWidth?: number;

  /**
   * Sets the stroke paint style.
   * Color of the stroke paint.
   * Canvas gradient object used by the paint. You can call createLinearGradient() to create a CanvasGradient object.
   * Canvas pattern. You can call createPattern() to create a CanvasPattern object.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  strokeStyle?: string | CanvasGradient | CanvasPattern;

  /**
   * Draws a border stroke.
   * @devices tv, phone, tablet, wearable
   */
  stroke(): void;

  /**
   * Draws a path stroke.
   * @param path The object of Path2D.
   * @devices tv, phone, tablet, wearable
   */
  stroke(path: Path2D): void;

  /**
   * Creates a drawing path.
   * @devices tv, phone, tablet, wearable
   */
  beginPath(): void;

  /**
   * Moves a drawing path to a target position on the canvas.
   * @param x X-coordinate of the target position.
   * @param y Y-coordinate of the target position.
   * @devices tv, phone, tablet, wearable
   */
  moveTo(x: number, y: number): void;

  /**
   * Connects the current point to a target position using a straight line.
   * @param x X-coordinate of the target position.
   * @param y Y-coordinate of the target position.
   * @devices tv, phone, tablet, wearable
   */
  lineTo(x: number, y: number): void;

  /**
   * Draws a closed path.
   * @devices tv, phone, tablet, wearable
   */
  closePath(): void;

  /**
   * Sets the style of line endpoints.
   * Style of line endpoints. Available values include:
   * butt (default): The endpoints of the line are in square.
   * round: The endpoints of the line are rounded.
   * square: The endpoints of the line are in square,
   * and each end of the line is added with a rectangle whose length is the same as the line thickness and whose width is half of the line thickness.
   * @devices tv, phone, tablet, wearable
   */
  lineCap: string;

  /**
   * Sets the style for an intersection point where a line joins another.
   * Style of the intersection point of lines. Available values include:
   * round: The intersection part is a sector. The radius of a rounded corner is equal to the line width.
   * bevel: The intersection part is a triangle. The rectangular corner of each line is independent.
   * miter (default): The intersection part has a miter corner by extending the outside edges of the lines until they meet. You can view the effect of this attribute in miterLimit.
   * @devices tv, phone, tablet, wearable
   */
  lineJoin: string;

  /**
   * Sets the maximum miter length. The miter length is the distance between the inner corner and the outer corner where two lines meet.
   * Maximum miter length. The default value is 10.
   * @devices tv, phone, tablet, wearable
   */
  miterLimit: number;

  /**
   * Sets the font style.
   * Font style.
   * The default value is 10px sans-serif in tv, phone, tablet, wearable.
   * The default value is 30px SourceHanSansSC-Regular in smartVision.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  font: string;

  /**
   * Sets the text alignment mode.
   * Text alignment mode. Available values include:
   * left (default): The text is left-aligned.
   * right: The text is right-aligned.
   * center: The text is center-aligned.
   * start: The text is aligned with the start bound. Can't be supported by smartVision.
   * end: The text is aligned with the end bound. Can't be supported by smartVision.
   * NOTE
   * In the ltr layout mode, the value start equals to left. In the rtl layout mode, the value start equals to right.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  textAlign: "left" | "right" | "center" | "start" | "end";

  /**
   * Sets whether an image is smooth.
   * default value is true.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  imageSmoothingEnabled: boolean;

  /**
   * Sets a text baseline in the horizontal direction for text alignment.
   * Text baseline. Available values include:
   * alphabetic (default): The text baseline is the normal alphabetic baseline.
   * top: The text baseline is on the top of the text bounding box.
   * hanging: The text baseline is a hanging baseline over the text.
   * middle: The text baseline is in the middle of the text bounding box.
   * ideographic: The text baseline is the ideographic baseline. If a character exceeds the alphabetic baseline, the ideographic baseline is located at the bottom of the excessive character.
   * bottom: The text baseline is at the bottom of the text bounding box. Its difference from the ideographic baseline is that the ideographic baseline does not consider letters in the next line.
   * @devices tv, phone, tablet, wearable
   */
  textBaseline: string;

  /**
   * Creates a linear gradient color.
   * @param x0 X-coordinate of the start point.
   * @param y0 Y-coordinate of the start point.
   * @param x1 X-coordinate of the end point.
   * @param y1 Y-coordinate of the end point.
   * @returns LinearGradient object.
   * @devices tv, phone, tablet, wearable
   */
  createLinearGradient(
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): CanvasGradient;

  /**
   * Creates a radial gradient color.
   * @param x0 X-coordinate of the start point.
   * @param y0 Y-coordinate of the start point.
   * @param r0 The radius of the starting circle.
   * @param x1 X-coordinate of the end point.
   * @param y1 Y-coordinate of the end point.
   * @param r1 The radius of End Circle.
   * @returns RadialGradient object.
   * @devices tv, phone, tablet, wearable
   */
  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number
  ): CanvasGradient;

  /**
   * Creates a pattern for image filling based on a specified source image and repetition mode.
   * @param image Source image.
   * @param repetition Repetition mode. The value can be "repeat", "repeat-x", "repeat-y", or "no-repeat".
   * @returns Pattern of image filling.
   * @devices tv, phone, tablet, wearable
   */
  createPattern(image: Image, repetition: string): object;

  /**
   * Creates a path that is later used by the CanvasRenderingContext2D object.
   * @param path another created Path2D object.
   * @returns the object of Path2D.
   * @devices tv, phone, tablet, wearable
   */
  createPath2D(path?: Path2D): Path2D;

  /**
   * Creates a path that is later used by the CanvasRenderingContext2D object.
   * @param cmds a string defined using the SVG path command.
   * @returns the object of Path2D.
   * @devices tv, phone, tablet, wearable
   */
  createPath2D(cmds?: string): Path2D;

  /**
   * Draws a cubic bezier curve on the canvas.
   * @param cp1x X-coordinate of the first parameter of the bezier curve.
   * @param cp1y Y-coordinate of the first parameter of the bezier curve.
   * @param cp2x X-coordinate of the second parameter of the bezier curve.
   * @param cp2y Y-coordinate of the second parameter of the bezier curve.
   * @param x End point x-coordinate of the bezier curve.
   * @param y End point y-coordinate of the bezier curve.
   * @devices tv, phone, tablet, wearable
   */
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ): void;

  /**
   * Draws a quadratic curve on the canvas.
   * @param cpx X-coordinate of the bezier curve parameter.
   * @param cpy Y-coordinate of the bezier curve parameter.
   * @param x End point x-coordinate of the bezier curve.
   * @param y End point y-coordinate of the bezier curve.
   * @devices tv, phone, tablet, wearable
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

  /**
   * Draws an arc on the canvas.
   * @param x X-coordinate of the center point of the arc.
   * @param y Y-coordinate of the center point of the arc.
   * @param radius Radius of the arc.
   * @param startAngle Start radian of the arc.
   * @param endAngel End radian of the arc.
   * @param anticlockwise Whether to draw the arc counterclockwise.
   * @devices tv, phone, tablet, wearable
   */
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngel: number,
    anticlockwise?: boolean
  ): void;

  /**
   * Draws an arc based on the radius and points on the arc.
   * @param x1 X-coordinate of the first point on the arc.
   * @param y1 Y-coordinate of the first point on the arc.
   * @param x2 X-coordinate of the second point on the arc.
   * @param y2 Y-coordinate of the second point on the arc.
   * @param radius Radius of the arc.
   * @devices tv, phone, tablet, wearable
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

  /**
   * Draws an ellipse based on the coordinate and radius.
   * @param x X-coordinate of the center point on the ellipse.
   * @param y Y-coordinate of the center point on the ellipse.
   * @param radiusX X-coordinate of the radius Length on the ellipse.
   * @param radiusY Y-coordinate of the radius Length on the ellipse.
   * @param rotation The rotation angle of the ellipse, in radians.
   * @param startAngle Angle of the start point for ellipse drawing.
   * @param endAngle End Point Angle for Ellipse Drawing.
   * @param anticlockwise Indicates whether to draw an ellipse counterclockwise.
   * 0: clockwise; 1: counterclockwise. The default value is 0.
   * @devices tv, phone, tablet, wearable
   */
  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    anticlockwise?: number
  ): void;

  /**
   * Creates a rectangular.
   * @param x X-coordinate of the upper left corner of the rectangle.
   * @param y Y-coordinate of the upper left corner of the rectangle.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   * @devices tv, phone, tablet, wearable
   */
  rect(x: number, y: number, width: number, height: number): void;

  /**
   * Fills the area inside a closed path.
   * @devices tv, phone, tablet, wearable
   */
  fill(): void;

  /**
   * Sets a path as the clipping path.
   * @devices tv, phone, tablet, wearable
   */
  clip(): void;

  /**
   * Rotates a canvas clockwise around its coordinate axes.
   * @param rotate Clockwise rotation angle. You can use Math.PI / 180 to convert the angle to radian.
   * @devices tv, phone, tablet, wearable
   */
  rotate(rotate: number): void;

  /**
   * Scales a canvas based on scaling factors.
   * @param x Horizontal scale factor.
   * @param y Vertical scale factor.
   * @devices tv, phone, tablet, wearable
   */
  scale(x: number, y: number): void;

  /**
   * Defines a transformation matrix.
   * To transform a graph, you only need to set parameters of the matrix.
   * The coordinates of the corresponding graph are multiplied by the matrix values to obtain new coordinates of the transformed graph.
   * You can use the matrix to implement multiple transform effects.
   * @param scaleX X-axis scale.
   * @param skewX X-axis skew.
   * @param skewY Y-axis skew.
   * @param scaleY Y-axis scale.
   * @param translateX X-axis translation.
   * @param translateY Y-axis translation.
   * @devices tv, phone, tablet, wearable
   */
  transform(
    scaleX: number,
    skewX: number,
    skewY: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void;

  /**
   * Uses same parameters as the transform() function to reset the existing transformation matrix and create a new transformation matrix.
   * @param scaleX X-axis scale.
   * @param skewX X-axis skew.
   * @param skewY Y-axis skew.
   * @param scaleY Y-axis scale.
   * @param translateX X-axis translation.
   * @param translateY Y-axis translation.
   * @devices tv, phone, tablet, wearable
   */
  setTransform(
    scaleX: number,
    skewX: number,
    skewY: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void;

  /**
   * Moves the origin of the coordinate system.
   * @param x X-axis translation.
   * @param y Y-axis translation.
   * @devices tv, phone, tablet, wearable
   */
  translate(x: number, y: number): void;

  /**
   * Sets the alpha value.
   * Global alpha value to set.
   * The value ranges from 0.0 (completely transparent) to 1.0 (completely opaque).
   * @devices tv, phone, tablet, wearable
   */
  globalAlpha: number;

  /**
   * Draws an image.
   * @param image Image resource.
   * @param dx X-coordinate of the upper left corner of the drawing area on the canvas.
   * @param dy Y-coordinate of the upper left corner of the drawing area on the canvas.
   * @param dWidth Width of the drawing area.
   * @param dHeight Height of the drawing area.
   * @devices tv, phone, tablet, wearable
   */
  drawImage(
    image: Image,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number
  ): void;

  /**
   * Draws an image.
   * @param image Image resource.
   * @param sx X-coordinate of the upper left corner of the rectangle used to crop the source image.
   * @param sy Y-coordinate of the upper left corner of the rectangle used to crop the source image.
   * @param sWidth Target width of the image to crop.
   * @param sHeight Target height of the image to crop.
   * @param dx X-coordinate of the upper left corner of the drawing area on the canvas.
   * @param dy Y-coordinate of the upper left corner of the drawing area on the canvas.
   * @param dWidth Width of the drawing area.
   * @param dHeight Height of the drawing area.
   * @devices tv, phone, tablet, wearable
   */
  drawImage(
    image: Image,
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number
  ): void;

  /**
   * Restores the saved drawing context.
   * @devices tv, phone, tablet, wearable
   */
  restore: () => void;

  /**
   * Saves the current drawing context.
   * @devices tv, phone, tablet, wearable
   */
  save: () => void;

  /**
   * Creates an ImageData object.
   * @param width Width of the ImageData object.
   * @param height Height of the ImageData object.
   * @returns Returns the newly created FunctionCallable object.
   * @devices tv, phone, tablet, wearable
   */
  createImageData(width: number, height: number): ImageData;
  /**
   * Creates an ImageData object.
   * @param imagedata ImageData object with the same width and height copied from the original ImageData object.
   * @returns Returns the newly created FunctionCallable object.
   * @devices tv, phone, tablet, wearable
   */
  createImageData(imagedata: ImageData): ImageData;

  /**
   * ImageData object created with pixels in the specified area on the canvas.
   * @param sx X-coordinate of the upper left corner of the output area.
   * @param sy Y-coordinate of the upper left corner of the output area.
   * @param sw Width of the output area.
   * @param sh Height of the output area.
   * @returns ImageData object that contains pixels in the specified area on the canvas.
   * @devices tv, phone, tablet, wearable
   */
  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;

  /**
   * Puts the ImageData onto a rectangular area on the canvas.
   * @param imageData ImageData object with pixels to put onto the canvas.
   * @param dx X-axis offset of the rectangle area on the canvas.
   * @param dy Y-axis offset of the rectangle area on the canvas.
   * @devices tv, phone, tablet, wearable
   */
  putImageData(imageData: ImageData, dx: number, dy: number): void;

  /**
   * Puts the ImageData onto a rectangular area on the canvas.
   * @param imageData ImageData object with pixels to put onto the canvas.
   * @param dx X-axis offset of the rectangle area on the canvas.
   * @param dy Y-axis offset of the rectangle area on the canvas.
   * @param dirtyX X-axis offset of the upper left corner of the rectangle area relative to that of the source image.
   * @param dirtyY Y-axis offset of the upper left corner of the rectangle area relative to that of the source image.
   * @param dirtyWidth Width of the rectangle area to cop the source image.
   * @param dirtyHeight Height of the rectangle area to cop the source image.
   * @devices tv, phone, tablet, wearable
   */
  putImageData(
    imageData: ImageData,
    dx: number,
    dy: number,
    dirtyX: number,
    dirtyY: number,
    dirtyWidth: number,
    dirtyHeight: number
  ): void;

  /**
   * Sets the dash line style.
   * @param segments Interval of alternate line segments and the length of spacing.
   * @devices tv, phone, tablet, wearable
   */
  setLineDash(segments: Array<number>): void;

  /**
   * Obtains the dash line style.
   * @returns Interval of alternate line segments and the length of spacing.
   * @devices tv, phone, tablet, wearable
   */
  getLineDash(): Array<number>;

  /**
   * Sets the dash line offset.
   * Dash line offset. The value is a float number starting from 0.0.
   * @devices tv, phone, tablet, wearable
   */
  lineDashOffset: number;

  /**
   * Sets the composite operation type.
   * source-over Default value. Displays the new drawing above the existing drawing.
   * source-atop Displays the new drawing on the top of the existing drawing.
   * source-in Displays the new drawing inside the existing drawing.
   * source-out Displays part of the new drawing that is outside of the existing drawing.
   * destination-over Displays the existing drawing above the new drawing.
   * destination-atop Displays the existing drawing above the new drawing.
   * destination-in Displays the existing drawing inside the new drawing.
   * destination-out Displays part of the existing drawing that is outside of the new drawing.
   * lighter Displays both the new drawing and the existing drawing.
   * copy Displays the new drawing and neglects the existing drawing.
   * xor Combines the new drawing and existing drawing using the XOR operation.
   * @devices tv, phone, tablet, wearable
   */
  globalCompositeOperation: string;

  /**
   * Sets the shadow blur degree.
   * Shadow blur degree. A larger value indicates a more blurred shadow. The value is of the float type, and the default value is 0.
   * @devices tv, phone, tablet, wearable
   */
  shadowBlur: number;

  /**
   * Sets the shadow color.
   * @devices tv, phone, tablet, wearable
   */
  shadowColor: string;

  /**
   * Sets the x-axis shadow offset relative to the original object.
   * X-axis shadow offset relative to the original object.
   * @devices tv, phone, tablet, wearable
   */
  shadowOffsetX: number;

  /**
   * Sets the y-axis shadow offset relative to the original object.
   * Y-axis shadow offset relative to the original object.
   * @devices tv, phone, tablet, wearable
   */
  shadowOffsetY: number;

  /**
   * Draws the Bitmap to the current canvas.
   * @devices tv, phone, tablet, wearable
   */
  transferFromImageBitmap(bitmap: ImageBitmap): void;
}

/**
 * You can create a gradient object on the canvas by calling CanvasRenderingContext2D.createLinearGradient().
 * @devices tv, phone, tablet, wearable
 */
declare interface CanvasGradient {
  /**
   * Adds a color stop for the CanvasGradient object based on the specified offset and gradient color.
   * @param offset Proportion of the distance between the color stop and the start point to the total length.
   * The value ranges from 0 to 1.
   * @param color Sets the gradient color.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  addColorStop(offset: number, color: string): void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface Path2D {
  /**
   * Add another path to current path.
   * @param path another created Path2D object.
   * @devices tv, phone, tablet, wearable
   */
  addPath(path: Path2D): void;

  /**
   * Uses same parameters as the transform() function to reset the existing transformation matrix and create a new transformation matrix.
   * @param scaleX X-axis scale.
   * @param skewX X-axis skew.
   * @param skewY Y-axis skew.
   * @param scaleY Y-axis scale.
   * @param translateX X-axis translation.
   * @param translateY Y-axis translation.
   * @devices tv, phone, tablet, wearable
   */
  setTransform(
    scaleX: number,
    skewX: number,
    skewY: number,
    scaleY: number,
    translateX: number,
    translateY: number
  ): void;

  /**
   * Draws a closed path.
   * @devices tv, phone, tablet, wearable
   */
  closePath(): void;

  /**
   * Moves a drawing path to a target position on the canvas.
   * @param x X-coordinate of the target position.
   * @param y Y-coordinate of the target position.
   * @devices tv, phone, tablet, wearable
   */
  moveTo(x: number, y: number): void;

  /**
   * Connects the current point to a target position using a straight line.
   * @param x X-coordinate of the target position.
   * @param y Y-coordinate of the target position.
   * @devices tv, phone, tablet, wearable
   */
  lineTo(x: number, y: number): void;

  /**
   * Draws a cubic bezier curve on the canvas.
   * @param cp1x X-coordinate of the first parameter of the bezier curve.
   * @param cp1y Y-coordinate of the first parameter of the bezier curve.
   * @param cp2x X-coordinate of the second parameter of the bezier curve.
   * @param cp2y Y-coordinate of the second parameter of the bezier curve.
   * @param x End point x-coordinate of the bezier curve.
   * @param y End point y-coordinate of the bezier curve.
   * @devices tv, phone, tablet, wearable
   */
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  ): void;

  /**
   * Draws a quadratic curve on the canvas.
   * @param cpx X-coordinate of the bezier curve parameter.
   * @param cpy Y-coordinate of the bezier curve parameter.
   * @param x End point x-coordinate of the bezier curve.
   * @param y End point y-coordinate of the bezier curve.
   * @devices tv, phone, tablet, wearable
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

  /**
   * Draws an arc on the canvas.
   * @param x X-coordinate of the center point of the arc.
   * @param y Y-coordinate of the center point of the arc.
   * @param radius Radius of the arc.
   * @param startAngle Start radian of the arc.
   * @param endAngel End radian of the arc.
   * @param anticlockwise Whether to draw the arc counterclockwise.
   * @devices tv, phone, tablet, wearable
   */
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngel: number,
    anticlockwise?: boolean
  ): void;

  /**
   * Draws an arc based on the radius and points on the arc.
   * @param x1 X-coordinate of the first point on the arc.
   * @param y1 Y-coordinate of the first point on the arc.
   * @param x2 X-coordinate of the second point on the arc.
   * @param y2 Y-coordinate of the second point on the arc.
   * @param radius Radius of the arc.
   * @devices tv, phone, tablet, wearable
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

  /**
   * Draws an ellipse based on the coordinate and radius.
   * @param x X-coordinate of the center point on the ellipse.
   * @param y Y-coordinate of the center point on the ellipse.
   * @param radiusX X-coordinate of the radius Length on the ellipse.
   * @param radiusY Y-coordinate of the radius Length on the ellipse.
   * @param rotation The rotation angle of the ellipse, in radians.
   * @param startAngle Angle of the start point for ellipse drawing.
   * @param endAngle End Point Angle for Ellipse Drawing.
   * @param anticlockwise Indicates whether to draw an ellipse counterclockwise.
   * 0: clockwise; 1: counterclockwise. The default value is 0.
   * @devices tv, phone, tablet, wearable
   */
  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    anticlockwise?: number
  ): void;

  /**
   * Creates a rectangular.
   * @param x X-coordinate of the upper left corner of the rectangle.
   * @param y Y-coordinate of the upper left corner of the rectangle.
   * @param width Width of the rectangle.
   * @param height Height of the rectangle.
   * @devices tv, phone, tablet, wearable
   */
  rect(x: number, y: number, width: number, height: number): void;
}

/**
 * <canvas> provides a rectangular canvas component for drawing graphics on the screen.
 * You can control each pixel to draw on the canvas.
 * <canvas> offers a variety of functions for drawing paths, rectangles, circles, text, and allows for adding images to it.
 */
declare interface CanvasElement extends Element {
  /**
   * Obtains the context of 2D canvas drawing.
   * Only parameters related to 2D canvas drawing are supported.
   * The return value is a 2D drawing object that provides specific 2D drawing operations.
   * @param type identifier defining the drawing context associated to the canvas.
   * @param options use this context attributes to creating rendering context.
   * @devices tv, phone, tablet, wearable, smartVision
   */
  getContext(type: '2d', options?: ContextAttrOptions): CanvasRenderingContext2D;

  /**
   * Obtains the context of webgl canvas drawing.
   * Only parameters related to webgl canvas drawing are supported.
   * The return value is a webgl drawing object that provides specific webgl drawing operations.
   * @param type identifier defining the drawing context associated to the canvas.
   * @param options use this context attributes to creating rendering context.
   * @devices tv, phone, tablet, wearable
   */
  getContext(type: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext;

  /**
   * Obtains the context of webgl2 canvas drawing.
   * Only parameters related to webgl2 canvas drawing are supported.
   * The return value is a webgl2 drawing object that provides specific webgl2 drawing operations.
   * @param type identifier defining the drawing context associated to the canvas.
   * @param options use this context attributes to creating rendering context.
   * @devices tv, phone, tablet, wearable
   */
  getContext(type: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext;

  /**
   * Creates a data URI that contains the image display.
   * @param type A DOMString indicating the image format. The default type is image/png.
   * @param quality A Number between 0 and 1 indicating image quality if the type option
   * is image/jpeg or image/webp. If this argument is anything else,
   * the default value for image quality is used. Other arguments are ignored.
   * @devices tv, phone, tablet, wearable
   */
  toDataURL(type?: string, quality?: number): string;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface ScrollOptions {
  /**
   * Scroll to the target position of the page. Unit: px
   * @devices tv, phone, tablet, wearable
   */
  position: number;

  /**
   * Duration of the scrolling animation, in ms.
   * @devices tv, phone, tablet, wearable
   */
  duration: number;

  /**
   * The selector for current scroll.
   * @devices tv, phone, tablet, wearable
   */
  id?: string;

  /**
   * The timing function for current scroll animation.
   * @devices tv, phone, tablet, wearable
   */
  timingFunction?: string;

  /**
   * Callback function for successful interface invocation.
   * @param result the request execution result.
   * @devices tv, phone, tablet, wearable
   */
  success?: (result: Object) => void;

  /**
   * Callback function for interface invocation failure.
   * @param result the request execution result.
   * @devices tv, phone, tablet, wearable
   */
  fail?: (result: Object) => void;

  /**
   * Callback function at the end of the interface invoking (executed both successfully and unsuccessfully).
   * @param result the request execution result.
   * @devices tv, phone, tablet, wearable
   */
  complete?: (result: Object) => void;
}

/**
 * @devices tv, phone, tablet, wearable
 */
declare interface ScrollOffset {
  /**
   * Scrolling offset in the x-axis, in px.
   * @devices tv, phone, tablet, wearable
   */
  x: number;

  /**
   * Scrolling offset in the y-axis, in px.
   * @devices tv, phone, tablet, wearable
   */
  y: number;
}

/**
 * The <div> component provides a div container.
 * @devices tv, phone, tablet, wearable
 */
declare interface DivElement extends Element {
  /**
   * Scrolls the div for a certain distance.
   * @devices tv, phone, tablet, wearable
   */
  scrollBy(data: ScrollParam): void;

  /**
   * Returns the offset of the current scrolling. The return value type is Object.
   * @devices tv, phone, tablet, wearable
   */
  getScrollOffset(): ScrollOffset;
}

declare interface Application {
  /**
   * Object that is exposed in the app.js file and obtained by this.$app.$def.
   * @devices tv, phone, tablet, wearable
   */
  $def: any;
}

declare interface ViewModel {
  $app: Application;

  /**
   * Sets the parameters based on the system language, for example, this.$t('strings.hello').
   * @param path Path of the language resource key.
   * @param param Content used to replace placeholders during runtime.
   * @returns Content.
   * There are two types of placeholders available:Named placeholder, for example, {name}. The actual content must be of the object type, for example, $t('strings.object', { name: 'Hello world' }).
   * Digit placeholder, for example, {0}. The actual content must be of the array type, for example, $t('strings.array', ['Hello world'].
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  $t(path: string, params?: object | Array<any>): string;

  /**
   * Converses between singular and plural forms based on the system language, for example, this.$tc('strings.plurals').
   * NOTE
   * The resource content is distinguished by the following JSON keys: zero, one, two, few, many, and other.
   * @param path Resource file path.
   * @param count Value.
   * @returns Content.
   * @devices tv, phone, tablet, wearable
   */
  $tc(path: string, count: number): string;

  /**
   * Replace the resource path based on the DPI of the current device: this.$r('image.tv').
   * @param path Resource file path.
   * @returns Content.
   * @devices tv, phone, tablet, wearable
   */
  $r(path: string): string;

  /**
   * Adds an attribute or modifies an existing attribute.
   * Usage: this.$set('key',value): Add an attribute.
   * @param key
   * @param value
   * @devices tv, phone, tablet, wearable
   */
  $set(key: string, value: any): void;

  /**
   * Deletes an attribute.
   * Usage:this.$delete('key'): Delete an attribute.
   * @param key
   * @devices tv, phone, tablet, wearable
   */
  $delete(key: string): void;

  /**
   * Obtains the component with a specified ID. If no ID is specified, the root component is returned.
   * Usage:
   * <div id='xxx'></div>
   * this.$element('xxx'): Obtain the component whose ID is xxx.
   * this.$element(): Obtain the root component.
   * @param id Component ID.
   * @devices tv, phone, tablet, wearable
   */
  $element(
    id?: string
  ): AnimationElement &
    CanvasElement &
    object &
    WebElement &
    CameraElement &
    ListElement &
    SwiperElement &
    DialogElement &
    ImageAnimatorElement &
    MarqueeElement &
    MenuElement &
    ChartElement &
    InputElement &
    ButtonElement &
    TextAreaElement &
    PickerElement &
    VideoElement &
    DivElement;

  /**
   * Obtains the root ViewModel instance.
   * @devices tv, phone, tablet, wearable
   */
  $root(): ViewModel & object;

  /**
   * Obtains the parent ViewModel instance.
   * @devices tv, phone, tablet, wearable
   */
  $parent(): ViewModel & object;

  /**
   * Obtains the ViewModel instance of a custom child component with a specified ID.
   * Usage:this.$child('xxx'): Obtain the ViewModel instance of a custom child component whose ID is xxx.
   * @param id Component ID.
   * @devices tv, phone, tablet, wearable
   */
  $child(id: string): ViewModel & object;

  /**
   * Listens for attribute changes. If the value of the data attribute changes, the bound event is triggered.
   * @param data Attribute.
   * @param callback Function name.
   * @devices tv, phone, tablet, wearable
   */
  $watch(data: string, callback: string): void;

  /**
   * An object that holds all DOM elements and component instances that have been registered with the refs attribute.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  $refs: ElementReferences;

  /**
   * Custom events.
   * @param event The name of event.
   * @param params The params of event.
   * @devices tv, phone, tablet, wearable
   */
  $emit(event: string, params?: object): void;

  /**
   * Scroll the page to the destination.
   * @param options The properties of event.
   * @devices tv, phone, tablet, wearable
   */
  scrollTo(options: ScrollOptions): void;
}

declare interface ElementReferences {
  [k: string]: AnimationElement &
    CanvasElement &
    object &
    WebElement &
    CameraElement &
    ListElement &
    SwiperElement &
    DialogElement &
    ImageAnimatorElement &
    MarqueeElement &
    MenuElement &
    ChartElement &
    InputElement &
    ButtonElement &
    TextAreaElement &
    PickerElement &
    VideoElement &
    DivElement;
}

declare class Locate {
  /**
   * language, such as 'zh'.
   */
  language: string;

  /**
   * country or regin, such ass 'CN'.
   */
  countryOrRegion: string;

  /**
   * text layout direction, ltr or rtl.
   */
  dir: "ltr" | "rtl";

  /**
   * The Unicode locale key set defined by the locale. If this locale does not have a specific key set, an empty set is
   * returned. For example: {"nu": "arab"}, which means that the numbers in the current environment use Arabic numbers.
   */
  unicodeSetting: object;
}

declare class Configuration {
  /**
   * Internationalization related information, such as language, country, text layout direction, etc.
   */
  locate: Locate;

  /**
   * The magnification of the current system font.
   */
  fontScale: number;
}

declare interface Options<T extends ViewModel, Data = DefaultData<T>> {
  /**
   * Data model of the page that can be converted into a JSON object.
   * The attribute name cannot start with $ or an underscore (_) or contain the reserved words such as for, if, show, and tid.
   * For a function, the return value must be an object.
   * Set the value of data to the return value of the function during page initialization.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  data?: Data;

  /**
   * Listens for page initialization.
   * Called when page initialization is complete. This function is called only once in a lifecycle.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onInit?(): void;

  /**
   * Listens for page creation.
   * Called when a page is created. This function is called only once in a lifecycle.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onReady?(): void;

  /**
   * Listens for page display.
   * Called when the page is displayed.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onShow?(): void;

  /**
   * Listens for page hiding.
   * Called when the page disappears.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onHide?(): void;

  /**
   * Listens for page destruction.
   * Called when the page is destroyed.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onDestroy?(): void;

  /**
   * Listens for the back button action.
   * The back button is tapped:
   * @returns true means that the page processes the return logic.
   * false means that the default return logic is used.
   * If no value is returned, the default return logic is used.
   * @devices tv, phone, tablet, wearable
   */
  onBackPress?(): boolean;

  /**
   * Listens for page active.
   * Called when the page is activing.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onActive?(): void;

  /**
   * Listens for page inactive.
   * Called when the page is paused.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onInactive?(): void;

  /**
   * This callback is triggered when a new request is received when the FA has started.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onNewRequest?(): void;

  /**
   * Callback when FA initiates a migration, in this callback, the application can decide whether
   * to migrate according to the current state.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onStartContinuation?(): boolean;

  /**
   * For the callback of saving state data, the developer needs to fill in the parameter object
   * the data to be migrated to the target device.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onSaveData?(value: object): void;

  /**
   * The callback to restore the data saved by the onSaveData method when the migration was initiated.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onRestoreData?(value: object): void;

  /**
   * The callback for the completion of the migration, which is triggered on the calling side, indicates
   * the result of the application migration to the target device.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onCompleteContinuation?(code: number): void;

  /**
   * This callback is triggered when the corresponding system configuration changes, such as system font size,
   * language region, etc.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onConfigurationUpdated?(configuration: Configuration): void;

  /**
   * Listens for application creation.
   * Called when the application is created.
   * @devices tv, phone, tablet, wearable, liteWearable, smartVision
   */
  onCreate?(): void;
}

type DefaultData<T> = object;
type CombinedOptions<T extends ViewModel, Data> = object &
  Options<T, Data> &
  ThisType<T & ViewModel & Data>;
declare function extendViewModel<T extends ViewModel, Data>(
  options: CombinedOptions<T, Data>
): ViewModel & Data;
