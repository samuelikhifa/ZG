"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [term, setTerm] = useState("");
  const [debouncedTerm] = useDebounce(term, 500); // 500ms delay

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedTerm) {
      params.set("query", debouncedTerm);
    } else {
      params.delete("query");
    }

    router.push(`${pathname}?${params.toString()}`);
  }, [debouncedTerm, pathname, router, searchParams]);

  return (
    <div className="md:w-2/5">
      <div className="form-control">
        <input
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Search"
          className="input input-bordered w-full md:w-96"
        />
      </div>
    </div>
  );
};

export default Search;
