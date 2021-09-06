import classes from './css/list.module.css';
import Input from './Input';

const List = ({ data, handelCheck }) =>
    data.map((d) => (
        <div className={classes.list} key={d.id}>
            <div className={classes.left}>
                <Input type="checkbox" onChange={() => handelCheck(d)} />
                <div>
                    <p>{d.title}</p>
                    <p>{d.date}</p>
                </div>
            </div>
            <p className={d.isComplete ? classes.status : classes.red}>
                {d.isComplete ? 'Completed' : 'Running'}
            </p>
        </div>
    ));

export default List;
