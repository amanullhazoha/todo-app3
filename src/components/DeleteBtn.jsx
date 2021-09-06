import Button from './Button';
import classes from './css/deleteBtn.module.css';

const DeleteBtn = () => (
    <div className={classes.deleteBtn}>
        <Button type="button" text="Clear Selected" />
        <Button type="button" text="Clear Completed" />
        <Button type="button" text="Reset" />
    </div>
);

export default DeleteBtn;
