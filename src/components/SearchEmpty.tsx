function SearchEmpty () {
    return (
        <div className="w-full py-20 flex flex-col justify-center items-center text-center text-zinc-400">
              <div className="text-5xl mb-3">🔍</div>

              <div className="text-xl font-semibold text-white mb-1">
                검색된 항목이 없습니다
              </div>

              <div className="text-sm text-zinc-500">
                다른 키워드로 검색해보세요
              </div>
            </div>
    )
}
export default SearchEmpty