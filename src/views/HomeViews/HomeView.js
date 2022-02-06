import './HomeViews.scss';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div className="HomeView">
    <h1 className="HomeView__title">Did you register ? Log in : Sign up;</h1>
  </div>
);

export default HomeView;
