"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

export default function Search({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}: Props) {
  const { push } = useRouter();

  function handleRoomTypeChange(e: ChangeEvent<HTMLSelectElement>) {
    setRoomTypeFilter(e.target.value);
  }

  function handleSearchQueryChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  function handleFilterClick() {
    push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  }

  return (
    <section className="rounded-lg bg-tertiary-light px-4 py-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="md:1/3 mb-4 w-full md:mb-0 lg:w-auto">
          <label
            htmlFor="roomType"
            className="mb-2 block text-sm font-medium text-black"
          >
            Tipo de quarto
          </label>

          <div className="relative">
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              name="roomType"
              className="w-full rounded px-4 py-2 capitalize leading-tight focus:outline-none dark:bg-black"
            >
              <option value="All">Todos</option>
              <option value="Basico">Quarto Básico</option>
              <option value="Luxo">Quarto de Luxo</option>
              <option value="Suíte">Suíte</option>
            </select>
          </div>
        </div>

        <div className="md:1/3 mb-4 w-full md:mb-0 lg:w-auto">
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium text-black"
          >
            Pesquise
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Quarto de luxo beira do mar..."
            className="w-full rounded px-4 py-3 leading-tight placeholder:text-black focus:outline-none dark:bg-black dark:placeholder:text-white"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        <button
          className="btn-primary"
          type="button"
          onClick={handleFilterClick}
        >
          Pesquise já
        </button>
      </div>
    </section>
  );
}
