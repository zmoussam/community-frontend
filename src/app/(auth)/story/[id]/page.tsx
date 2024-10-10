import React from "react";
import NewStory from "../NewStory";
import Navbar from "@/components/navbar/Navbar";
import { Backend_URL } from "@/app/lib/Constants";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NavbarStory from "../NavbarStory";

export default async function page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(user?.id, user?.firstName, user?.lastName);

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
    <div className="max-w-[1000px] mx-auto">
      <NavbarStory
		storyId={params.id}
        CurrentUserId={user?.id.toString()}
        CurrentUserFirstName={user?.firstName}
        CurrentUserLastName={user?.lastName}
		Storycontent={story}
      />
      <NewStory storyId={params.id} Storycontent={story} />
    </div>
  );
}
