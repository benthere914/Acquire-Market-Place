const GET_ITEM = 'selected_item/GET_ITEM'


const loadItem = (item) => ({
    type: GET_ITEM,
    payload: item
  });


  export const getItem = (itemId) => async (dispatch) => {
    const response = await fetch(`/api/items/${itemId}`)

    if (response.ok) {
        const item = await response.json()
        dispatch(loadItem(item));
    }
  };


  export default function reducer(state = {}, action) {
    switch (action.type) {
      case GET_ITEM:
        return action.payload
      default:
        return state;
    }
  }
