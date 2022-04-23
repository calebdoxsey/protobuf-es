// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// @generated by protoc-gen-es v0.0.2-alpha.3 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/unittest_preserve_unknown_enum.proto (package proto3_preserve_unknown_enum_unittest, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from enum proto3_preserve_unknown_enum_unittest.MyEnum
 */
export declare enum MyEnum {
  /**
   * @generated from enum value: FOO = 0;
   */
  FOO = 0,

  /**
   * @generated from enum value: BAR = 1;
   */
  BAR = 1,

  /**
   * @generated from enum value: BAZ = 2;
   */
  BAZ = 2,
}

/**
 * @generated from enum proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra
 */
export declare enum MyEnumPlusExtra {
  /**
   * @generated from enum value: E_FOO = 0;
   */
  E_FOO = 0,

  /**
   * @generated from enum value: E_BAR = 1;
   */
  E_BAR = 1,

  /**
   * @generated from enum value: E_BAZ = 2;
   */
  E_BAZ = 2,

  /**
   * @generated from enum value: E_EXTRA = 3;
   */
  E_EXTRA = 3,
}

/**
 * @generated from message proto3_preserve_unknown_enum_unittest.MyMessage
 */
export declare class MyMessage extends Message<MyMessage> {
  /**
   * @generated from field: proto3_preserve_unknown_enum_unittest.MyEnum e = 1;
   */
  e: MyEnum;

  /**
   * @generated from field: repeated proto3_preserve_unknown_enum_unittest.MyEnum repeated_e = 2;
   */
  repeatedE: MyEnum[];

  /**
   * @generated from field: repeated proto3_preserve_unknown_enum_unittest.MyEnum repeated_packed_e = 3 [packed = true];
   */
  repeatedPackedE: MyEnum[];

  /**
   * not packed
   *
   * @generated from field: repeated proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra repeated_packed_unexpected_e = 4;
   */
  repeatedPackedUnexpectedE: MyEnumPlusExtra[];

  /**
   * @generated from oneof proto3_preserve_unknown_enum_unittest.MyMessage.o
   */
  o: {
    /**
     * @generated from field: proto3_preserve_unknown_enum_unittest.MyEnum oneof_e_1 = 5;
     */
    value: MyEnum;
    case: "oneofE1";
  } | {
    /**
     * @generated from field: proto3_preserve_unknown_enum_unittest.MyEnum oneof_e_2 = 6;
     */
    value: MyEnum;
    case: "oneofE2";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<MyMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto3_preserve_unknown_enum_unittest.MyMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MyMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MyMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MyMessage;

  static equals(a: MyMessage | PlainMessage<MyMessage> | undefined, b: MyMessage | PlainMessage<MyMessage> | undefined): boolean;
}

/**
 * @generated from message proto3_preserve_unknown_enum_unittest.MyMessagePlusExtra
 */
export declare class MyMessagePlusExtra extends Message<MyMessagePlusExtra> {
  /**
   * @generated from field: proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra e = 1;
   */
  e: MyEnumPlusExtra;

  /**
   * @generated from field: repeated proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra repeated_e = 2;
   */
  repeatedE: MyEnumPlusExtra[];

  /**
   * @generated from field: repeated proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra repeated_packed_e = 3 [packed = true];
   */
  repeatedPackedE: MyEnumPlusExtra[];

  /**
   * @generated from field: repeated proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra repeated_packed_unexpected_e = 4 [packed = true];
   */
  repeatedPackedUnexpectedE: MyEnumPlusExtra[];

  /**
   * @generated from oneof proto3_preserve_unknown_enum_unittest.MyMessagePlusExtra.o
   */
  o: {
    /**
     * @generated from field: proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra oneof_e_1 = 5;
     */
    value: MyEnumPlusExtra;
    case: "oneofE1";
  } | {
    /**
     * @generated from field: proto3_preserve_unknown_enum_unittest.MyEnumPlusExtra oneof_e_2 = 6;
     */
    value: MyEnumPlusExtra;
    case: "oneofE2";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<MyMessagePlusExtra>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "proto3_preserve_unknown_enum_unittest.MyMessagePlusExtra";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MyMessagePlusExtra;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MyMessagePlusExtra;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MyMessagePlusExtra;

  static equals(a: MyMessagePlusExtra | PlainMessage<MyMessagePlusExtra> | undefined, b: MyMessagePlusExtra | PlainMessage<MyMessagePlusExtra> | undefined): boolean;
}

