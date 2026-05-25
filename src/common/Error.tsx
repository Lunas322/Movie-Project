import { useNavigate } from "react-router-dom"

function Error() {
  const nav = useNavigate()

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6">
      
      <div className="text-7xl mb-4">⚠️</div>

      <h1 className="text-3xl font-bold mb-2">
        문제가 발생했습니다
      </h1>

      <p className="text-zinc-400 mb-6">
        페이지를 불러오는 중 오류가 발생했어요
      </p>

      <button
        onClick={() => nav("/")}
        className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition"
      >
        홈으로 돌아가기
      </button>
    </div>
  )
}

export default Error