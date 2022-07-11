import { Action } from "redux";

// Common Action
export enum E_COMMON_ACTION {
  COMMON_SET_LOADING = "COMMON_SET_LOADING",
}

export interface ICommonSetLoading {
  isLoading: boolean;
}

export type TCommonAction = ICommonSetLoading;

export interface ICommonAction extends Action<E_COMMON_ACTION> {
  payload: TCommonAction;
}

// All Action
export type TAllAction = ICommonAction;
