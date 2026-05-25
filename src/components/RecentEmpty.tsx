function RecentEmpty () {
    return(
                  <div className="w-full h-[60vh] flex flex-col justify-center items-center text-center text-zinc-400">
            <div className="text-6xl mb-4">🎬</div>

            <div className="text-2xl font-semibold text-white mb-2">
              최근 본 영화가 없습니다
            </div>

            <div className="text-sm text-zinc-500">
              영화를 클릭하면 여기에 자동으로 추가됩니다
            </div>
          </div>
    )
}
export default RecentEmpty