import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/vue";
import "@vitejs/plugin-vue";
import { createPinia, setActivePinia } from "pinia";
import { afterEach, expect } from "vitest";

expect.extend(matchers);

beforeEach(() => {
  setActivePinia(createPinia());
});

afterEach(() => {
  cleanup();
});
