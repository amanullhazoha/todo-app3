import classes from './css/viewBtn.module.css';

const ViewBtn = () => (
    <div className={classes.viewBtn}>
        <label htmlFor="list">
            <input type="radio" id="list" />
            List View
        </label>

        <label htmlFor="table">
            <input type="radio" id="table" />
            Table View
        </label>
    </div>
);

export default ViewBtn;
