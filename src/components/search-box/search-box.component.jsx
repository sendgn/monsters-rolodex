import cn from 'classnames';
import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input
        type='search'
        className={cn('search-box', className)}
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
);

export default SearchBox;
