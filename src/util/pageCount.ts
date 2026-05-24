import type { Dispatch, SetStateAction } from "react";
type pageCountProps = {
  setPage: Dispatch<SetStateAction<number>>;
};

export function pageCount({ setPage }: pageCountProps) {
  setPage((prev) => prev + 1);
}
