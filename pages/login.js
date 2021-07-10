import Head from "next/head";
import Particles from "react-particles-js";
import particlesconfig from "../particles-config";
import Link from "next/link";


export default function Login() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center bg-gray-800 h-screen space-y-20">
        <Particles params={particlesconfig} style={{
          position: 'absolute',
          zIndex: 0,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}/>
      <Head>
        <title>Choco</title>
      </Head>
      <div className="md:mb:10 z-10">
        <h1 className="text-center md:text-left text-8xl text-pink-400">Choco</h1>
        <h6 className="mx-3 text-center md:text-left  text-s text-pink-200">
          Let's learn Japanese! Choco is a modified Wanikani clone
        </h6>
      </div>
      <div>
        <div class="bg-gray-700 mx-6 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col z-10 relative">
          <div class="mb-4">
            <label
              class="block text-pink-500 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            ></input>
          </div>
          <div class="mb-6">
            <label
              class="block text-pink-500 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            ></input>
          </div>
          <div class="flex items-center justify-between">
            <Link href="/">
            <a className="bg-pink-500 rounded px-5 hover:bg-pink-400 text-white">Sign In</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
