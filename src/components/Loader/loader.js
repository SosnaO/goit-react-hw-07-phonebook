import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function LoaderComponent() {
  return (
    <div>
      <Loader type="ThreeDots" color="#00BFFF" height="32" />
    </div>
  );
}

export default LoaderComponent;