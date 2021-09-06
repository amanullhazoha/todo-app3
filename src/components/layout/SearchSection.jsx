import Container from '../Container';
import classes from '../css/searchSection.module.css';
import Search from '../Search';

const SearchSection = ({ onChangeSearch, inputSrc, toggler }) => (
    <section id={classes.searchSection}>
        <Container>
            <h1>Todo Application</h1>
            <Search onChangeSearch={onChangeSearch} inputSrc={inputSrc} toggler={toggler} />
        </Container>
    </section>
);

export default SearchSection;
