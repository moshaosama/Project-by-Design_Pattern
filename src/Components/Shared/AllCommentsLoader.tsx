import React, { ReactNode } from "react";
import useFetch from "../../Hooks/useFetch";

interface AllCommentsLoaderProps {
  children: ReactNode;
  resourceName: string;
}

const AllCommentsLoader = ({
  children,
  resourceName,
}: AllCommentsLoaderProps) => {
  const { Data: CommentData, error } = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
        React.Children.map(children, () => {
          if (React.isValidElement(children)) {
            return React.cloneElement(children, {
              [resourceName]: CommentData,
            });
          }
        })
      )}
    </>
  );
};

export default AllCommentsLoader;
