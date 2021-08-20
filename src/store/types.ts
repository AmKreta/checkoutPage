import ActionTypes from "./actionTypes";

export interface ItemType {
  id: number;
  name: string;
  price: number;
  discount: number;
  type: string;
  img_url: string;
  qty: number;
}

export type InitialState = Array<ItemType>;

interface Action<Type, Payload> {
  type: Type;
  payload: Payload;
}

export type AddItemPayload = number;
export type AddItemAction = Action<ActionTypes.ADD_ITEM, AddItemPayload>;

export type RemoveItemPayload = number;
export type RemoveItemAction = Action<
  ActionTypes.REMOVE_ITEM,
  RemoveItemPayload
>;

export type DeleteItemPayload = number;
export type DeleteItemAction = Action<
  ActionTypes.DELETE_ITEM,
  DeleteItemPayload
>;

export type ReloadItemsAction = Action<ActionTypes.RELOAD_ITEMS, undefined>;

export type Actions =
  | AddItemAction
  | RemoveItemAction
  | DeleteItemAction
  | ReloadItemsAction;
