"use client";

import { ProjectFilter } from "./ProjectFilter";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import projects from "../../data.js";
import Image from "next/image";
export default function Project() {
  const [displayItems, setDisplayItems] = useState(projects.items);
  const [active, setActive] = useState("all");

  const handleCategoryClick = (category) => {
    if (category === active) return;
    setActive(category);
    setDisplayItems([]);

    if (category === "all") {
      setDisplayItems(projects.items);
      return;
    }

    const filterData = projects.items.filter(
      (item) => item.category === category
    );
    setTimeout(() => {
      setDisplayItems(filterData);
    }, 400);
  };

  return (
    <main className="flex flex-col col-span-2 overflow-hidden">
      <div className="m-3 px-4">
        {" "}
        <h1 className="text-3xl text-purple underline underline-offset-8 font-black">
          Projects
        </h1>
      </div>

      <ProjectFilter active={active} handleClick={handleCategoryClick} />

      <div className=" relative grid grid-rows-2 grid-flow-col gap-4 content-center items-center m-4 ">
        <AnimatePresence>
          {displayItems.map(
            (
              {
                image_path,
                category,
                name,
                deployed_url,
                github_url,
                key_techs,
                desc,
              },
              i
            ) => (
              <motion.div
                className="col-span-12 p-4  bg-indigo-200 overflow-hidden rounded-md"
                key={i}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                exit={{ transform: "scale(0)" }}
              >
                <Image
                  src={image_path}
                  className="rounded overflow-y-auto object-contain "
                  alt={name}
                  width={300}
                  height={150}
                />

                <p className="text-xl font-bold text-center">{name}</p>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
