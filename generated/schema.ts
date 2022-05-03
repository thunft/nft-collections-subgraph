// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CollectionData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("collectionId", Value.fromBigInt(BigInt.zero()));
    this.set("name", Value.fromString(""));
    this.set("description", Value.fromString(""));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("imageURI", Value.fromString(""));
    this.set("blockchain", Value.fromString(""));
    this.set("totalSupply", Value.fromBigInt(BigInt.zero()));
    this.set("mintDate", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("websiteURL", Value.fromString(""));
    this.set("twitter", Value.fromString(""));
    this.set("discord", Value.fromString(""));
    this.set("email", Value.fromString(""));
    this.set("openseaURL", Value.fromString(""));
    this.set("tags", Value.fromStringArray(new Array(0)));
    this.set("paymentPlan", Value.fromString(""));
    this.set("isVariablePaymentPlan", Value.fromBoolean(false));
    this.set("status", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CollectionData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CollectionData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CollectionData", id.toString(), this);
    }
  }

  static load(id: string): CollectionData | null {
    return changetype<CollectionData | null>(store.get("CollectionData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collectionId(): BigInt {
    let value = this.get("collectionId");
    return value!.toBigInt();
  }

  set collectionId(value: BigInt) {
    this.set("collectionId", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get imageURI(): string {
    let value = this.get("imageURI");
    return value!.toString();
  }

  set imageURI(value: string) {
    this.set("imageURI", Value.fromString(value));
  }

  get blockchain(): string {
    let value = this.get("blockchain");
    return value!.toString();
  }

  set blockchain(value: string) {
    this.set("blockchain", Value.fromString(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get mintDate(): BigInt {
    let value = this.get("mintDate");
    return value!.toBigInt();
  }

  set mintDate(value: BigInt) {
    this.set("mintDate", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get websiteURL(): string {
    let value = this.get("websiteURL");
    return value!.toString();
  }

  set websiteURL(value: string) {
    this.set("websiteURL", Value.fromString(value));
  }

  get twitter(): string {
    let value = this.get("twitter");
    return value!.toString();
  }

  set twitter(value: string) {
    this.set("twitter", Value.fromString(value));
  }

  get discord(): string {
    let value = this.get("discord");
    return value!.toString();
  }

  set discord(value: string) {
    this.set("discord", Value.fromString(value));
  }

  get email(): string {
    let value = this.get("email");
    return value!.toString();
  }

  set email(value: string) {
    this.set("email", Value.fromString(value));
  }

  get openseaURL(): string {
    let value = this.get("openseaURL");
    return value!.toString();
  }

  set openseaURL(value: string) {
    this.set("openseaURL", Value.fromString(value));
  }

  get tags(): Array<string> {
    let value = this.get("tags");
    return value!.toStringArray();
  }

  set tags(value: Array<string>) {
    this.set("tags", Value.fromStringArray(value));
  }

  get paymentPlan(): string {
    let value = this.get("paymentPlan");
    return value!.toString();
  }

  set paymentPlan(value: string) {
    this.set("paymentPlan", Value.fromString(value));
  }

  get isVariablePaymentPlan(): boolean {
    let value = this.get("isVariablePaymentPlan");
    return value!.toBoolean();
  }

  set isVariablePaymentPlan(value: boolean) {
    this.set("isVariablePaymentPlan", Value.fromBoolean(value));
  }

  get status(): BigInt {
    let value = this.get("status");
    return value!.toBigInt();
  }

  set status(value: BigInt) {
    this.set("status", Value.fromBigInt(value));
  }
}

export class PaymentPlanHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("collectionId", Value.fromBigInt(BigInt.zero()));
    this.set("startDate", Value.fromBigInt(BigInt.zero()));
    this.set("paymentPlan", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PaymentPlanHistory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PaymentPlanHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PaymentPlanHistory", id.toString(), this);
    }
  }

  static load(id: string): PaymentPlanHistory | null {
    return changetype<PaymentPlanHistory | null>(
      store.get("PaymentPlanHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collectionId(): BigInt {
    let value = this.get("collectionId");
    return value!.toBigInt();
  }

  set collectionId(value: BigInt) {
    this.set("collectionId", Value.fromBigInt(value));
  }

  get startDate(): BigInt {
    let value = this.get("startDate");
    return value!.toBigInt();
  }

  set startDate(value: BigInt) {
    this.set("startDate", Value.fromBigInt(value));
  }

  get paymentPlan(): string {
    let value = this.get("paymentPlan");
    return value!.toString();
  }

  set paymentPlan(value: string) {
    this.set("paymentPlan", Value.fromString(value));
  }
}
