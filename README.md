# React Redux

Follow through the notes and get the Blog app working so that you can view and list articles.

Once you've cloned the repo you'll want to create a new **empty** repo on GitHub and then run:

```bash
git remote set-url origin git@github.com:your-username/repo-name.git
```

## Challenges

- Add an `<Edit>` component and a `<Route>` so you can view it with an appropriate URL
- Wrap `<Edit>` in a container component so that you can pass in the correct article's `title` and `article` properties to display in the form
- Make sure the `<Edit>` component shows a 404 error if the article ID isn't valid
- Add a "tags" field to the add and edit forms

[Answers](https://github.com/develop-me/react-redux-blog-skeleton/tree/1c53083c6b2b6a2b2d5dabc2225af97671b43cf5)

## Tricksy

- Add each article's tags to it's list item in the `<Articles>` list
- Make tags clickable links: when you click on a tag it should go to a new route and show all the articles related to that tag

[Answers](https://github.com/develop-me/react-redux-blog-skeleton/tree/25fa2ecd34f336fed01bfbac5e4e56e37cc6957c)