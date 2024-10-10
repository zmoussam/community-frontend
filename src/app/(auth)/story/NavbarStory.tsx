"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/navLink/NavLink";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Backend_URL } from "@/app/lib/Constants";
import { FiChevronDown } from "react-icons/fi";
import SignInButton from "@/components/SignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Select from "react-select";

type Props = {
  storyId: string;
  CurrentUserId: string | undefined;
  CurrentUserFirstName: string | null | undefined;
  CurrentUserLastName: string | null | undefined;
  Storycontent: string | null | undefined;
};

const NavbarStory = ({
  storyId,
  CurrentUserFirstName,
  CurrentUserLastName,
  CurrentUserId,
  Storycontent,
}: Props) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const session = useSession();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const PublishStory = async (topics: string[]) => {
    try {
      const response = await fetch(Backend_URL + "/posts/" + storyId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.token}`,
        },
        body: JSON.stringify({
          categories: topics,
		  publish: true,
        }),
      });
	  console.log({
		categories: topics,
		publish: true,
	  })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      router.push(`/published/${result.id}`);
    } catch (error) {
      console.log("Error publishing the stroy", error);
    }
  };

  if (session.status === "unauthenticated")
    return (
      <main className="bg-white  font-vietnam fixed top-0 right-0 left-0 w-full z-10 border border-b-black">
        <div className="flex justify-center">
          <div className="mx-6 my-0 w-full max-w-[1192px]">
            <div className="flex flex-row h-[75px] py-[25px] px-0 items-center ">
              <div className="block">
                <Link href="/">
                  <Image
                    src={`/assets/logo/logo-${"light"}.png`} // Replace with your logo image path
                    alt="Logo"
                    width={250}
                    height={150}
                    quality={100}
                    priority
                    className="w-auto h-14"
                  />
                </Link>
              </div>
              <div className="block flex-1 basis-auto"></div>
              <div className="flex flex-row items-center">
                <div className="hidden md:inline-block">
                  <div className="mr-[25px] block">
                    <NavLink href="/blogs" content="Blogs" />
                  </div>
                </div>
                <div className="hidden md:inline-block">
                  <div className="mr-[25px] block">
                    <NavLink href="/about" content="About" />
                  </div>
                </div>
                <div className="hidden md:inline-block">
                  <div className="mr-[25px] block">
                    <NavLink href="/contact" content="Contact us" />
                  </div>
                </div>
                <div className="hidden md:inline-block">
                  <div className="mr-[25px] block">
                    <NavLink href="/api/auth/signin" content="Write" />
                  </div>
                </div>
                <div className="hidden md:inline-block">
                  <div className="mr-[25px] block">
                    <SignInButton />
                  </div>
                </div>
                <div>
                  <span>
                    <Link
                      href={"/api/auth/signin"}
                      className="text-center inline-block bg-black rounded-lg m-0 py-2 px-4 text-white text-sm font-normal font-vietnam"
                    >
                      Get started
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );

  return (
    <main className="z-50 top-0 sticky block bg-white">
      <div className="h-[57px] px-6 flex items-center">
        <div className="flex-1 basis-auto items-center flex">
          <Link href="/">
            <Image
              src={`/assets/logo/logo-${"light"}.png`} // Replace with your logo image path
              alt="Logo"
              width={250}
              height={150}
              quality={100}
              priority
              className="w-auto h-14"
            />
          </Link>
        </div>
        <div className="hidden md:flex ">
          <div className="mr-8 flex ">
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="text-black border opacity-90 bg-gray-500 border-gray-500 hover:bg-gray-700 hover:opacity-100 duration-100 ease-in   font-medium rounded-lg text-sm px-3 py-1 me-2 "
            >
              Publish
            </button>
          </div>
        </div>

        <div className="mr-8 flex">
          <Link href={"/me/notifications"}>
            <div className="relative flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 26 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9032 28.1667C14.6907 28.1667 16.1532 26.8917 16.1532 25.3334H9.65322C9.65322 26.8917 11.0995 28.1667 12.9032 28.1667ZM22.6532 19.6667V12.5834C22.6532 8.23425 19.9882 4.59341 15.3407 3.63008V2.66675C15.3407 1.49091 14.252 0.541748 12.9032 0.541748C11.5545 0.541748 10.4657 1.49091 10.4657 2.66675V3.63008C5.80197 4.59341 3.15322 8.22008 3.15322 12.5834V19.6667L1.05697 21.4942C0.0332209 22.3867 0.748221 23.9167 2.19447 23.9167H23.5957C25.042 23.9167 25.7732 22.3867 24.7495 21.4942L22.6532 19.6667Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="block">
          <button
            onClick={toggleProfileMenu}
            className="bg-transparent border-none cursor-pointer p-0 items-center flex m-0"
          >
            <div className="relative block">
              <div className="relative block">
                <Image
                  className="block rounded-[50%] align-middle w-8 h-8"
                  src="/assets/authors/costomer1.jpg"
                  alt="Jese Leos"
                  width={32}
                  height={32}
                />
                <div className="absolute w-8 h-8 top-0 block rounded-[50%]"></div>
              </div>
            </div>
            <FiChevronDown className=" text-gray-600" size={20} />
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2">
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Visit Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Settings
              </Link>
              <Link
                href={"/api/auth/signout"}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
      {showPopup && (
        <SaveStoryPopUp
          storyId={storyId}
          PublishStory={PublishStory}
          setShowPopUp={setShowPopup}
          CurrentUserFirstName={CurrentUserFirstName}
          CurrentUserLastName={CurrentUserLastName}
          CurrentUserId={CurrentUserId}
        />
      )}
    </main>
  );
};

export default NavbarStory;

type SaveStoryPopUptypes = {
  storyId: string;
  PublishStory: (topics: string[]) => void;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  CurrentUserId: string | undefined;
  CurrentUserFirstName: string | null | undefined;
  CurrentUserLastName: string | null | undefined;
};
const SaveStoryPopUp = ({
  storyId,
  PublishStory,
  setShowPopUp,
  CurrentUserId,
  CurrentUserFirstName,
  CurrentUserLastName,
}: SaveStoryPopUptypes) => {
  const [story, setStory] = useState<string>();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const session = useSession();

  useEffect(() => {
    const fetchStoryById = async () => {
      try {
        const response = await fetch(Backend_URL + "/posts/" + storyId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.data?.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setStory(result.content);
      } catch (error) {
        console.log("Error fetching the story data", error);
      }
    };
    fetchStoryById();
  });

  const topics = [
    { value: "Artificial Intellignece", label: "Artificial Intellignece" },
    { value: "Python", label: "Python" },
    { value: "Programming", label: "Programming" },
    { value: "Fashion", label: "Fashion" },
    { value: "Wrold", label: "Wrold" },
    { value: "Politics", label: "Politics" },
  ];

  if (!story) return null;

  // first 10 words for description

  const stripHtmlTags = (htmlString: string) => {
    return htmlString.replace(/<[^>]*>/g, "");
  };

  const contentWithoutH1 = story.replace(/<h1[^>]*>[\s\S]*?<\/h1>/g, "");

  const textWithoutHtml = stripHtmlTags(contentWithoutH1);

  const first10Words = textWithoutHtml.split(/\s+/).slice(0, 10).join(" ");

  // h1 tag for heading

  const h1Match = story.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1Element = h1Match ? h1Match[1] : "";

  const h1ElementWithoutTag = stripHtmlTags(h1Element);

  // image src for Image preview
  const ImageMatch = story.match(/<img[^>]*src=["']([^"']*)["'][^>]*>/);
  const imgSrc = ImageMatch ? ImageMatch[1] : "";

  return (
    <div className="fixed bg-gray-50 w-full z-20 overflow-auto top-0 left-0 right-0 bottom-0">
      <span
        onClick={(e) => {
          e.preventDefault();
          setShowPopUp(false);
        }}
        className="ablsolute top-4 right-6 text-3xl cursor-pointer"
      >
        &times;
      </span>
      <div className="max-w-[900px] mx-auto md:mt-28 mt-10 grid md:grid-cols-2 grid-cols-1 gap-14">
        <div className="max-md:hidden">
          <p className="font-semibold">Story Preview</p>
          <div className="w-full h-[250px] bg-gray-100 rounded my-3 border-b-[1px] ">
            {imgSrc && (
              <Image
                src={imgSrc}
                width={250}
                height={250}
                alt="Preview Image"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <h1 className="border-b-[1px] text-[18px] font-semibold py-2">
            {h1ElementWithoutTag}
          </h1>
          <p className="border-b-[1px] py-2 text-sm text-neutral-500 pt-3">
            {first10Words}
          </p>
          <p className="font-medium text-sm pt-2">
            Note:{" "}
            <span className="font-normal text-neutral-500">
              Changes will affect how your story appears in public places like
              Medium's homepage and in subscribers inboxes - not the contents of
              the story itself.
            </span>
          </p>
        </div>
        <div>
          <p className="py-2">
            Publishing to:{" "}
            <span>
              {CurrentUserFirstName} {CurrentUserLastName}
            </span>
          </p>
          <p className="text-sm pb-3 pt-1">
            Add or change topics (up to 5) so readers know what your stroy is
            about
          </p>
          <Select
            placeholder="tags"
            isMulti
            onChange={(selectedValues) => {
              const values = selectedValues as {
                value: string;
                label: string;
              }[];

              const stringValues = values.map((value) => value.value);

              setSelectedTopics(stringValues);
            }}
            isOptionDisabled={() => selectedTopics?.length >= 5}
            name="topics"
            options={topics}
            className="basic-multi-select"
            classNamePrefix="Add a topic ..."
          />
          <button
            onClick={() => PublishStory(selectedTopics)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full text-white text-sm mt-8"
          >
			Publish now
		  </button>
        </div>
      </div>
    </div>
  );
};
