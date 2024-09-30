import Header from "@/components/navbar/Header";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function searchPage() {
  return (
    <main className="block bg-white">
      <Navbar />
      <div className="max-w-[1336px] m-auto block">
        <div className="justify-evenly flex flex-row">
          <main className="min-w-0 flex-1 basis-auto block ">
            <div className="flex-col h-full flex">
              <div className="flex-1 basis-auto block">
                <div className="justify-center flex">
                  <div className="mx-6 min-w-0  w-full">
                    <div className="block my-6 ">
                      <div className="bg-[#F0F0F0] w-[240px] rounded-2xl flex items-center">
                        <div className="inline-block"></div>
                        <div className="mx-3 flex">
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0833 13.3333H14.1617L13.835 13.0183C14.9783 11.6883 15.6667 9.96167 15.6667 8.08333C15.6667 3.895 12.2717 0.5 8.08333 0.5C3.895 0.5 0.5 3.895 0.5 8.08333C0.5 12.2717 3.895 15.6667 8.08333 15.6667C9.96167 15.6667 11.6883 14.9783 13.0183 13.835L13.3333 14.1617V15.0833L19.1667 20.905L20.905 19.1667L15.0833 13.3333ZM8.08333 13.3333C5.17833 13.3333 2.83333 10.9883 2.83333 8.08333C2.83333 5.17833 5.17833 2.83333 8.08333 2.83333C10.9883 2.83333 13.3333 5.17833 13.3333 8.08333C13.3333 10.9883 10.9883 13.3333 8.08333 13.3333Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          className="bg-transparent py-[10px] pr-5 text-sm outline-none border-none w-full "
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div className="block my-6">
                      <div className="block mb-10">
                        <div className="block">
                          <h1 className="font-medium text-2xl">Recent searches</h1>
                        </div>
                      </div>
                    </div>
                    <div className="block mb-4">
                      <span className="text-base">
                        You have no recent searches
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
