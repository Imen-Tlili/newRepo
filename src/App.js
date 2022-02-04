
import {Container} from 'react-bootstrap';
import NavbarUni from './component/NavbarUni';
import FormUni from './component/FormUni';
import './App.css';

function App() {
  return (
    <div>
      
   <Container>
      
   <NavbarUni/>
   <h2>Fill this form to log in, please!</h2> 
   <FormUni/>

   </Container>
     



    </div>
  );
}

export default App;
