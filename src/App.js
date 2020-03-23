import React, { Fragment } from 'react';
import './App.css';
import{ BrowserRouter, Route} from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import lightBlue from '@material-ui/core/colors/lightBlue';
import AppRouter from "./AppRouter";
import { SelectBar } from "./components";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway",
    htmlFontSize: "12",
  },
  palette: {
    primary: { main: lightBlue[50], contrastText: lightBlue[50] },
    secondary: { main: "#42a5f5", contrastText: "#42a5f5" }
  }

});

const App = () => {
  return (
    <Fragment>
      <MuiThemeProvider theme = { theme }>
        <BrowserRouter>
          <SelectBar>
            <Route render={() => <AppRouter />}></Route>
          </SelectBar>
        </BrowserRouter>
      </MuiThemeProvider>
    </Fragment>
  );
};

export default App;
