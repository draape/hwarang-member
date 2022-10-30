import React, { FC, useState } from "react";
import { Category } from "../../utils/get-distinct-categories";
import { Button, ButtonTheme } from "../button/button";

type FacetListProps = {
  categories: Category[];
  onSelect: (value: string | null) => void;
};

export const FacetList: FC<FacetListProps> = ({ categories, onSelect }) => {
  const [category, setCategory] = useState<string | null>();
  return (
    <ul className="facet-list">
      <li className="facet-list__facet">
        <Button
          theme={!category ? ButtonTheme.PillSelected : ButtonTheme.Pill}
          onClick={() => {
            setCategory(null);
            onSelect(null);
          }}
        >
          Alle
        </Button>
      </li>
      {categories.map((cat, i) => (
        <li key={i} className="facet-list__facet">
          <Button
            theme={
              category === cat.slug
                ? ButtonTheme.PillSelected
                : ButtonTheme.Pill
            }
            onClick={() => {
              setCategory(cat.slug);
              onSelect(cat.slug);
            }}
          >
            {cat.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};
