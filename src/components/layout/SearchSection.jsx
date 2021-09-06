import Container from '../Container';
import classes from '../css/searchSection.module.css';
import Search from '../Search';

const SearchSection = () => (
    <section id={classes.searchSection}>
        <Container>
            <h1>Todo Application</h1>
            <Search />
        </Container>
    </section>
);

export default SearchSection;
