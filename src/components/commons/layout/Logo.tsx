import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="mb-2 flex flex-col items-center">
        <div className=" m-auto text-2xl font-bold text-[#B45309]">
          atFeeLog
        </div>
        <div className="text-sm text-gray-400">
          막이 내린 뒤, 내가 남기는 에필로그
        </div>
      </div>
    </Link>
  );
}
