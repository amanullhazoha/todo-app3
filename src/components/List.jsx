import classes from './css/list.module.css';
import Input from './Input';

const List = () => (
    <div className={classes.list}>
        <div className={classes.left}>
            <Input type="checkbox" />
            <div>
                <p>Take some rest</p>
                <p>Sun Jun 06 2020</p>
            </div>
        </div>
        <p className={classes.status}>Running</p>
    </div>
);

export default List;
