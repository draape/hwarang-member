import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";
import { table } from "@sanity/table";

export default defineConfig({
  title: "hwarang-member",
  projectId: "h630w8u0",
  dataset: "production",
  plugins: [deskTool({ structure: deskStructure }), visionTool(), table()],
  schema: {
    types: schemas,
  },
});
