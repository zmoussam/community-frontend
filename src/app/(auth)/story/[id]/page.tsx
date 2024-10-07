import React from 'react'
import NewStory from '../NewStory'
import Navbar from '@/components/navbar/Navbar'
import { Backend_URL } from '@/app/lib/Constants';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function page({params}: {params: {id: string}}) {

	const session = await getServerSession(authOptions);

        const response = await fetch(Backend_URL + "/posts/" + params.id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
		const story = result.content;

  return (
	<div className='max-w-[1000px] mx-auto'>
		<Navbar />
		<NewStory storyId={params.id} Storycontent={story} />
	</div>
  )
}
