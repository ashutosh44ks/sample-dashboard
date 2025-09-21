import { useFavoritesData } from "@/hooks/useFavoritesData";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router";

const NavQuick = () => {
  const [tab, setTab] = useState<"fav" | "recent">("fav");
  const { favorites } = useFavoritesData();
  return (
    <div className="py-2 px-4">
      <div className="space-x-4 mb-2">
        <button
          onClick={() => setTab("fav")}
          className={cn("text-sm text-muted-foreground", {
            "text-black dark:text-white": tab === "fav",
          })}
        >
          Favorites
        </button>
        <button
          onClick={() => setTab("recent")}
          className={cn("text-sm text-muted-foreground", {
            "text-black dark:text-white": tab === "recent",
          })}
        >
          Recent
        </button>
      </div>
      <div>
        {tab === "fav" ? (
          <ul
            className={cn(
              "space-y-1",
              favorites.length > 0 && "list-disc list-inside"
            )}
          >
            {favorites.length > 0 ? (
              favorites.map((fav) => (
                <li key={fav.id}>
                  <Link to={fav.url} className="text-sm">
                    {fav.id}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-sm text-muted-foreground">
                No favorites yet.
              </li>
            )}
          </ul>
        ) : (
          <ul className="space-y-1">
            <li className="text-sm text-muted-foreground">No recent items yet.</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavQuick;
