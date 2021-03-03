const ADD_POST = 'addPost';
const UPGRADE_NEW_TEXT = 'upgradeNewText';

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
                { id: 1, message: 'Dima' },
                { id: 2, message: 'Andrew' },
                { id: 3, message: 'Sveta' },
                { id: 4, message: 'Sasha' }, 
                { id: 5, message: 'Victor' },
                { id: 6, message: 'Valera' },
            ],
            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Victor' },
                { id: 6, name: 'Valera' },
            ],
            newMessageText: 'df'
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
        switch(action.type) {
            case 'addPost':
                const post = {
                    id: this._state.profilePage.posts.length,
                    likesCount: 0, 
                    text: this._state.profilePage.newPostText
                }
            
                this._state.profilePage.posts.push(post);
                this._state.profilePage.newPostText = '';
                this._subscriber();
                break;
            case 'upgradeNewText':
                action.subType === 'post' ? 
                    this._state.profilePage.newPostText = action.newText : 
                    this._state.dialogsPage.newMessageText = action.newText;
                this._subscriber();
                break;
        }
    },
}

window.store = store

export const actionCreatorAddPost = () => ({type: ADD_POST});
export const actionCreatorUpgradeNewText = (subType, text) => ({type: UPGRADE_NEW_TEXT, subType: subType, newText: text})

export default store