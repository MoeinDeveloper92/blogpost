'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ loading }: { loading: boolean }) => {
  return (
    <ClipLoader
      color={'#0f1'}
      loading={loading}
      cssOverride={{
        margin: '0 auto',
        display: 'block',
      }}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
