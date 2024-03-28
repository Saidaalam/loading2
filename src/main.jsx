import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import Home from './assets/components/Home/Home';
import Root from './assets/components/Root/Root';
import ReadPages from './assets/components/ReadPages/readPages';
import ListedBooks from './assets/components/ListedBooks/ListedBooks';
import BookDetails from './assets/components/BookDetails/BookDetails';
import Form from './assets/components/Form/Form';
import Blogs from './assets/components/Blogs/Blogs';
import ReadBooks from './assets/components/ReadBooks/ReadBooks';
import WishListBooks from './assets/components/WishListBooks/WishListBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/jobs',
        element : <ReadPages></ReadPages>
      },
      {
        path : '/listedBooks',
        element : <ListedBooks></ListedBooks>,
        children : [
          {
            index : true,
            element : <ReadBooks></ReadBooks>,
            loader: () => fetch("/public/books.json")
          },
          {
            path : 'wishlist',
            element : <WishListBooks></WishListBooks>,
            loader: () => fetch("/public/books.json")
          }
        ]
      },
      {
        path : '/form',
        element : <Form></Form>
      },
      {
        path : 'BookDetails',
        element : <BookDetails></BookDetails>,
        loader: () => fetch("/public/books.json")
      },
      {
        path : '/BookCard/:bookId',
        element : <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      },
      {
        path : '/blogs',
        element : <Blogs></Blogs>,
        loader : () => fetch('https://dev.to/api/articles?per page=5&top=5')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
