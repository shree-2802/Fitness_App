import { FcSearch } from 'react-icons/fc';
import './search.scss';

const Search = () => {
  return (
    <form className='fitness__search'>
      <h3 className='text_gradient'>Awesome Exercises You Should Know</h3>
      <div>
        <input type='text' placeholder='Search Exercises' />
        <button>
          <FcSearch fontSize={18} />
        </button>
      </div>
    </form>
  );
};

export default Search;
