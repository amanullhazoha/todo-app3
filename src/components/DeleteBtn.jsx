import Button from './Button';
import classes from './css/deleteBtn.module.css';

const DeleteBtn = ({ handelDelete }) => (
    <div className={classes.deleteBtn}>
        <Button
            type="button"
            text="Clear Running"
            value="running"
            onClick={(e) => handelDelete(e.target.value)}
        />
        <Button
            type="button"
            text="Clear Completed"
            value="completed"
            onClick={(e) => handelDelete(e.target.value)}
        />
        <Button
            type="button"
            text="Reset"
            value="reset"
            onClick={(e) => handelDelete(e.target.value)}
        />
    </div>
);

export default DeleteBtn;
