import {
  ICommonAction,
  E_COMMON_ACTION,
  ICommonSetLoading,
} from '../../interfaces/actions';
import { ICommonState } from '../../interfaces/states';

const INITIAL_STATE: ICommonState = {
  isLoading: false,
};

function commonReducer(
  state = INITIAL_STATE,
  action: ICommonAction,
): ICommonState {
  switch (action.type) {
    case E_COMMON_ACTION.COMMON_SET_LOADING:
      const { isLoading } = action.payload as ICommonSetLoading;
      return { ...state, isLoading };
  }
  return state;
}

export default commonReducer;
