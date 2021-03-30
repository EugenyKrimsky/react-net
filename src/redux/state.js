import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const ADD_POST = 'addPost';
const UPGRADE_NEW_TEXT = 'upgradeNewText';
const SEND_MESSAGE = 'sendMessage';

const store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 0, likesCount: 12, text: 'why dora doesn\'t love me' },
				{ id: 1, likesCount: 16, text: 'why avril lavigne doesn\'t love me' },
				{ id: 2, likesCount: 19, text: 'why helly williams doesn\'t love me' }
			],
			newPostText: 'opa'
		},
		dialogsPage: {
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
		},
		sideBar: {
			links: [
				{ name: 'profile' },
				{ name: 'messages' },
				{ name: 'news' },
				{ name: 'music' },
				{ name: 'settings' }
			],
			friends: [
				{ id: 1, name: 'Dima' },
				{ id: 2, name: 'Andrew' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Victor' },
				{ id: 6, name: 'Valera' }
			]
		}
		
	},
	_rerenderDOM() {},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._subscriber = observer;
	},
	_subscriber() {},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._subscriber();
	},
}   

window.store = store

export default store   