import { createFileRoute } from "@tanstack/react-router";
import { useLiveQuery, createLiveQueryCollection } from "@tanstack/react-db";
import { todosCollection } from "../collection"

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { data } = useLiveQuery(
    createLiveQueryCollection((q) =>
      q.from({ todo: todosCollection }).select(({ todo }) => ({
        ...todo,
      }))
    )
  );

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
