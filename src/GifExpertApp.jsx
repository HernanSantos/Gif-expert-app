import { useState } from "react";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon ball","Goku"]);
    console.log(categories);
  return (
    <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>

        {/*input*/}

        {/*listado de gif*/}
        <ol>
            {categories.map(category => {
                return <li key={category}>{category}</li>
            })}
        </ol>
            {/*gif item*/}
    </>
  )
}
