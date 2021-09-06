import classes from './css/controler.module.css';
import DeleteBtn from './DeleteBtn';
import SearchBtn from './SearchBtn';
import ViewBtn from './ViewBtn';

const Controler = () => (
    <div className={classes.controler}>
        <SearchBtn />
        <ViewBtn />
        <DeleteBtn />
    </div>
);

export default Controler;
