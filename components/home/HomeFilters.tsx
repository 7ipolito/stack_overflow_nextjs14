"use client";

import { HomePageFilters } from "@/constants/filters";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { formUrlQuery } from "@/lib/utils";

const HomeFilters = () => {
  const [active] = useState("");

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((filter) => {
        return (
          <Button
            key={filter.value}
            onClick={() => {}}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
              active === filter.value
                ? "bg-primary-100 text-primary-500 dark:bg-dark-400"
                : "bg-light-800 text-light-500  hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400"
            }`}
          >
            {filter.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;
