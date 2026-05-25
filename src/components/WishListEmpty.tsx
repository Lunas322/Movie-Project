function WishListEmpty() {
  return (
    <div className="w-full h-[60vh] flex flex-col justify-center items-center text-center text-zinc-400">

      <div className="text-xl font-semibold text-white mb-2">
        찜한 영화가 없습니다
      </div>

      <div className="text-sm text-zinc-500">
        마음에 드는 영화를 찜해보세요!
      </div>
    </div>
  );
}
export default WishListEmpty;
