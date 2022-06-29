import { Oval } from 'react-loader-spinner';

import { LoaderBox } from './Loader.styled';

const Loader = ({ width = 50, height = 50 }) => {
  return (
    <LoaderBox>
      <Oval
        ariaLabel="loading-indicator"
        width={width}
        height={height}
        strokeWidth={5}
        color="black"
        secondaryColor="red"
      />
    </LoaderBox>
  );
};

export default Loader;
