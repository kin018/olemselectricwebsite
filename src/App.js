import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {
  MainAppContainer,
  darkTheme,
  lightTheme,
} from './styledComponents/StyledComponents';

function App() {
  const [theme, setTheme] = useState(darkTheme);

  // Check if the current theme is 'lightTheme' this will be TRUE if the variable 'theme' is equal to lightTheme
  const isDarkTheme = theme === darkTheme;

  const toggleTheme = () => {
    // This checks and sets the theme to the opposite them
    setTheme(isDarkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <MainAppContainer>
          <Contact />
          <Footer />
        </MainAppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
