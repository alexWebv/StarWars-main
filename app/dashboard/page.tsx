"use client";

import { LoaderComponent } from "@/src/components/Loader/loader";
import { PaginationModel } from "@/src/models/CustomPagination/CustomPagination";
import { HoverCleverGrids } from "@/src/models/HoverGridEffect/HoverGrid";
import { fetchPeople } from "@/src/services/swapi.service";
import { IPerson, SwapiResponse } from "@/src/types/Swapi.types";
import { useEffect, useState } from "react";
export default function DashboardPage() {
  // State variables for storing fetched data and current page number
  const [characters, setCharacters] = useState<SwapiResponse<IPerson>>({
    count: 0,
    results: [],
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Function to fetch data from SWAPI based on current page
  const fetchData = () => {
    fetchPeople(currentPage).then((resp) => setCharacters(resp.data));
  };

  // Fetch data when component mounts or current page changes
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="dark:bg-w  w-full  ">
      {/* Displaying either grid of characters or loader component based on data availability */}
      {characters?.results?.length > 0 ? (
        <div className="flex h-full flex-col justify-between py-10">
          {/* Rendering grid with hover effect */}
          <HoverCleverGrids items={characters.results} />
          {/* Pagination component */}
          <PaginationModel
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPagesToDisplay={5}
            totalPages={Math.ceil(characters?.count / 10)}
          />
        </div>
      ) : (
        // Display loader component when data is being fetched
        <LoaderComponent />
      )}
    </div>
  );
}
