// export const addArticle = ({ title, article }) => ({
//     type: 'addArticle',
//     title: title,
//     article: article
//   });

export const addArticle = ({ title, article }) => {
  return {
    type: 'addArticle',
    title: title,
    article: article,
  }
}

export const deleteArticle = id => {
  return {
    type: 'deleteArticle',
    id: id,
  }
}

export const editArticle = (id, {title, article}) => {
  return {
    type: 'editArticle',
    id: id,
    title: title,
    article: article,
  }
}