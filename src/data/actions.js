export const addArticle = ({ title, article }) => ({
    type: 'addArticle',
    title: title,
    article: article
  });

export const deleteArticle = id => ({
  type: 'deleteArticle',
  id: id,
});

export const editArticle = (id, {title, article}) => ({
  type: 'editArticle',
  id: id,
  title: title,
  article: article,
});

export const addComment = (id, { email, comment }) => ({
    type: "addComment",
    id: id,
    email: email,
    comment: comment,
});