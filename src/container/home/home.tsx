import { HeroBanner, Search } from '../../components';

import './home.scss';

const Home = () => {
  return (
    <div className='fitness__home'>
      <HeroBanner />
      <Search />
    </div>
  );
};

export default Home;
