import Button from './Button';
import classes from './css/search.module.css';
import Input from './Input';

const Search = ({ onChangeSearch, inputSrc, toggler }) => (
    <div className={classes.search}>
        <Input
            type="text"
            placeholder="Search Items"
            name="inputSrc"
            value={inputSrc}
            onChange={onChangeSearch}
        />
        <div className={classes.modelBtn}>
            <Button type="button" text="New" onClick={toggler} />
        </div>
    </div>
);

export default Search;
