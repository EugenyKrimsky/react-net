let rerenderDOM;

const state = {
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
        ]
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
    
}

export const addPost = () => {
    const post = {
        id: state.profilePage.posts.length,
        likesCount: 0, 
        text: state.profilePage.newPostText
    }

    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';
    rerenderDOM();
    
}

export const upgradeNewPostText = (text) => {
    state.profilePage.newPostText = text;
    console.dir(state)
    rerenderDOM();

}

export const getRenderFunction = (observer) => {
    rerenderDOM = observer;
}

export default state