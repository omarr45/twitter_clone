import './RightSection.css';

import WhoToFollow from './WhoToFollow';
import searchIcon from '../assets/search.svg';
import xIcon from '../assets/x.svg';

const RightSection = () => {
  return (
    <div className='rightsection'>
      <div className='search_box'>
        <input
          autoComplete='off'
          type='text'
          name='search'
          id='search'
          className='search'
          placeholder='Search Twitter'
        />
        <img className='search_icon' src={searchIcon} alt='search' />
        <img className='x_icon' src={xIcon} alt='search' />
      </div>
      <hr />
      <WhoToFollow />
      <div className='terms'>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Ads info</span>
        <span>More •••</span>
        <span>&copy; 2021 Twitter, Inc.</span>
      </div>
      <div className='checkMe'>
        <p>
          Developed by{' '}
          <a href='https://omar45.com' target='_blank' rel='noreferrer'>
            Omar
          </a>
        </p>
        <p>
          Check it on{' '}
          <a
            href='https://github.com/omarr45/twitter_clone'
            target='_blank'
            rel='noreferrer'>
            GitHub
          </a>
        </p>
        <p>
          Many thanks to{' '}
          <a
            href='https://github.com/dapilab/react-nice-avatar'
            target='_blank'
            rel='noreferrer'>
            Dapilab
          </a>{' '}
          for the amazing avatars
        </p>
      </div>
    </div>
  );
};

export default RightSection;
