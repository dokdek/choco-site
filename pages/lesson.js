import Navbar from "../components/navbar";


export default function Lesson(){
    return(
    <div className="bg-gray-800 min-h-screen">
        <Navbar/>
        <div className="main-container flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-pink-600 w-full">
            <p className="font-bold text-white my-10 text-5xl">六</p>
            <p className="font-bold text-white my-10 text-2xl">Six</p>
        </div>
        <div class="pt-2 relative mx-auto text-gray-600">
        <button type="submit" class="mt-5 mr-4 px-6 bg-white hover:text-gray-500 rounded-lg">
            Previous
        </button>
        <button type="submit" class="mt-5 mr-4 px-9 bg-white hover:text-gray-500 rounded-lg">
            Next
        </button>
      </div>
        </div>
    </div>
    );
}