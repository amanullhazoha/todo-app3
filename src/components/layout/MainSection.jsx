import Container from '../Container';
import classes from '../css/mainSection.module.css';
import View from '../View';

const MainSection = ({ data, handelCheck }) => (
    <main id={classes.mainSection}>
        <Container>
            <View data={data} handelCheck={handelCheck} />
        </Container>
    </main>
);

export default MainSection;
