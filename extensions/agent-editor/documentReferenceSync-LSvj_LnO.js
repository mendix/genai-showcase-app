import { P as h } from "./model-CWYqe9DA.js";
import { g as P } from "./index-CzTA92gH.js";
import { D as b, M as w, C as B } from "./studioPro-BAnarQ8w.js";
import { a as D } from "./toolUtils-MLHoVQt4.js";
import { k as g, h as p, m as y, i as r } from "./documentInitUtils-CvQbsMH5.js";
class C {
  studioPro;
  logger;
  constructor(t, e) {
    this.studioPro = t, this.logger = e;
  }
  registerListeners() {
    this.studioPro.app.projectChanges.addEventListener("documentAdded", async ({ document: t }) => {
      try {
        await this.handleDocumentAdded(t);
      } catch (e) {
        this.logger?.error("Failed to process documentAdded event", { error: e });
      }
    }), this.studioPro.app.projectChanges.addEventListener("documentsChanged", async ({ documents: t }) => {
      try {
        for (const e of t)
          await this.handleDocumentChanged(e);
      } catch (e) {
        this.logger?.error("Failed to process documentsChanged event", { error: e });
      }
    });
  }
  async handleDocumentChanged(t) {
    if (!t.documentType || !t.moduleName)
      return;
    const e = /* @__PURE__ */ new Map();
    let o;
    switch (t.documentType) {
      case b:
        o = await this.collectEntityDependents(t.moduleName, e);
        break;
      default:
        return;
    }
    await this.confirmAndApplyUpdates(e, o);
  }
  async handleDocumentAdded(t) {
    if (!t.documentType || !t.documentName || !t.moduleName)
      return;
    const e = `${t.moduleName}.${t.documentName}`, o = /* @__PURE__ */ new Map();
    switch (t.documentType) {
      case B:
        await this.collectConstantDependents(e, t.documentId, o);
        break;
      case w:
        await this.collectMicroflowDependents(e, t.documentId, o);
        break;
      case y:
        await this.collectModelDependents(e, t.documentId, o);
        break;
      case p:
        await this.collectConsumedMCPServiceDependents(e, t.documentId, o);
        break;
      case g:
        await this.collectKnowledgebaseDependents(e, t.documentId, o);
        break;
      default:
        return;
    }
    await this.confirmAndApplyUpdates(o, e);
  }
  async confirmAndApplyUpdates(t, e) {
    if (!(t.size === 0 || !e || !await this.studioPro.ui.messageBoxes.ask({
      type: "warning",
      question: this.buildConfirmationMessage(t, e)
    })))
      for (const { customBlobDocument: c } of t.values())
        try {
          await this.studioPro.app.model.customBlobDocuments.updateDocumentContent(
            c.$ID,
            c.contents
          );
        } catch (m) {
          this.logger?.error(`Failed to update document ${c.$ID}`, { error: m });
        }
  }
  /**
   * A dependency is considered dangling (and eligible for re-linking) when it points at the
   * same qualified name as the newly added document, but at a different documentId.
   */
  isStale(t, e, o) {
    return !!t && t.qualifiedName === e && t.documentId !== o;
  }
  stageUpdate(t, e, o, c, m) {
    o.documentId = c;
    const s = t.get(e.$ID);
    s ? s.descriptions.push(m) : t.set(e.$ID, { customBlobDocument: e, descriptions: [m] });
  }
  buildConfirmationMessage(t, e) {
    const o = [...t.values()].flatMap((c) => c.descriptions).map((c) => `- ${c}`).join(`
`);
    return `There are existing usages of '${e}'. Do you want to update them?
${o}`;
  }
  async collectEntityDependents(t, e) {
    let o;
    const c = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), m = await Promise.all(
      c.map((s) => this.studioPro.app.model.customBlobDocuments.getDocumentById(s.id))
    );
    for (const s of m)
      if ("document" in s && s.document) {
        const a = s.document, n = a.contents.entity;
        if (!n || !n.qualifiedName.startsWith(`${t}.`))
          continue;
        const d = await P(this.studioPro, n.qualifiedName);
        d && this.isStale(n, d.$QualifiedName, d.$ID) && (o || (o = d.$QualifiedName), this.stageUpdate(
          e,
          a,
          n,
          d.$ID,
          `Agent '${a.name}': Context entity`
        ));
      }
    return o;
  }
  async collectConstantDependents(t, e, o) {
    const c = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(y), m = await Promise.all(
      c.map((i) => this.studioPro.app.model.customBlobDocuments.getDocumentById(i.id))
    );
    for (const i of m)
      if ("document" in i && i.document) {
        const u = i.document;
        if (u.contents.provider === h.MxCloudGenAI) {
          const l = u.contents.providerFields;
          this.isStale(l.key, t, e) && this.stageUpdate(
            o,
            u,
            l.key,
            e,
            `Model '${u.name}': Key`
          );
        }
      }
    const s = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(
      p
    ), a = await Promise.all(
      s.map(
        (i) => this.studioPro.app.model.customBlobDocuments.getDocumentById(i.id)
      )
    );
    for (const i of a)
      if ("document" in i && i.document) {
        const u = i.document;
        this.isStale(u.contents.endpoint, t, e) && this.stageUpdate(
          o,
          u,
          u.contents.endpoint,
          e,
          `Consumed MCP service '${u.name}': Endpoint`
        );
      }
    const n = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(g), d = await Promise.all(
      n.map(
        (i) => this.studioPro.app.model.customBlobDocuments.getDocumentById(i.id)
      )
    );
    for (const i of d)
      if ("document" in i && i.document) {
        const u = i.document;
        if (u.contents.provider === h.MxCloudGenAI) {
          const l = u.contents.providerFields;
          this.isStale(l.key, t, e) && this.stageUpdate(
            o,
            u,
            l.key,
            e,
            `Knowledge base '${u.name}': Key`
          );
        }
      }
  }
  async collectMicroflowDependents(t, e, o) {
    const c = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(
      p
    ), m = await Promise.all(
      c.map(
        (n) => this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id)
      )
    );
    for (const n of m)
      if ("document" in n && n.document) {
        const d = n.document;
        this.isStale(d.contents.authenticationMicroflow, t, e) && this.stageUpdate(
          o,
          d,
          d.contents.authenticationMicroflow,
          e,
          `Consumed MCP service '${d.name}': Credentials microflow`
        );
      }
    const s = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), a = await Promise.all(
      s.map((n) => this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id))
    );
    for (const n of a)
      if ("document" in n && n.document) {
        const d = n.document;
        for (const i of d.contents.tools)
          i.toolType === D.Microflow && this.isStale(i.document, t, e) && this.stageUpdate(
            o,
            d,
            i.document,
            e,
            `Agent '${d.name}': Microflow tool`
          );
      }
  }
  async collectModelDependents(t, e, o) {
    const c = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), m = await Promise.all(
      c.map((s) => this.studioPro.app.model.customBlobDocuments.getDocumentById(s.id))
    );
    for (const s of m)
      if ("document" in s && s.document) {
        const a = s.document;
        this.isStale(a.contents.model, t, e) && this.stageUpdate(
          o,
          a,
          a.contents.model,
          e,
          `Agent '${a.name}': Model`
        );
      }
  }
  async collectConsumedMCPServiceDependents(t, e, o) {
    const c = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), m = await Promise.all(
      c.map((s) => this.studioPro.app.model.customBlobDocuments.getDocumentById(s.id))
    );
    for (const s of m)
      if ("document" in s && s.document) {
        const a = s.document;
        for (const n of a.contents.tools)
          n.toolType === D.MCP && this.isStale(n.document, t, e) && this.stageUpdate(
            o,
            a,
            n.document,
            e,
            `Agent '${a.name}': MCP tool`
          );
      }
  }
  async collectKnowledgebaseDependents(t, e, o) {
    const c = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(r), m = await Promise.all(
      c.map((s) => this.studioPro.app.model.customBlobDocuments.getDocumentById(s.id))
    );
    for (const s of m)
      if ("document" in s && s.document) {
        const a = s.document;
        for (const n of a.contents.knowledgebaseTools)
          this.isStale(n.document, t, e) && this.stageUpdate(
            o,
            a,
            n.document,
            e,
            `Agent '${a.name}': Knowledge base`
          );
      }
  }
}
function I(f, t) {
  return new C(f, t);
}
export {
  I as createDocumentReferenceSyncService
};
