import categoryMapping from '../categoryMapping';
const useQuizList = () => {
  const subcategoryNameHandler = (category) => {
    if (category.indexOf(':') !== -1) {
        return category.slice(category.indexOf(':')+2);
    } else {
        return category
    }
  }
    return { categoryMapping, subcategoryNameHandler };
};

export default useQuizList;
