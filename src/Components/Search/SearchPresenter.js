import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    margin: 1rem;
`;

const Text = styled.span`
    margin-right: 1rem;
    font-weight: bold;
`;

const SearchIcon = styled.i`
    position: absolute;
    cursor: pointer;
`;

const Input = styled.input`
    all: unset;
    border-bottom: 2px solid #FFF;
    padding-left: 1.5rem;
    padding-bottom: 0.5rem;
    
    visibility: ${prop => (prop.isOpen ? 'visible' : 'hidden')};
`;

const Search = ({ shouldBeSearchedKeyword, isOpen, handleSubmit, handleChange, toggleSearchButton }) => (
    <Container>
        <Text>Search</Text>
        <form onSubmit={handleSubmit}>
            <SearchIcon onClick={toggleSearchButton}>
                <FontAwesomeIcon icon={"search"} />
            </SearchIcon>
            <Input value={shouldBeSearchedKeyword} onChange={handleChange} isOpen={isOpen} />
        </form>
    </Container>
);

Search.propTypes = {
    shouldBeSearchedKeyword: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    toggleSearchButton: PropTypes.func.isRequired,
};

export default Search;