import { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { fetchData, options, bodyPartSearch } from '../../utils/fetchData';
import { handleChangeType } from '../../types';
import './search.scss';

export type exerciseType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  instructions: string;
  name: string;
  secondaryMuscles: string;
  target: string;
};
const Search = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([] as exerciseType[]);
  const [bodyParts, setBodyParts] = useState([] as string[]);

  const handleSearchChange: handleChangeType = async (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (search) {
      const exercisesData: exerciseType[] = await fetchData(``, options);
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setExercises(searchedExercises);
    }
    setSearch('');
  };

  useEffect(() => {
    bodyPartSearch(setBodyParts);
  }, []);
  return (
    <form className='fitness__search'>
      <h3 className='text_gradient'>Awesome Exercises You Should Know</h3>
      <div>
        <input
          type='text'
          placeholder='Search Exercises'
          value={search}
          onChange={(e) => handleSearchChange(e)}
        />
        <button onClick={(e) => handleSearch(e)}>
          <FcSearch fontSize={18} />
        </button>
        <div className='body_part_listing'></div>
      </div>
    </form>
  );
};

export default Search;
