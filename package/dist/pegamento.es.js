import { jsx as $ } from "react/jsx-runtime";
import { useMemo as h, createElement as T } from "react";
const y = (t, d = "x") => t.length === 0 ? "transparent" : `repeating-linear-gradient(${d === "x" ? "90deg" : "0deg"}, ${t.reduce(
  (s, n) => `${s}${n.color} ${n.stop[0]},${n.color} ${n.stop[1]},`,
  ""
).slice(0, -1)})`, b = (t) => {
  const {
    children: d,
    as: s,
    gap: n = "0",
    size: e,
    ratio: u,
    DANGEROUS: c,
    stretch: l,
    gridTemplateColumns: o,
    gridTemplateRows: a,
    items: r,
    direction: i,
    border: g,
    padding: m,
    marginAuto: p,
    ...x
  } = t, f = h(() => r === void 0 ? "" : y(r, i), [r, i]), C = h(() => ({
    gap: n,
    ...f !== "" && {
      background: f
    },
    ...o != null && {
      gridTemplateColumns: o
    },
    ...a != null && {
      gridTemplateRows: a
    },
    ...e != null && {
      gridTemplateColumns: `repeat(auto-fit, minmax(min(100%,${e}), 1fr))`
    },
    ...l != null && { width: "100%" }
  }), [
    n,
    e,
    l,
    o,
    a,
    f
  ]);
  return T(
    s ?? "div",
    {
      ...x,
      style: {
        ...c != null && {
          ...c
        },
        ...C
      },
      "data-group": "grid",
      ...u != null && { "data-ratio": u },
      ...g != null && { "data-border": g },
      ...m != null && { "data-padding": m },
      ...p != null && { "data-m-auto": p }
    },
    d
  );
}, j = (t) => /* @__PURE__ */ $(b, { ...t, "data-stack": "" }), w = (t) => {
  const {
    children: d,
    as: s,
    gap: n = "0",
    size: e,
    ratio: u,
    DANGEROUS: c,
    direction: l,
    stretch: o,
    alignItems: a,
    justifyContent: r,
    wrap: i,
    border: g,
    padding: m,
    marginAuto: p,
    ...x
  } = t, f = h(() => ({
    gap: n,
    ...i != null && { flexWrap: i },
    ...e != null && { flex: `1 0 ${e}` },
    ...l != null && {
      flexDirection: l
    },
    ...o != null && {
      width: "100%",
      height: "100%"
    },
    ...a != null && {
      alignItems: a
    },
    ...r != null && {
      justifyContent: r
    }
  }), [
    n,
    e,
    o,
    a,
    l,
    r,
    i
  ]);
  return T(
    s ?? "div",
    {
      ...x,
      style: {
        ...c !== void 0 && {
          ...c
        },
        ...f
      },
      "data-group": "flex",
      ...u != null && { "data-ratio": u },
      ...g != null && { "data-border": g },
      ...m != null && { "data-padding": m },
      ...p != null && { "data-m-auto": p }
    },
    d
  );
}, k = (t) => /* @__PURE__ */ $(w, { ...t, wrap: "wrap", alignItems: "center", justifyContent: "center" }), v = (t) => /* @__PURE__ */ $(w, { ...t, direction: "column" }), A = {}, E = Object.assign(A, {
  Grid: b,
  Stack: j,
  Row: w,
  Col: v,
  Dos: k
});
export {
  E as default
};
