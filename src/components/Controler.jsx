import classes from './css/controler.module.css';
import DeleteBtn from './DeleteBtn';
import SearchBtn from './SearchBtn';
import ViewBtn from './ViewBtn';

const Controler = ({ handelSearch, search, handelView, view, handelDelete }) => (
    <div className={classes.controler}>
        <SearchBtn handelSearch={handelSearch} search={search} />
        <ViewBtn handelView={handelView} view={view} />
        <DeleteBtn handelDelete={handelDelete} />
    </div>
);

export default Controler;
