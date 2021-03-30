const UPGRADE_NEW_TEXT = 'upgradeNewText';
const ADD_POST = 'addPost';

const profileReducer = (state, action) => {
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