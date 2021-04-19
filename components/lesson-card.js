export default function LessonCard({number}){
    return(
        <button className="flex flex-col justify-items-center items-center rounded-lg shadow-xl bg-purple-600 p-10 space-y-3 hover:bg-pink-500">
            <h1 className="text-white font-bold">Lessons</h1>
            <p className="rounded-full bg-white px-3 py-1">2</p>
        </button>
    );
}