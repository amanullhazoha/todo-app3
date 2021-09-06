import Button from '../Button';
import Container from '../Container';
import classes from '../css/header.module.css';

const Header = () => (
    <header id={classes.header}>
        <Container>
            <h1 id={classes.logo}>
                <span>easy</span>w<span>o</span>rk
            </h1>
            <Button type="button" text="Contact" className={classes.contactBtn} />
        </Container>
    </header>
);

export default Header;
