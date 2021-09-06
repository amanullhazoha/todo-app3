import Container from '../Container';
import classes from '../css/mainSection.module.css';
import View from '../View';

const MainSection = () => (
    <main id={classes.mainSection}>
        <Container>
            <View />
        </Container>
    </main>
);

export default MainSection;
