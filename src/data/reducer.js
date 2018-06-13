// need to track the last ID used
// the last ID used by the dummy articles is 2
let lastID = 2;

// create a function that returns a new article
const createArticle = ({ title, article, tags }) => {
  // up the ID by 1 every time
  lastID += 1;

  return {
    id: lastID,
    title: title,
    article: article,
    comments: [],
    tags: tags,
  };
};

const addArticle = (state, action) => {
  // create a new article with a dummy ID
  let newArticle = createArticle(action);

  return {
    ...state,
    articles: {
        ...state.articles,
        // add using the dummy ID
        [newArticle.id]: newArticle,
    }
  }
}

const deleteArticle = (state, {id}) => {
  let { ...updated } = state.articles;
  delete updated[id];

  return {
    ...state,
    articles: updated,
  };
};

const editArticle = (state, {id, article, title, tags}) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [id]: {
        ...state.articles[id],
        title: title,
        article: article,
        tags: tags,
      }
    }
  }
}

const addComment = (state, { id, email, comment }) => {
  return {
    ...state,
    articles: {
      ...state.articles,
      [id]: {
        ...state.articles[id],
        comments: state.articles[id].comments.concat([{
          email: email,
          comment: comment,
        }]),
      },
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addArticle": return addArticle(state, action);
    case "deleteArticle": return deleteArticle(state, action);
    case "editArticle": return editArticle(state, action);
    case "addComment": return addComment(state, action);
    default: return state;
  }
}

export default reducer