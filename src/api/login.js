import require from "@/utils/request";

export function login(data = {}) {
  return require({
    url: "/login",
    method: "POST",
    data,
  });
}
