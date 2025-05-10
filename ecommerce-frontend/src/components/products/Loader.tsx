import { CircularProgress } from "@mui/material";

interface LoaderProps {
  text: string;
}

export const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className="flex w-full items-center justify-center m-4 p-3">
      <div className="flex flex-col items-center justify-center gap-2">
      <CircularProgress />
        <p>{text ? text : "Loading..."}</p>
      </div>
    </div>
  );
};
