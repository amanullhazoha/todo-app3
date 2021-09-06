import Container from '../Container';
import Controler from '../Controler';
import classes from '../css/controlSection.module.css';

const ControlSection = ({ handelSearch, search, handelView, view, handelDelete }) => (
    <section id={classes.controlSection}>
        <Container>
            <Controler
                handelSearch={handelSearch}
                search={search}
                handelView={handelView}
                view={view}
                handelDelete={handelDelete}
            />
        </Container>
    </section>
);

export default ControlSection;
