import {  Route, Switch } from 'react-router-dom';
import Hospitalshiftform from "./components/Hospitalshiftform"
import Display from "./components/Display"

const App = () => {
  return (
    <main>
            <Switch>
            <Route path="/" component={Hospitalshiftform} exact />
            <Route path="/display" component={Display} />

            </Switch>
        </main>
  )
  
}



export default App;
