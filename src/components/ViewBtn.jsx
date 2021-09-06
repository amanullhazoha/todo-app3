import classes from './css/viewBtn.module.css';

const ViewBtn = ({ handelView, view }) => (
    <div className={classes.viewBtn}>
        <label htmlFor="list">
            <input
                type="radio"
                id="list"
                onChange={() => handelView('list')}
                checked={view === 'list' && true}
            />
            List View
        </label>

        <label htmlFor="table">
            <input
                type="radio"
                id="table"
                onChange={() => handelView('table')}
                checked={view === 'table' && true}
            />
            Table View
        </label>
    </div>
);

export default ViewBtn;
