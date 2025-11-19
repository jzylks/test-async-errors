import { query } from "$app/server";
import { error } from "@sveltejs/kit";

export const test_error = query(async () => {
  error(404, "Not found");
});
