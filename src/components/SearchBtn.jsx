import Button from './Button';
import classes from './css/searchBtn.module.css';

const SearchBtn = () => (
    <div className={classes.searchBtn}>
        <Button type="button" text="All" />
        <Button type="button" text="Running" />
        <Button type="button" text="Completed" />
    </div>
);

export default SearchBtn;
