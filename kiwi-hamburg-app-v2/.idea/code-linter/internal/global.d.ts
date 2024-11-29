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
 * Sets the interval for repeatedly calling a function.
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @devices tv, phone, tablet, wearable
 * @since 3
 */
declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;

/**
 * Sets a timer after which a function will be executed.
 * @param handler Indicates the function to be called after the timer goes off. For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string. For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param delay Indicates the delay (in milliseconds) after which the function will be called. If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param arguments Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns Returns the timer ID.
 * @devices tv, phone, tablet, wearable
 * @since 3
 */
declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;

/**
 * Cancels the interval set by " setInterval()".
 * @param intervalID Indicates the timer ID returned by "setInterval()".
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 * @since 3
 */
declare function clearInterval(intervalID?: number): void;

/**
 * Cancels the timer set by "setTimeout()".
 * @param timeoutID Indicates the timer ID returned by "setTimeout()".
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 * @since 3
 */
declare function clearTimeout(timeoutID?: number): void;

/**
 * Get the java interface instance. The java instance needs to register, otherwise it cannot be obtained.
 * After obtaining the instance, you can call the function with the same name on the Java side.
 * @param name Java interface name, including package path, such as com.example.test.timeinterfaceimpl.
 * @returns A promise object is returned. The resolve callback is the object of PA. The reject callback returns the object containing code and error data
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 * @since 3
 */
declare function createLocalParticleAbility(name?: string): any;

/**
 * Sets a vsync after which a function will be executed.
 * @param handler Indicates the function to be called when the vsync trigger.
 * @devices tv, phone, tablet, wearable
 * @since 3
 */
declare function requestAnimationFrame(handler: Function): number;

/**
 * Cancels the vsync callback set by "requestAnimationFrame()".
 * @param requestId Indicates the vsync callback ID returned by "requestAnimationFrame()".
 * @devices tv, phone, tablet, wearable
 * @since 3
 */
declare function cancelAnimationFrame(requestId: number): void;

/**
 * Obtain the objects exposed in app.js
 * @devices tv, phone, tablet, wearable, smartVision
 * @since 6
 */
declare function getApp(): object;

/**
 * You can create an Image object by calling new Image().
 * @devices tv, phone, tablet, wearable
 */
declare class Image {
    /**
     * Network address or local resource. The internal URI is supported.
     * @devices tv, phone, tablet, wearable
     */
    src: string;
    /**
     * Image width.
     * @devices tv, phone, tablet, wearable
     */
    width?: number;
    /**
     * Image height.
     * @devices tv, phone, tablet, wearable
     */
    height?: number;
    /**
     * Called when an image is successfully loaded. This function has no parameter.
     * @devices tv, phone, tablet, wearable
     */
    onload?: () => void;
    /**
     * Called when an image fails to be loaded. This function has no parameter.
     * @devices tv, phone, tablet, wearable
     */
    onerror?: () => void;
}

/**
 * An ImageData object is a common object that stores the actual pixel data of a Canvas object.
 * @devices tv, phone, tablet, wearable
 */
declare class ImageData {
    /**
     * Actual width of the ImageData object, in pixels.
     * @devices tv, phone, tablet, wearable
     */
    width: number;
    /**
     * Actual height of the ImageData object, in pixels.
     * @devices tv, phone, tablet, wearable
     */
    height: number;
    /**
     * A one-dimensional array of color values. The color values are sorted in the RGBA order and represented by integers from 0 to 255.
     * @devices tv, phone, tablet, wearable
     */
    data: Uint8ClampedArray;
}

/**
 * OffscreenCanvas provides a Canvas object that can be rendered off-screen.
 * It works in both window and Web worker environments.
 */
declare class OffscreenCanvas {
    /**
     * The width of the offScreen Canvas object
     * The height of the offScreen Canvas object
     */
    constructor(width: number, height: number);

    /**
     * The width of the offScreen Canvas object
     */
    width: number;

    /**
     * The height of the offScreen Canvas object
     */
    height: number;

    /**
     * Gets the context object for off-screen drawing.
     * @param contextId creates a CanvasRenderingContext2D object representing a two-dimensional rendering context.
     * @param options object representing a three-dimensional rendering context.
     * @returns  a render canvas for the offScreen Canvas object.
     */
    getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D;

    /**
     * Converts the draw contents of the current off-screen draw object to a string in the form of a Blob.
     * @param type indicating the image format.
     * @param quality between 0 and 1 indicating image quality if the type option is image/jpeg or image/webp.
     * @returns A Promise returning a Blob object representing the image contained in the canvas.
     */
    toDataURL(type?: string, quality?: number): string;

    /**
     * Converts the draw content in the current off-screen draw object to a Bitmap object.
     * @returns Returns An ImageBitmap object.
     */
    transferToImageBitmap(): ImageBitmap;
}

declare class ImageBitmap {
    /**
     * The height of the Image Bitmap object
     */
    readonly height: number;

    /**
     * The width of the Image Bitmap object
     */
    readonly width: number;
}