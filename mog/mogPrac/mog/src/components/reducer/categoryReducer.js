import { Post } from "../container/post/post";

export const INSERT_CATEGORY = "INSERT_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";

const CategoryReducer = (state = Post, action) => {
  if (action.data) {
    console.log(
      "reducer  action : data.cid " +
        action.data.cid +
        " /  data.category " +
        action.data.category
    );
  }
  switch (action.type) {
    case INSERT_CATEGORY:
      return [
        ...state,
        {
          cid: action.data.cid,
          category: action.data.category,
          board: [],
        },
      ];
    case REMOVE_CATEGORY:
      return state.filter((category) => category.cid !== category.cid);
    default:
      return state;
  }
};
export default CategoryReducer;
