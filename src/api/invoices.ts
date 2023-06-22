import useRequest from "@/api/useRequest";

export function Books() {
  return useRequest(() => ({
    url: "/books",
  }));
}
