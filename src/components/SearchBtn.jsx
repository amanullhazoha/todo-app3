import Button from './Button';
import classes from './css/searchBtn.module.css';

const SearchBtn = ({ handelSearch, search }) => (
    <div className={classes.searchBtn}>
        <Button
            type="button"
            text="All"
            className={search === 'all' ? classes.active : ''}
            onClick={() => handelSearch('all')}
        />
        <Button
            type="button"
            text="Running"
            className={search === 'running' ? classes.active : ''}
            onClick={() => handelSearch('running')}
        />
        <Button
            type="button"
            text="Completed"
            className={search === 'completed' ? classes.active : ''}
            onClick={() => handelSearch('completed')}
        />
    </div>
);

export default SearchBtn;
