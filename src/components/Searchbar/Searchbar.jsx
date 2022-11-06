import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error(
        'Введіть будь ласка пошуковий запит, щоб ми знайшли Вам картинки'
      );
      return;
    }

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            onInput={this.handleInputChange}
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
          <button className={styles.searchFormButton} type="submit">
            <img
              className={styles.icon}
              src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-search-vector-icon-png-image_1824209.jpg"
              width="40"
              alt="icon"
            />
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
