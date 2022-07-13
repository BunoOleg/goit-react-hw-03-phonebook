import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';
import PropTypes from 'prop-types';






const initialState = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = initialState;

  onInputHandler = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  objectCompiler = () => {
    return { ...this.state, id: nanoid() };
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.objectCompiler());
    this.reset();
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <>
        <form className={styles.forms} onSubmit={this.onSubmitHandler}>
          <label className={styles.label}>
            Name
            <input
            className={styles.input}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onInputHandler}
            />
          </label>
          <label className={styles.label}>
            Number
            <input
            className={styles.input}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.onInputHandler}
            />
          </label>
          <button className={styles.button} type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


