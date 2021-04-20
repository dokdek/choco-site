import Navbar from "../components/navbar";
import VocabCard from "../components/vocab-card";

export default function Vocabulary() {
    function testPrint(obj) {
        let result = [];
        for (let i = 0; i < 60; i++) {
          result.push(obj);
        }
        return result;
      }
  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <div className="main-container flex flex-col justify-center items-center">
        <div class="flex flex-wrap flex-col md:flex-row justify-start w-3/4 py-4 text-gray-600">
        <h1 className="pr-5 font-bold text-2xl text-white pt-1">All Vocabulary</h1>
          <input
            class="border-2 border-gray-300 bg-white h-10 w-3/4 max-w-md px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          ></input>
          {
            //<button type="submit" class="absolute right-0 top-0 mt-5 mr-4"></button>
          }
        </div>
        <div className="flex flex-wrap flex-row justify-start w-3/4">
          {testPrint(<VocabCard/>)}
        </div>
      </div>
    </div>
  );
}
