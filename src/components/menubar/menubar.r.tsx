import {
  MenubarPanelStates,
  MenubarPanelAction,
  FocusAction,
  FocusState,
} from './menubar.d';
export const menubarPanelReducer = (
  states: MenubarPanelStates,
  action: MenubarPanelAction
): MenubarPanelStates => {
  switch (action) {
    case 'Hide':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowWifi':
      return {
        ...states,
        showWifi: !states.showWifi,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowBattery':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: !states.showBattery,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowInput':
      return {
        ...states,
        showWifi: false,
        showInput: !states.showInput,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowBluetooth':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: !states.showBluetooth,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowFocus':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: !states.showFocus,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowApple':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: !states.showApple,
        showControl: false,
        showSiri: false,
        showSearch: false,
      };
    case 'ShowControl':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: !states.showControl,
        showSiri: false,
        showSearch: false,
      };
    case 'ShowSiri':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: !states.showSiri,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowSearch':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: !states.showSearch,
        showNotification: false,
      };
    case 'ShowNotification':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: !states.showNotification,
      };
    default:
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
  }
};
export const focusReducer = (
  focusState: FocusState,
  focusAction: FocusAction
): FocusState => {
  switch (focusAction) {
    case 'ChangeFocus':
      return {
        ...focusState,
        state: !focusState.state,
        type: 'None',
      };
    case 'HourChecked':
      return {
        ...focusState,
        state: true,
        type: 'Hour',
      };
    case 'EveningChecked':
      return {
        ...focusState,
        state: true,
        type: 'Evening',
      };
    case 'EventChecked':
      return {
        ...focusState,
        state: true,
        type: 'Event',
      };
    default:
      return {
        ...focusState,
        state: false,
        type: 'None',
      };
  }
};
