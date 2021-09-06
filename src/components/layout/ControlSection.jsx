import Container from '../Container';
import Controler from '../Controler';
import classes from '../css/controlSection.module.css';

const ControlSection = () => (
    <section id={classes.controlSection}>
        <Container>
            <Controler />
        </Container>
    </section>
);

export default ControlSection;
