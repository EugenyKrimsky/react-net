const UPGRADE_NEW_TEXT = 'upgradeNewText';
const ADD_POST = 'addPost';

const initialState = {
  posts: [
    { id: 0, likesCount: 12, text: 'why dora doesn\'t love me' },
    { id: 1, likesCount: 16, text: 'why avril lavigne doesn\'t love me' },
    { id: 2, likesCount: 19, text: 'why helly williams doesn\'t love me' }
  ],
  newPostText: 'opa'
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPGRADE_NEW_TEXT:
      state.newPostText = action.newText;
      return state
    case ADD_POST:
      state.posts.push({
        id: state.posts.length,
        likesCount: 0, 
        text: state.newPostText
      });

      state.newPostText = '';
      return state 
    default: 
      return state
  }
}

export const actionCreatorAddPost = () => ({type: ADD_POST});

export const actionCreatorUpgradeNewText = (subType, text) => 
	({type: UPGRADE_NEW_TEXT, subType: subType, newText: text});

export default profileReducer;