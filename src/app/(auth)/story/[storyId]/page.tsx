import React from 'react'

export default function page({params}: {params: {storyId: string}}) {

	console.log(params.storyId)
  return (
	<div>page</div>
  )
}
