
export default function ProgressCard(){
    return(
        <div className="w-3/4 sm:w-1/2 mt-10">
            <h1 className="text-gray-300">Level 2 Progress</h1>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
            <div style={{width:"30%"}} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
            </div>
        </div>
    )
}