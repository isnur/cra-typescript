import { E_COMMON_ACTION, ICommonAction } from "../../interfaces/actions";

export function setLoading(isLoading: boolean): ICommonAction {
  return {
    type: E_COMMON_ACTION.COMMON_SET_LOADING,
    payload: { isLoading },
  };
}
