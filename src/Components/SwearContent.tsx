import { ReactNode } from "react";

interface SwearContentProps {
  children: ReactNode;
}

const SwearContent = ({ children }: SwearContentProps) => {
  const [Sidebar, Content]: any = children;

  return (
    <>
      <div className="flex">
        <div>{Sidebar}</div>
        <div>{Content}</div>
      </div>
    </>
  );
};

export default SwearContent;
