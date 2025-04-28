import CommentInfo from "../Components/DataInfo/CommentInfo";
import AllCommentsLoader from "../Components/Shared/AllCommentsLoader";
import useLoading from "../Hooks/useLoading";
import WithLoading from "../Utils/WithLoading";

const CommentInfoLoading = WithLoading(CommentInfo);

const CommentPage = () => {
  const { loading } = useLoading();
  return (
    <>
      <AllCommentsLoader resourceName="comment">
        <CommentInfoLoading loading={loading} />
      </AllCommentsLoader>
    </>
  );
};

export default CommentPage;
