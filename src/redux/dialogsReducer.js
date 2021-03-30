const UPGRADE_NEW_TEXT = 'upgradeNewText';
const SEND_MESSAGE = 'sendMessage';

const dialogsReducer = (state, action) => {
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