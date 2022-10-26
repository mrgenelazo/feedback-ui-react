import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';

import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<About />} />
            <Route path='/post/:id' element={<Post />} />
          </Routes>
          <AboutIconLink />
        </div>
      </FeedbackProvider>
    </>
  );
};

export default App;
