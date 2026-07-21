import { M as p } from "./model-BfOPpq4a.js";
import { g as P } from "./index-DNoCduqT.js";
import { D as b, M as w, C as B } from "./studioPro-BAnarQ8w.js";
import { a as g } from "./toolUtils-MLHoVQt4.js";
import { l as D, k as f, m as y, n as r } from "./documentInitUtils-DoIciLyT.js";
class M {
  studioPro;
  logger;
  constructor(e, t) {
    this.studioPro = e, this.logger = t;
  }
  registerListeners() {
    this.studioPro.app.projectChanges.addEventListener("documentAdded", async ({ document: e }) => {
      try {
        await this.handleDocumentAdded(e);
      } catch (t) {
        this.logger?.error("Failed to process documentAdded event", { error: t });
      }
    }), this.studioPro.app.projectChanges.addEventListener("documentsChanged", async ({ documents: e }) => {
      try {
        for (const t of e)
          await this.handleDocumentChanged(t);
      } catch (t) {
        this.logger?.error("Failed to process documentsChanged event", { error: t });
      }
    });
  }
  async handleDocumentChanged(e) {
    if (!e.documentType || !e.moduleName)
      return;
    const t = /* @__PURE__ */ new Map();
    let o;
    switch (e.documentType) {
      case b:
        o = await this.collectEntityDependents(e.moduleName, t);
        break;
      default:
        return;
    }
    await this.confirmAndApplyUpdates(t, o);
  }
  async handleDocumentAdded(e) {
    if (!e.documentType || !e.documentName || !e.moduleName)
      return;
    const t = `${e.moduleName}.${e.documentName}`, o = /* @__PURE__ */ new Map();
    switch (e.documentType) {
      case B:
        await this.collectConstantDependents(t, e.documentId, o);
        break;
      case w:
        await this.collectMicroflowDependents(t, e.documentId, o);
        break;
      case y:
        await this.collectModelDependents(t, e.documentId, o);
        break;
      case f:
        await this.collectConsumedMCPServiceDependents(t, e.documentId, o);
        break;
      case D:
        await this.collectKnowledgebaseDependents(t, e.documentId, o);
        break;
      default:
        return;
    }
    await this.confirmAndApplyUpdates(o, t);
  }
  async confirmAndApplyUpdates(e, t) {
    if (!(e.size === 0 || !t || !await this.studioPro.ui.messageBoxes.ask({
      type: "warning",
      question: this.buildConfirmationMessage(e, t)
    })))
      for (const { customBlobDocument: i } of e.values())
        try {
          await this.studioPro.app.model.customBlobDocuments.updateDocumentContent(
            i.$ID,
            i.contents
          );
        } catch (m) {
          this.logger?.error(`Failed to update document ${i.$ID}`, { error: m });
        }
  }
  /**
   * A dependency is considered dangling (and eligible for re-linking) when it points at the
   * same qualified name as the newly added document, but at a different documentId.
   */
  isStale(e, t, o) {
    return !!e && e.qualifiedName === t && e.documentId !== o;
  }
  stageUpdate(e, t, o, i, m) {
    o.documentId = i;
    const s = e.get(t.$ID);
    s ? s.descriptions.push(m) : e.set(t.$ID, { customBlobDocument: t, descriptions: [m] });
  }
  buildConfirmationMessage(e, t) {
    const o = [...e.values()].flatMap((i) => i.descriptions).map((i) => `- ${i}`).join(`
`);
    return `There are existing usages of '${t}'. Do you want to update them?
${o}`;
  }
  async collectEntityDependents(e, t) {
    let o;
    const i = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), m = await Promise.all(
      i.map((s) => this.studioPro.app.model.customBlobDocuments.getDocumentById(s.id))
    );
    for (const s of m)
      if ("document" in s && s.document) {
        const a = s.document, n = a.contents.entity;
        if (!n || !n.qualifiedName.startsWith(`${e}.`))
          continue;
        const l = await P(this.studioPro, n.qualifiedName);
        l && this.isStale(n, l.$QualifiedName, l.$ID) && (o || (o = l.$QualifiedName), this.stageUpdate(
          t,
          a,
          n,
          l.$ID,
          `Agent '${a.name}': Context entity`
        ));
      }
    return o;
  }
  async collectConstantDependents(e, t, o) {
    const i = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(y), m = await Promise.all(
      i.map((c) => this.studioPro.app.model.customBlobDocuments.getDocumentById(c.id))
    );
    for (const c of m)
      if ("document" in c && c.document) {
        const d = c.document;
        if (d.contents.provider === p.MxCloudGenAI) {
          const u = d.contents.providerFields;
          this.isStale(u.key, e, t) && this.stageUpdate(
            o,
            d,
            u.key,
            t,
            `Model '${d.name}': Key`
          );
        }
        if (d.contents.provider === p.Azure) {
          const u = d.contents.providerFields;
          this.isStale(u.key, e, t) && this.stageUpdate(
            o,
            d,
            u.key,
            t,
            `Model '${d.name}': API key`
          ), this.isStale(u.endpoint, e, t) && this.stageUpdate(
            o,
            d,
            u.endpoint,
            t,
            `Model '${d.name}': Project endpoint`
          );
        }
      }
    const s = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(
      f
    ), a = await Promise.all(
      s.map(
        (c) => this.studioPro.app.model.customBlobDocuments.getDocumentById(c.id)
      )
    );
    for (const c of a)
      if ("document" in c && c.document) {
        const d = c.document;
        this.isStale(d.contents.endpoint, e, t) && this.stageUpdate(
          o,
          d,
          d.contents.endpoint,
          t,
          `Consumed MCP service '${d.name}': Endpoint`
        );
      }
    const n = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(D), l = await Promise.all(
      n.map(
        (c) => this.studioPro.app.model.customBlobDocuments.getDocumentById(c.id)
      )
    );
    for (const c of l)
      if ("document" in c && c.document) {
        const d = c.document;
        if (d.contents.provider === p.MxCloudGenAI) {
          const u = d.contents.providerFields;
          this.isStale(u.key, e, t) && this.stageUpdate(
            o,
            d,
            u.key,
            t,
            `Knowledge base '${d.name}': Key`
          );
        }
      }
  }
  async collectMicroflowDependents(e, t, o) {
    const i = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(
      f
    ), m = await Promise.all(
      i.map(
        (n) => this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id)
      )
    );
    for (const n of m)
      if ("document" in n && n.document) {
        const l = n.document;
        this.isStale(l.contents.authenticationMicroflow, e, t) && this.stageUpdate(
          o,
          l,
          l.contents.authenticationMicroflow,
          t,
          `Consumed MCP service '${l.name}': Credentials microflow`
        );
      }
    const s = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), a = await Promise.all(
      s.map((n) => this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id))
    );
    for (const n of a)
      if ("document" in n && n.document) {
        const l = n.document;
        for (const c of l.contents.tools)
          c.toolType === g.Microflow && this.isStale(c.document, e, t) && this.stageUpdate(
            o,
            l,
            c.document,
            t,
            `Agent '${l.name}': Microflow tool`
          );
      }
  }
  async collectModelDependents(e, t, o) {
    const i = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), m = await Promise.all(
      i.map((s) => this.studioPro.app.model.customBlobDocuments.getDocumentById(s.id))
    );
    for (const s of m)
      if ("document" in s && s.document) {
        const a = s.document;
        this.isStale(a.contents.model, e, t) && this.stageUpdate(
          o,
          a,
          a.contents.model,
          t,
          `Agent '${a.name}': Model`
        );
      }
  }
  async collectConsumedMCPServiceDependents(e, t, o) {
    const i = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), m = await Promise.all(
      i.map((s) => this.studioPro.app.model.customBlobDocuments.getDocumentById(s.id))
    );
    for (const s of m)
      if ("document" in s && s.document) {
        const a = s.document;
        for (const n of a.contents.tools)
          n.toolType === g.MCP && this.isStale(n.document, e, t) && this.stageUpdate(
            o,
            a,
            n.document,
            t,
            `Agent '${a.name}': MCP tool`
          );
      }
  }
  async collectKnowledgebaseDependents(e, t, o) {
    const i = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), m = await Promise.all(
      i.map((s) => this.studioPro.app.model.customBlobDocuments.getDocumentById(s.id))
    );
    for (const s of m)
      if ("document" in s && s.document) {
        const a = s.document;
        for (const n of a.contents.knowledgebaseTools)
          this.isStale(n.document, e, t) && this.stageUpdate(
            o,
            a,
            n.document,
            t,
            `Agent '${a.name}': Knowledge base`
          );
      }
  }
}
function S(h, e) {
  return new M(h, e);
}
export {
  S as createDocumentReferenceSyncService
};
