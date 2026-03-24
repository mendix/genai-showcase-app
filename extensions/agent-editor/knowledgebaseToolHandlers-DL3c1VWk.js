import { q as m } from "./index-CQcFpK0H.js";
import { g as u } from "./toolHandlers-Boy31O5Y.js";
const o = async (r, e, i, s) => {
  const a = i.knowledgebaseTools, t = i.tools;
  switch (r) {
    case "name":
      if (!e.name || e.name.trim() === "")
        return "Knowledge base name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name))
        return "Knowledge base name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (e.name.length > 64)
        return "Knowledge base name cannot exceed 64 characters.";
      if (a && a.some((n) => n.name === e.name && n.id !== e.id))
        return "Knowledge base name must be unique.";
      if (t && t.some((n) => n.name === e.name && n.id !== e.id))
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
      if (!await u(
        s,
        e.document.qualifiedName,
        m
      ))
        return "Knowledge base document does not exist.";
      break;
    }
    case "collectionIdentifier":
      if (!e.collectionIdentifier || e.collectionIdentifier.trim() === "")
        return "Collection identifier cannot be empty.";
      if (e.collectionIdentifier.length > 2048)
        return "Collection identifier cannot exceed 2048 characters.";
      break;
    case "maxResults":
      if (!Number.isInteger(e.maxResults))
        return "Max results must be a whole number.";
      if (e.maxResults < 1 || e.maxResults > 100)
        return "Max results must be between 1 and 100.";
      break;
    case "minSimilarity":
      if (!Number.isFinite(e.minSimilarity))
        return "Min similarity must be a valid number.";
      if (e.minSimilarity < 0 || e.minSimilarity > 1)
        return "Min similarity must be between 0 and 1.";
      break;
    default:
      return !0;
  }
  return !0;
};
export {
  o as h
};
//# sourceMappingURL=knowledgebaseToolHandlers-DL3c1VWk.js.map
