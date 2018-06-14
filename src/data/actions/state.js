export const addArticle = ( article ) => ({
    type: 'addArticle',
    article: article,
  });

export const deleteArticle = id => ({
  type: 'deleteArticle',
  id: id,
});

export const editArticle = (id, {title, article, tags}) => ({
  type: 'editArticle',
  id: id,
  title: title,
  article: article,
  tags: tags.split(/,\s+/),
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