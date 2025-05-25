import Link from "next/link";

export default function Card({
  title,
  description,
  button = "Open",
  link,
}: {
  title?: string;
  description?: string;
  button?: string;
  link: string;
}) {
  return (
    <div className="flex flex-col gap-1 items-start border border-gray-300 p-4 rounded md:max-w-sm lg:max-w-sx w-full">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex flex-col items-end w-full">
        <Link href={link}>
          <button className=" border border-gray-700 hover:bg-gray-700 hover:text-white text-gray-700 py-1 px-5 rounded transition-colors">
            {button}
          </button>
        </Link>
      </div>
    </div>
  );
}
