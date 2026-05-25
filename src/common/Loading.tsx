function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-white">
      
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce delay-300"></div>
      </div>

      <p className="text-zinc-400 text-lg">
        영화 정보를 불러오는 중...
      </p>
    </div>
  )
}
export default Loading