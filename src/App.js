import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Web/home/Home';
import PackagesPage from './Components/Web/Packages/PackagesPage';
import ServicePage from './Components/Web/Services/ServicePage';



function App() {
  return (
    <div className="App">
      <Layout>

           <Switch>

             <Route path='/' exact={true} >
                    <Home />
                 </Route>
              
               <Route  path='/services'>
                   <ServicePage />
               </Route>


               <Route path='/gallery'>
                    

               </Route>

               <Route path='/packages'>
                 <PackagesPage />

               </Route>


           </Switch>

      </Layout>
      

    </div>
  );
}

export default App;
