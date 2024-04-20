
import Input from "../Input/Input"
import Button from "../Button/Button"
import './Form.css'
import Terms from "../Terms/Terms"

const Form = () =>{
    return(
        <form>
         <Input type="text" placeholder="Firest Name"/>
         <Input type="text" placeholder="Last Name"/>
         <Input type="email" placeholder="Email Adress"/>
         <Input type="passaword" placeholder="Passaword"/>
         <Button buttonName="CLAIM YOUR FREEM TRIAL"/>
         <Terms link="#"/>
        </form>
    )
}

export default Form;