import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
// import styled from 'styled-components';
import Button from '../components/button/Button';
import Navbar from '../layout/navbar/Navbar';
import TopSection from '../layout/top-section/TopSection';
import styles from '../styles/Home.module.scss';
import { client, urlFor } from '../sanity';
import { Post } from './../typings';
import PostCard from '../components/post-card/PostCard'

// console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
interface HomeProps {
	posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
	console.log(posts);
	return (
		<div>
			<Head>
				<title> {"Lekan's blog"} </title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<>
				<Navbar />
				<TopSection />
				{/* display all available posts. probably add pagination to this afterwards */}
				{posts && posts.map((post: Post) => <PostCard key={post._id} data={post} />)}

			</>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
	const query = `
	*[_type =="post"]{
  _id,
  title,
  author ->{
  name,
  image
},
discription,
mainImage,
slug,
body,
}`;
	const posts = await client.fetch(query);
	return {
		props: {
			posts,
		},
	};
};

// const Card = styled.a`
// 	cursor: pointer;
// `;
