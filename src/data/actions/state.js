export const addArticle = ( article ) => ({
    type: 'addArticle',
    article: article,
  });

export const removeArticle = id => ({
  type: 'removeArticle',
  id: id,
});

export const editArticle = article => ({
  type: 'editArticle',
  article: article,  
});

export const addComment = (id, { email, comment }) => ({
    type: "addComment",
    id: id,
    email: email,
    comment: comment,
});

export const setTitles = titles => {
  return {
    type: "setTitles",
    titles: titles,
  };
};

export const setArticle = article => {
  return {
    type: "setArticle",
    article: article,
  };
};

export const setComments = (id, comments) => {
  return {
      type: "setComments",
      id: id,
      comments: comments,
  };
};