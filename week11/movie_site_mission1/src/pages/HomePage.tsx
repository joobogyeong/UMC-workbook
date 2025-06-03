import useFetch from "../hooks/useFetch";

export default function HomePage() {
  const { data, error, isLoading } = useFetch<string>("/");
  return (
    <div>
        homepage
    </div>
  )
}
