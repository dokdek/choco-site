import Head from "next/head";
import Navbar from "../components/navbar";
import ReviewCard from "../components/review-card";
import LessonCard from "../components/lesson-card";
import ProgressCard from "../components/progress-card";
import KanjiMiniCard from "../components/kanji-mini-card";

export default function Home() {
  function testPrint(obj) {
    let result = [];
    for (let i = 0; i < 30; i++) {
      result.push(obj);
    }
    return result;
  }
  return (
    <div className="bg-gray-800 h-screen">
      <Navbar />
      <div className="main-container flex flex-col justify-center items-center">
        <div className="lessons-div flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-x-3 md:space-x-32 sm:space-y-0 mt-20">
          <ReviewCard />
          <LessonCard />
        </div>
        <ProgressCard />
        <div className="flex justify-start w-3/4 sm:w-1/2 mb-2">
          <h2 className="font-bold text-white">Kanji</h2>
        </div>
        <div className="mini-kanji-container flex flex-wrap flex-row justify-start w-3/4 sm:w-1/2">
          {testPrint(<KanjiMiniCard />)}
        </div>
      </div>
    </div>
  );
}
