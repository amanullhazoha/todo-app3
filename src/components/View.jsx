import List from './List';

const View = ({ data, handelCheck }) => (
    <div className="view">
        <List data={data} handelCheck={handelCheck} />
    </div>
);

export default View;
