import useData from "./useData";

export interface Category {
  id: number;
  name: string;
  image: string;
}

const useCategory = () => useData<Category>("/categories");

export default useCategory;
