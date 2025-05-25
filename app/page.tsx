import Card from "@/components/card";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-28">
      <div className="flex flex-col max-w-5xl w-full px-4 py-3 gap-5">
        <h1 className="text-3xl font-bold">Home</h1>
        <div className="flex gap-3 flex-wrap">
          <Card
            title="Member Page"
            description="- Change password."
            link="/member"
          />

          <Card
            title="Admin Page"
            description="- See all accounts."
            link="/admin"
          />
        </div>
      </div>
    </div>
  );
}
