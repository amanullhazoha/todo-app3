import React, { Component } from 'react';
import Button from './Button';
import classes from './css/form.module.css';
import Input from './Input';

class Form extends Component {
    state = {
        title: '',
        discription: '',
    };

    handelChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handelSubmit = (e) => {
        const { addTodo } = this.props;
        e.preventDefault();

        if (this.errors()) {
            addTodo(this.state);

            this.setState({
                title: '',
                discription: '',
            });
        } else {
            return alert('Please fill valid information');
        }

        return 0;
    };

    errors = () => {
        const { title, discription } = this.state;
        if (title.length === '') {
            console.log('empty');
            return false;
        }
        if (title.length > 50) {
            console.log('length');
            return false;
        }
        if (discription === '') {
            console.log('dis');
            return false;
        }
        return true;
    };

    render() {
        const { title, discription } = this.state;
        return (
            <div className={classes.form}>
                <h2>Create Todo Item</h2>

                <form onSubmit={this.handelSubmit}>
                    <Input
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={this.handelChange}
                    />
                    <textarea
                        placeholder="Write some short discription..."
                        name="discription"
                        value={discription}
                        onChange={this.handelChange}
                    />

                    <div className={classes.submitBtn}>
                        <Button type="submit" text="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
