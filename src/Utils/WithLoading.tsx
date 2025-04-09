interface WithLoadingProps {
  loading: boolean;
  [key: string]: any;
}
const WithLoading = (Component: React.ComponentType<any>) => {
  return ({ loading, ...props }: WithLoadingProps) => {
    if (loading) {
      return <h1 className="text-2xl font-bold">Loading...</h1>;
    } else {
      return <Component {...props} />;
    }
  };
};

export default WithLoading;
