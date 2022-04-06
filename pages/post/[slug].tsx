import { GetStaticProps } from 'next';
import React from 'react';
import { Post } from '../../typings';
import { client, urlFor } from './../../sanity';

export const getStaticPaths = async () => {
	const query = `
        *[_type =="post"]{
            _id,
            slug{
                current,
            },
        },
    `;

	const posts = await client.fetch(query);

	const paths = posts.map((post: Post) => ({ params: { slug: post.slug.current } }));
	return {
		paths,
		fallback: 'blocking',
	};
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const query = ` *[_type=="post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author->{
            name,
            image
        },
            description,
            mainImage,
            slug,
            body
    }`;

	const post = await client.fetch(query, {
		slug: params?.slug,
	});

	if (!post) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			post,
		},
		revalidate: 60,
	};
};

interface PostProps {
	post: Post;
}
const Post = ({ post }: PostProps) => {
	console.log(post);
	return <div> Post</div>;
};

export default Post;
