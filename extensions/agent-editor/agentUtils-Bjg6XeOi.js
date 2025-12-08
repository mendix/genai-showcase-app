function m() {
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
function p(t) {
  const e = t.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], r = t.userPrompt ? t.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], o = [...e, ...r];
  if (o.length === 0)
    return [];
  const s = o.map(
    (l) => l.replace(/\{\{|\}\}/g, "")
  ), n = [...new Set(s)], a = t.variables, i = n.map((l) => a.find((c) => c.key === l) || {
    key: l,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  });
  return u(i);
}
const b = (t) => t.map((e) => ({
  pattern: new RegExp("\\{\\{" + e.key + "\\}\\}", "g"),
  style: {
    color: e.borderColor,
    backgroundColor: e.backgroundColor,
    border: `1px solid ${e.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function u(t) {
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
  return t.map((r, o) => ({
    ...r,
    backgroundColor: e[o % e.length][0],
    borderColor: e[o % e.length][1]
  }));
}
const y = async (t, e) => {
  if (console.log(e.entity), !e.entity)
    return !0;
  const r = e.entity.split(".")[0], o = e.entity.split(".")[1], s = await t.app.model.domainModels.getDomainModel(r), n = s ? s.entities.find((a) => a.name === o) : null;
  return console.log(n, n != null), n != null;
};
export {
  p as a,
  b,
  m as c,
  y as i
};
//# sourceMappingURL=agentUtils-Bjg6XeOi.js.map
