import React, {useState} from 'react';
import AddCategory from './commponents/AddCategory';
import GifGrid from './commponents/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    
    /*const handleAdd = () => {
        // setCategories([...categories, 'One Piece']);
        setCategories( cats => [...cats, 'Naruto']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />
            
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            category={category} 
                            key={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;