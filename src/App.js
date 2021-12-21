import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Web/home/Home';



function App() {
  return (
    <div className="App">
      <Layout>

           <Switch>

             <Route path='/' exact={true} >
                    <Home />
                 </Route>
              
               <Route  />


          






           </Switch>

      </Layout>
      

    </div>
  );
}

export default App;
