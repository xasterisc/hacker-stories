import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      {/* creating an instance of List component */}
      <List />
      {/* creating another instance of List component*/}
      <List />
    </div>
  );

const Search = () => (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );

const List = () => (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span> {item.author}</span>
            <span> {item.num_comments}</span>
            <span> {item.points}</span>
          </li>
        );
      })}
    </ul>
  );

export default App;
