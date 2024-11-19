import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Layout from './components/Layout';



const theme = createTheme ({
  palette : {
    primary : {
      main: '#fefefe'
    },
    secondary: red

    
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>    
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
    </Router>
    </ThemeProvider>

  );
}

export default App;
