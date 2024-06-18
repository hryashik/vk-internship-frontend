import { Pagination } from "@mui/material";

interface IProps {
   total: number;
   currentPage: number;
   setCurrentPage: (num: number) => void;
}

const PaginationComponent: React.FC<IProps> = ({
   total,
   currentPage,
   setCurrentPage,
}) => {
   const handleChange = (_: React.ChangeEvent<unknown>, num: number) => {
      setCurrentPage(num);
   };

   return (
      <Pagination
         size="large"
         count={total}
         page={currentPage}
         color="primary"
         onChange={handleChange}
      />
   );
};

export default PaginationComponent;
