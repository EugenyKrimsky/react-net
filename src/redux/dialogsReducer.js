const UPGRADE_NEW_TEXT = 'upgradeNewText';
const SEND_MESSAGE = 'sendMessage';

const initialState = {
  messages: [
    { id: 1, text: 'Dima' },
    { id: 2, text: 'Andrew' },
    { id: 3, text: 'Sveta' },
    { id: 4, text: 'Sasha' }, 
    { id: 5, text: 'Victor' },
    { id: 6, text: 'Valera' },
  ],
  dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Victor' },
    { id: 6, name: 'Valera' },
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPGRADE_NEW_TEXT:
			state.newMessageText = action.newText;
			return state
		case SEND_MESSAGE:
			state.messages.push({
				id: 5,
				text: state.newMessageText,
			});

			state.newMessageText = '';
			return state
    default:
      return state
	}
}

export const actionCreatorUpgradeNewText = (subType, text) => 
	({type: UPGRADE_NEW_TEXT, subType: subType, newText: text});

export const actionCreatorSendMessage = () => ({type: SEND_MESSAGE});

export default dialogsReducer;