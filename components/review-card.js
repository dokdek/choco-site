

export default function ReviewCard({number}){
    return(
        <button className="flex flex-col justify-center items-center rounded-lg shadow-xl bg-pink-600 py-10 px-32 space-y-3 hover:bg-pink-500">
            <h1 className="text-white font-bold">Reviews</h1>
            <p className="rounded-full bg-white px-3 py-1">3</p>
        </button>
    );
}