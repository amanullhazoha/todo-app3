import Button from './Button';
import classes from './css/search.module.css';
import Input from './Input';

const Search = () => (
    <div className={classes.search}>
        <Input type="text" placeholder="Search Items" />
        <div className={classes.modelBtn}>
            <Button type="button" text="New" />
        </div>
    </div>
);

export default Search;
