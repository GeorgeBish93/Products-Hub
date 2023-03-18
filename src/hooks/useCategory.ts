import Categories from "../data/Categories";

export interface Category {
  id: number;
  name: string;
  image: string;
}

//shipping static data
const useCategory = () => ({ data: Categories, isLoading: false, error: null });

//in case we want to get categories from fake api
//const useCategory = () => useData<Category>("/categories");

export default useCategory;
