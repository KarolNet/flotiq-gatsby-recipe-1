import React from 'react';
import { Header } from 'flotiq-components-react';
import RecipeCard from '../components/RecipeCard';

const RecipeCards = ({ recipes, headerText }) => (
    <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex flex-wrap justify-start">
            {recipes.map((recipe) => (
                <RecipeCard
                    cookingTime={recipe.cookingTime}
                    servings={recipe.servings}
                    key={recipe.id}
                    image={recipe.image[0] && recipe.image[0].localFile.publicURL}
                    name={recipe.name}
                    slug={recipe.slug}
                    tags={['#dinner', '#vegan', '#lunch', '#glutenfree']}
                />
            ))}
        </div>
    </div>
);

export default RecipeCards;
