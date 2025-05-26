export default function GreetingName({ name }: { name?: string }) {
  return (
    <div className="flex items-center mr-5">
      <p className="text-sm">Hi, {name}</p>
    </div>
  );
}
