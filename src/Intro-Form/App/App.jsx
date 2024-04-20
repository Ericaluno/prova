import Form from "../Form/Form"
import PromoBox from "../PromoBox/PromoBox";
import Principallnfo from "../Principallnfo/Principallinfo";
import "./App.css"
const App = () => {
    return( 
   <section className="container-main">
   <Principallnfo/>

  <div>
   <PromoBox texto="Try it free then 20$/mo. There"/>
   <Form/>
  </div>
   </section>
    )
};
export default App;