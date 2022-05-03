import { BigInt } from "@graphprotocol/graph-ts"
import {
  NFTCollections,
  CollectionCancelled,
  CollectionContactCreated,
  CollectionCreated,
  CollectionPublished,
  CollectionRequestPlanUpgrade,
  CollectionUpdated,
  EndVariablePaymentPlan,
  OwnershipTransferred,
  PaymentPlanHistoryAdded,
  StartVariablePaymentPlan
} from "../generated/NFTCollections/NFTCollections"
import { CollectionData, PaymentPlanHistory } from "../generated/schema"

export function handleCollectionCancelled(event: CollectionCancelled): void {
  let collection = CollectionData.load(event.params.id.toString())

  if (!collection) {
    collection = new CollectionData(event.params.id.toString())
  }

  collection.status = event.params.status

  collection.save()
}

export function handleCollectionContactCreated(
  event: CollectionContactCreated
): void {
  let collection = CollectionData.load(event.params.id.toString())

  if (!collection) {
    collection = new CollectionData(event.params.id.toString())
  }

  collection.websiteURL = event.params.websiteURL
  collection.twitter = event.params.twitter
  collection.discord = event.params.discord
  collection.email = event.params.email
  collection.openseaURL = event.params.openseaURL
  collection.tags = event.params.tags
  collection.paymentPlan = event.params.paymentPlan
  collection.isVariablePaymentPlan = event.params.isVariablePaymentPlan
  collection.status = event.params.status
  collection.save()
}

export function handleCollectionCreated(event: CollectionCreated): void {
  let collection = new CollectionData(event.params.id.toString())

  collection.collectionId = event.params.id
  collection.owner = event.params.owner
  collection.name = event.params.name
  collection.description = event.params.description
  collection.imageURI = event.params.imageURI
  collection.blockchain = event.params.blockchain
  collection.totalSupply = event.params.totalSupply

  collection.mintDate = event.params.mintDate
  collection.price = event.params.price

  collection.save()
}

export function handleCollectionPublished(event: CollectionPublished): void {
  let collection = CollectionData.load(event.params.id.toString())

  if (!collection) {
    collection = new CollectionData(event.params.id.toString())
  }

  collection.status = event.params.status
  collection.paymentPlan = event.params.paymentPlan
  collection.save()
}

export function handleCollectionRequestPlanUpgrade(
  event: CollectionRequestPlanUpgrade
): void {
  let collection = CollectionData.load(event.params.id.toString())

  if (!collection) {
    collection = new CollectionData(event.params.id.toString())
  }

  collection.status = event.params.status
  collection.paymentPlan = event.params.paymentPlan
  collection.save()
}

export function handleCollectionUpdated(event: CollectionUpdated): void {
  let collection = CollectionData.load(event.params.id.toString())

  if (!collection) {
    collection = new CollectionData(event.params.id.toString())
  }

  collection.name = event.params.name
  collection.description = event.params.description
  collection.imageURI = event.params.imageURI
  collection.blockchain = event.params.blockchain
  collection.totalSupply = event.params.totalSupply

  collection.mintDate = event.params.mintDate
  collection.price = event.params.price

  collection.websiteURL = event.params.contactData[0]
  collection.twitter = event.params.contactData[1]
  collection.discord = event.params.contactData[2]
  collection.email = event.params.contactData[3]

  collection.openseaURL = event.params.marketplaceData[0]

  collection.tags = event.params.tags

  collection.save()
}

export function handleEndVariablePaymentPlan(
  event: EndVariablePaymentPlan
): void {
  let collection = CollectionData.load(event.params.id.toString())

  if (!collection) {
    collection = new CollectionData(event.params.id.toString())
  }

  collection.isVariablePaymentPlan = event.params.isVariablePaymentPlan
  collection.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaymentPlanHistoryAdded(
  event: PaymentPlanHistoryAdded
): void {
  let paymentPlanHistory = PaymentPlanHistory.load(event.params.collectionId.toString())

  if (!paymentPlanHistory) {
    paymentPlanHistory = new PaymentPlanHistory(event.params.collectionId.toString())
  }

  paymentPlanHistory.paymentPlan = event.params.paymentPlan
  paymentPlanHistory.startDate = event.params.startDate
  paymentPlanHistory.save()
}

export function handleStartVariablePaymentPlan(
  event: StartVariablePaymentPlan
): void {
  let collection = CollectionData.load(event.params.id.toString())

  if (!collection) {
    collection = new CollectionData(event.params.id.toString())
  }

  collection.isVariablePaymentPlan = event.params.isVariablePaymentPlan
  collection.save()
}
