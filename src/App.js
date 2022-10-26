import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import PostsContextProvider from "./postContext";
import PostsList from "./components/PostsList/PostsList";
import EditForm from "./components/EditForm/EditForm";

const App = () => {
  return (
    <>
      <PostsContextProvider>
        <BrowserRouter>
          <Routes>
            {/* posts routes */}
            <Route
              path="/posts"
              element={
                <>
                  <AddForm />
                  <PostsList />
                </>
              }
            />
            <Route path="/edit/:id" element={<EditForm />} />
          </Routes>
        </BrowserRouter>
      </PostsContextProvider>
    </>
  );
};

export default App;
