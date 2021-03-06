import Navbar from "../components/navbar";
import KanjiCard from "../components/kanji-card";

export default function Kanji() {
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
        <div className="flex flex-wrap md:flex-row justify-center w-3/4 py-4 text-gray-600">
        <h1 className="py-2 px-5 font-bold text-2xl text-white pt-1">All Kanji</h1>
          <input
            className="border-2 border-gray-300 bg-white h-10 w-3/4 max-w-md px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          ></input>
          {
            //<button type="submit" class="absolute right-0 top-0 mt-5 mr-4"></button>
          }
        </div>
        <div className="flex flex-wrap flex-row justify-center w-3/4">
          {testPrint(<KanjiCard/>)}
        </div>
      </div>
    </div>
  );
}
