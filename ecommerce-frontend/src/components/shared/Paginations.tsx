import {Pagination} from '@mui/material';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

interface PaginationProps {
  numberOfPage: number;
  totalOfProduct: number;
}

export const Paginations : React.FC<PaginationProps> = ({numberOfPage, totalOfProduct}) => {
  const [searchPrams] = useSearchParams();
    const pathName = useLocation();
    const params = new URLSearchParams(searchPrams);
    const navigate = useNavigate();
    const paramValue = searchPrams.get("page")
                      ? Number(searchPrams.get("page")) 
                      : 1;

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
      params.set("page", value.toString());
      navigate({
        pathname: pathName.pathname,
        search: params.toString(),
      });
    }
  return (
    <div>
      <Pagination
        count={numberOfPage}
        page={paramValue}
        defaultPage={1}
        siblingCount={0}
        boundaryCount={2}
        onChange = {handlePageChange}
      />
    </div>
  );
};
