import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import { toast } from 'react-toastify';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter your search query');
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          onInput={handleInputChange}
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
        <button type="submit" className={styles.searchFormButton}>
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
