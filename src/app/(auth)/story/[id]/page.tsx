import React from 'react'
import NewStory from '../NewStory'
import Navbar from '@/components/navbar/Navbar'

export default function page({params}: {params: {id: string}}) {

	console.log("story id: ", params.id)
  return (
	<div className='max-w-[1000px] mx-auto'>
		<Navbar />
		<NewStory />
	</div>
  )
}
