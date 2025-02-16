import { useState } from "react";

function useCategory(initialCategory) {
    const [category, setCategory] = useState(initialCategory);
    return { category, setCategory };
}

export default useCategory;
