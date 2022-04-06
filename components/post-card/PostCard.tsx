import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '../../typings';
import { urlFor, imageBuilder } from '../../sanity';

interface PostCardProps {
	data: Post;
}
const PostCard = ({ data }: PostCardProps) => {
	return (
		// href={`/post/${post.slug.current}}
		<Link href={`/post/${data.slug.current}`} passHref>
			{data && (
				<div>
					{data.mainImage && (
						<Image width={200} height={200} src={urlFor(data.mainImage).url()!} alt='post main image' />
					)}
					<div>
						<p> {data.description}</p>
						<p> {data.author.name}</p>
						<p> hello</p>
					</div>
				</div>
			)}
		</Link>
	);
};

export default PostCard;
