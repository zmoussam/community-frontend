import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  // Mock data for the user profile
  const user = {
    name: "Zakaria Moussammi",
    email: "zakaria@example.com",
    bio: "Software developer with a passion for learning and sharing knowledge. Interested in web development, AI, and open-source projects.",
    profilePicture: "/assets/authors/costomer1.jpg", // Replace with your profile picture path
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Profile</h1>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
        <div className="mb-6 md:mb-0 md:mr-8">
          <Image
            src={user.profilePicture}
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Bio:</strong> {user.bio}
          </p>

          <div className="flex space-x-4">
            <Link href="/edit-profile">
              <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5">
                Edit Profile
              </button>
            </Link>
            <button className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
