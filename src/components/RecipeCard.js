import React from 'react';
import { Link } from 'gatsby';
import { Card, Paragraph } from 'flotiq-components-react';
import { ClockIcon, UsersIcon } from '@heroicons/react/solid';

const CustomRecipeCard = ({ slug, cookingTime, image, name, description, servings, tags }) => (
    <Card
        horizontal
        rounded="none"
        bordered={false}
        additionalClasses={['mb-4 cursor-pointer grid md:grid-cols-2 lg:grid-cols-3']}
    >
        <Link
            to={`/${slug}`}
            className="lg:col-span-2 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
        >
            <Card.Img src={image} alt={name} additionalContainerClasses={['w-full md:hidden']} />
        </Link>
        <Card.Body
            additionalClasses={[
                'flex flex-col items-start justify-between bg-white',
            ]}
        >
            <Link to={`/${slug}`}>
                <Card.Title additionalClasses={['font-semibold uppercase mb-5 !text-2xl md:!text-3xl']}>
                    {name}
                </Card.Title>
                <Paragraph
                    text={description}
                    additionalClasses={['line-clamp-4 md:line-clamp-5 !p-0']}
                />
                <div className="flex flex-wrap justify-start text-xs font-light space-x-5 pb-3 mt-5">
                    <p className="px-3 py-2 bg-medium-gray flex items-center rounded-lg">
                        <ClockIcon className="h-5 w-5 text-primary mr-2" />
                        {' '}
                        <span className="text-sm">{cookingTime}</span>
                    </p>
                    <p className="px-3 py-2 bg-medium-gray flex items-center rounded-lg">
                        <UsersIcon className="h-5 w-5 text-primary mr-2" />
                        {' '}
                        <span className="text-sm">{servings}</span>
                    </p>
                </div>

            </Link>
            <div className="flex flex-wrap justify-start text-sm font-light mt-5">
                {tags && tags.map((tag) => (
                    <a
                        href="/"
                        className="mr-5 my-1 py-2 inline-flex items-center justify-center
                       rounded-md underline text-xs font-light hover:text-secondary"
                    >
                        {tag}
                    </a>
                ))}
            </div>
        </Card.Body>
    </Card>
);

export default CustomRecipeCard;
