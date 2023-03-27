import './search-box-styles.scss';

const SearchBox = ({ placeholder, onSearchHandler }) => (
    <div className='search-box'>
        <input className='search-input' type="search" placeholder={placeholder} required onChange={onSearchHandler}/>
    </div>
);

export default SearchBox;