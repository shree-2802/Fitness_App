import { homeContent } from '../../constants/constant';
import './heroBanner.scss';
const HeroBanner = () => {
  return (
    <div className='fitness__hero-banner  flex_both-center'>
      <div className='fitness__hero-banner_container flex_align-center'>
        <div className='fitness__hero-banner_container-left flex-column_gap'>
          <h5>{homeContent.text}</h5>
          <h1 className='text_gradient'>{homeContent.mainHeading}</h1>
          <p>{homeContent.subText}</p>
          <button>{homeContent.button}</button>
        </div>
        <div className='fitness__hero-banner_container-right flex-row'>
          <img src={homeContent.img} alt='walk' />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
