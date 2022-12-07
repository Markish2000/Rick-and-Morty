import { Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import FormContainer from './components/form/FormContainer';
import HeaderContainer from './components/header/HeaderContainer';
import RickYMortyCointainer from './components/RickYMortyCointainer';
import style from './style/App.module.css';

function App() {
  return (
    <div className={style.div__container}>
      <div className={style.div__container_bc}>
        <HeaderContainer />
        <Route exact path='/'>
          <RickYMortyCointainer />
        </Route>
        <Route exact path='/form'>
          <FormContainer />
        </Route>
        <Footer />
      </div>
    </div>
  );
}

export default App;
