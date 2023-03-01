"use client";

import { ProjectFilter } from "./ProjectFilter";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import projects from "../../data.js";

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
    <main className="flex flex-col col-span-2">
      <div className="m-3 px-4">
        {" "}
        <h1 className="text-3xl text-purple underline underline-offset-8 font-black">
          Projects
        </h1>
      </div>

      <ProjectFilter active={active} handleClick={handleCategoryClick} />

      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <AnimatePresence>
          {displayItems.map(({ image_path, category }, i) => (
            <motion.div
              style={{ overflow: "hidden" }}
              key={i}
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0)" }}
            >
              <motion.img
                src={image_path}
                className="rounded"
                alt="nothing"
                width="50%"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
