const addArticle = (state, { article }) => {
  article.comments = [];
  return {
    ...state,
    articles: {
      ...state.articles,
      [article.id]: article,
    },
  };
};

const removeArticle = (state, {id}) => {
  let { ...updated } = state.articles;
  delete updated[id];

  return {
    ...state,
    articles: updated,
  };
};

const editArticle = (state, { article }) => {
  article.comments = [];
  return {
    ...state,
    articles: {
      ...state.articles,
      [article.id]: article,
    },
  };
};

const addComment = (state, { id, comment }) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [id]: {
        ...state.articles[id],
        comments: state.articles[id].comments.concat([comment]),
      },
    },
  };
};

// take the articles we've been given and set them as articles
const setTitles = (state, { titles }) => {
  return {
    ...state,
    titles: titles,
  };
};

const setArticle = (state, { article }) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [article.id]: { 
        ...article,
        comments: [],
      },
    },
  };
};

const setComments = (state, {id, comments}) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [id]: {
        ...state.articles[id],
        comments: comments,
      }
    }
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "addArticle": return addArticle(state, action);
    case "removeArticle": return removeArticle(state, action);
    case "editArticle": return editArticle(state, action);
    case "addComment": return addComment(state, action);
    case "setTitles": return setTitles(state, action);
    case "setArticle": return setArticle(state, action);
    case "setComments": return setComments(state, action);
    default: return state;
  }
};

export default reducer
