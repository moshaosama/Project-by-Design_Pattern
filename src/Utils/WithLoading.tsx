interface ComponentProps {
  loading: boolean;
  [key: string]: any;
}

const WithLoading = (Component: React.ComponentType<any>) => {
  return function ({ loading, ...props }: ComponentProps) {
    if (loading) {
      return <h1 className="text-3xl font-bold">Loading...</h1>;
    } else {
      return <Component {...props} />;
    }
  };
};

export default WithLoading;
