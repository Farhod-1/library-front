import useRequest from "@/api/useRequest";

export function customers() {
  return useRequest(() => ({
    url: "/customers",
  }));
}
