import { createDelivery } from "@/lib/actions";
import data from "./data.json";

export default function DrivePage() {
  return (
    <main className="flex flex-col">
      <h2></h2>
      <form action={createDelivery}>
        {data.map((d, k) => {
          return (
            <label>
              {d.content}
              <input type={d.type} name={d.name} className="w-screen border" />
            </label>
          );
        })}

        <button type="submit">Save</button>
      </form>
    </main>
  );
}
