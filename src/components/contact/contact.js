import React, {Component} from 'react';
import './contact.css';
import history from '../../history/history';
import {db} from '../../firebase/firebaseconfig';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        date: '',
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.createMessage(this.state);
    }

    createMessage = (message) => {
        db.collection('messages').add({
            ...message, 
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            date: new Date().toString()

        })
        history.push('/')
    }


    render(){
    return (
        <div className="contactcomponent">
            <p>Leave me a message and a contact email and i'd be glad to get back to you!</p>
<form id="contact" onSubmit={this.handleSubmit}>

<div className="messages"></div>

<div className="controls">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input id="name" type="text" name="name" onChange={this.handleChange} className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                <div className="help-block with-errors"></div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" name="email" onChange={this.handleChange} className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                <div className="help-block with-errors"></div>
            </div>
        </div>
 
    </div>
    <div className="row">
        <div className="col-md-12">
            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" onChange={this.handleChange} className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                <div className="help-block with-errors"></div>
            </div>
        </div>
        <div className="col-md-12">
            <input type="submit" className="btn btn-success btn-send" value="Send message" />
        </div>
    </div>
    <div className="row">
        <div className="col-md-12">
            <p className="text-muted">
                <strong>*</strong> These fields are required.
            </p>
        </div>
    </div>
</div>

</form>

        </div>
    )
    }
}

export default Contact;