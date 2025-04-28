interface commentInfoData {
  comment?: {
    name: string;
    email: string;
    body: string;
  }[];
}

const CommentInfo = ({ comment }: commentInfoData) => {
  return (
    <>
      <div className="grid grid-cols-3 mt-2 gap-5 overflow-y-scroll h-[86.8vh]">
        {comment?.map((comment, index) => (
          <div className="border-[1px] border-gray-300">
            <div className="flex gap-3">
              <p className="font-bold">Comment:</p>
              <h1 key={index}>{comment.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentInfo;
