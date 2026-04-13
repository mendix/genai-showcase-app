import { c as m } from "./index-DkFXQr22.js";
const d = async (t, e, i, s) => {
  const r = i.knowledgebaseTools, a = i.tools;
  switch (t) {
    case "name":
      if (!e.name || e.name.trim() === "")
        return "Knowledge base name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name))
        return "Knowledge base name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (e.name.length > 64)
        return "Knowledge base name cannot exceed 64 characters.";
      if (r && r.some((n) => n.name === e.name && n.id !== e.id))
        return "Knowledge base name must be unique.";
      if (a && a.some((n) => n.name === e.name && n.id !== e.id))
        return "This name must be unique. This name is already used for a tool of this agent, please choose a different name.";
      break;
    case "description":
      if (!e.description || e.description.trim() === "")
        return "Knowledge base description cannot be empty.";
      if (e.description.length > 4096)
        return "Knowledge base description cannot exceed 4096 characters.";
      break;
    case "document": {
      if (!e.document || !e.document.qualifiedName)
        return "Knowledge base document must be selected.";
      const n = await m(s, e.document);
      if (!n)
        return "Knowledge base document does not exist.";
      if (n.excluded)
        return "Knowledge base document is excluded.";
      break;
    }
    case "collectionIdentifier":
      if (!e.collectionIdentifier || e.collectionIdentifier.trim() === "")
        return "Collection identifier cannot be empty.";
      if (e.collectionIdentifier.length > 200)
        return "Collection identifier cannot exceed 200 characters.";
      break;
    case "maxResults":
      if (e.maxResults !== void 0 && e.maxResults !== null) {
        if (!Number.isInteger(e.maxResults))
          return "Max results must be a whole number.";
        if (e.maxResults < 1)
          return "Max results must be a valid number (1 or higher).";
      }
      break;
    case "minSimilarity":
      if (e.minSimilarity !== void 0 && e.minSimilarity !== null) {
        if (!Number.isFinite(e.minSimilarity))
          return "Min similarity must be a valid number.";
        if (e.minSimilarity < 0 || e.minSimilarity > 1)
          return "Min similarity must be between 0 and 1.";
      }
      break;
    default:
      return !0;
  }
  return !0;
};
export {
  d as h
};
