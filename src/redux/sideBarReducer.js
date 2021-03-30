const initialState = {
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

const sideBarReducer = (state = initialState, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default sideBarReducer