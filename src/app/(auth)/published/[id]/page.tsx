import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Backend_URL } from "@/app/lib/Constants";
import Navbar from "@/components/navbar/Navbar";
import { getServerSession } from "next-auth";
import RenderStory from "../RenderStory";

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
    return <p>Failed to load story. Please try again later.</p>;
  }

  const result = await response.json();
  const story = result;
  const author = result.author;
  console.log(story);
  return (
    <div>
      <Navbar />
      <RenderStory
        authorFirstName={author.firstName}
        authorLastName={author.lastName}
        authorImage={author.imageUrl}
		publishedStory={story}
      />
    </div>
  );
}
