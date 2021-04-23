import Navbar from "../components/navbar";


export default function Review(){
    return(
    <div className="bg-gray-800 min-h-screen">
        <Navbar/>
        <div className="main-container flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-pink-600 w-full">
            <p className="font-bold text-white my-10 text-2xl">What is the meaning of</p>
            <p className="font-bold text-white my-10 text-5xl">六</p>
        </div>
        <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mt-5"
          type="search" name="search" placeholder="Meaning"></input>
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        </button>
      </div>
        </div>
    </div>
    );
}