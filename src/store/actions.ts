import ActionTypes from "./actionTypes";
import {
  AddItemAction,
  AddItemPayload,
  RemoveItemAction,
  RemoveItemPayload,
  DeleteItemAction,
  DeleteItemPayload,
  ReloadItemsAction
} from "./types";

export const addItem: (payload: AddItemPayload) => AddItemAction = (
  itemId: AddItemPayload
) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: itemId
  };
};

export const removeItem: (payload: RemoveItemPayload) => RemoveItemAction = (
  itemId: number
) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: itemId
  };
};

export const deleteItem: (payload: DeleteItemPayload) => DeleteItemAction = (
  itemId: number
) => {
  return {
    type: ActionTypes.DELETE_ITEM,
    payload: itemId
  };
};

export const reloadItems: () => ReloadItemsAction = () => {
  return {
    type: ActionTypes.RELOAD_ITEMS,
    payload: undefined
  };
};
