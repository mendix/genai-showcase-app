const u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADFElEQVRYCe1WzW7TQBCeTVLoj5Ec0d7NG7RPQPoGFuVAEVJboaKemvQJ2jxBXU6IgupeaA608hvEPEHzBvhOpEYiIYjGWb5xbNeGtWP1hshK9s7OfvPj2ZnxEs3GLAL/ewRE0QCYZkMvLf6oCylrkOFHNTpS0MnVp1NbtaniFXLAfLFnlIXfhgJDpUTB8+Zkeb3Veucp9lKsQg5sbO5+hZRBJDwhxzujn1rHcaxeShMWG5uvTaLyMZEEljx/eLvmOPZfuKRcKblQ0c9e7m6Db7Bxf7i49rn1wVUZZ9nLi4+O//DXGmOxNCqLDxrMzxtTHQCgHio4yDKcNODYdo+jxDwp5dPknoqe6oCUtMqClxfvHZUCFW80P+qE/JpqP8mrJBdMF8z2QGy53pdMaOK26lnVXsDEi6OAvImWuXPKgUm2D9ok+czzx3Ljew24YPSpwlFyJ6v0G44wKrM8U0dwV2qc7XLdHy5VLy9OBT9ptUgzElsxT4rDmFYTq0LSGVfTC5R0EhIr5mxnUJTteQm3vD84JCGPkGYIe6BCJymOum+XmknlEZ1XnnEEpmW70ZA6hx3n3p4Yh3ohmkLQQWAIDq3U+2fB0USWwzmvPGMHpmV7Xw5u8JVt6Kzxl6Pl7nQtzfpmaTaCwE70JNE2Y6LkDO0HU1Z5xg4kwdNpZACRHuHkuHwDp6Jl5qwqz8IOdE80WJXrQozPYQFnTseP94dbK/v4QQnfxnno8MpljCaWqiovOAp/8lNlyJumua1n9e+u9cgFxMU5ewj1IQxbMvhyxEPIJvaPsE9dfhUcyQi4LFPR5rmmc0doyAUIxyB0mLcj43mCk2oAQlAnwsUOoO6/MFP6/hlHIQJkzvjiaE8KeR7RWTN3WKIS/pSwMaaTCBc7gASx4JqHDaO8MHe9sfnGjECqeURxv6fwaFSwoLU/f7VXKy8Mrlk327hq3V1YRFJq0orHKLXgf57cStGqzsiAsO2msOmFwEWllLqoxBFgoIMbDP56T9ATdtBgOmnh+6/wlS6OuMn3iSK3pPtbmknOIvAvRuA3fQBEYKnukL0AAAAASUVORK5CYII=";
function p() {
  return {
    modelDocumentUUID: crypto.randomUUID(),
    description: "",
    entity: "",
    systemPrompt: "",
    userPrompt: "",
    usageType: "Task",
    variables: [],
    tools: []
  };
}
function E(A) {
  const e = A.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], t = A.userPrompt ? A.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], o = [...e, ...t];
  if (o.length === 0)
    return [];
  const r = o.map(
    (l) => l.replace(/\{\{|\}\}/g, "")
  ), n = [...new Set(r)], s = A.variables, a = n.map((l) => s.find((i) => i.key === l) || {
    key: l,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  });
  return c(a);
}
const d = (A) => A.map((e) => ({
  pattern: new RegExp("\\{\\{" + e.key + "\\}\\}", "g"),
  style: {
    color: e.borderColor,
    backgroundColor: e.backgroundColor,
    border: `1px solid ${e.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function c(A) {
  const e = [
    ["#DCEEFE", "#0123C6"],
    // Blue
    ["#E2E0FC", "#4701D4"],
    // Purple
    ["#F7E0FF", "#780194"],
    // Violet
    ["#FFE5E9", "#9E051B"],
    // Red
    ["#FFF2CF", "#803600"],
    // Yellow
    ["#E1FAE1", "#076407"]
    // Green
  ];
  return A.map((t, o) => ({
    ...t,
    backgroundColor: e[o % e.length][0],
    borderColor: e[o % e.length][1]
  }));
}
const g = async (A, e) => {
  if (console.log(e.entity), !e.entity)
    return !0;
  const t = e.entity.split(".")[0], o = e.entity.split(".")[1], r = await A.app.model.domainModels.getDomainModel(t), n = r ? r.entities.find((s) => s.name === o) : null;
  return console.log(n, n != null), n != null;
};
export {
  p as a,
  d as b,
  E as c,
  g as i,
  u as m
};
//# sourceMappingURL=agentUtils-DWFrOytf.js.map
