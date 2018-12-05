import React, {Component} from 'react'
import {Button, Form, Grid, Segment} from 'semantic-ui-react'
import Template from '../components/template'
import {findDOMNode} from 'react-dom';



class SignupForm extends Component{
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.name = this.name.bind(this)
        this.passConfirmCheck= this.passConfirmCheck.bind(this)
        this.passSave = this.passSave.bind(this)

    }
    state = {
        equal:true,
        pass:null
    };
    name(e){
        let user = findDOMNode(e.refs.uname).value.trim()
        let pass = findDOMNode(e.refs.pass).value.trim()
        console.log(user, pass)
    }
    handleSubmit(event) {
        event.preventDefault();

        console.log(event.target.uname.value)
        console.log(event.target.pass.value)
        console.log(event.target.email.value)
        // console.log(e)
        // alert('asf');
    }
    passConfirmCheck(event){
        if(this.state.pass === event.target.value){
            this.setState({equal:true})
        }
        else
            this.setState({equal:false})
    }
    passSave(event){
        this.setState({pass:event.target.value})
    }
    render(){
        return(
            <Segment >
                <Form onSubmit={this.handleSubmit}>

                    <Form.Input name="fname" fluid label='First name' placeholder='First name' required/>
                    <Form.Input name="lname" fluid label='Last name' placeholder='Last name' required/>
                    <Form.Input name="uname" fluid label='User name' placeholder='User name' required/>
                    <Form.Input name="pass" fluid label='Password' placeholder='Password' required onChange={this.passSave} type="password"/>
                    <Form.Input name="Cpass" fluid label='Confirm Password' placeholder='Confirm Password' required onChange={this.passConfirmCheck} error={!this.state.equal} type="password"/>
                    <Form.Input name="email" fluid label='Email' placeholder='Email@example.com' type="email" required/>
                    <Form.Checkbox  label='I agree to the Terms and Conditions' required/>
                    <Button color='teal' fluid type='submit'>Submit</Button>
                </Form>
            </Segment>
        )
    }


};


class App extends Component{
    render() {
        const body =
            <Grid verticalAlign='middle' textAlign='center' style={{width:'100%', height: '100%'}}>
                <Grid.Row>
                    <Grid.Column style={{maxWidth: '30vw'}} >
                        <SignupForm/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>;
        return (
            <Template {...this.props} body={body}/>
        );
    }
}
export default App;