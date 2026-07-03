import { k as s, h as a, m as c, i } from "./documentInitUtils-CLdpbIQ7.js";
const d = "agent-builder", r = {
  AGENT_DOCUMENT_CREATED: "agent_document_created",
  MODEL_DOCUMENT_CREATED: "model_document_created",
  CONSUMED_MCP_SERVICE_DOCUMENT_CREATED: "consumed_mcp_service_document_created",
  KNOWLEDGEBASE_DOCUMENT_CREATED: "knowledgebase_document_created"
};
class _ {
  studioProInternalApi;
  logger;
  agentEditorVersion;
  constructor(e, t, n) {
    this.studioProInternalApi = e, this.agentEditorVersion = t, this.logger = n;
  }
  async sendEvent(e, t) {
    try {
      const n = {
        ...t || {},
        agentEditorVersion: this.agentEditorVersion
      };
      await this.studioProInternalApi.analytics.sendEvent({
        eventName: e,
        scope: d,
        eventData: n
      });
    } catch (n) {
      this.logger?.error(`Failed to send analytics event: ${e}`, n);
    }
  }
  getEventNameForDocumentType(e) {
    switch (e) {
      case i:
        return r.AGENT_DOCUMENT_CREATED;
      case c:
        return r.MODEL_DOCUMENT_CREATED;
      case a:
        return r.CONSUMED_MCP_SERVICE_DOCUMENT_CREATED;
      case s:
        return r.KNOWLEDGEBASE_DOCUMENT_CREATED;
      default:
        return null;
    }
  }
  registerDocumentCreationListener(e) {
    e.app.projectChanges.addEventListener("documentAdded", async ({ document: t }) => {
      const { documentType: n } = t, E = this.getEventNameForDocumentType(n);
      E && await this.sendEvent(E);
    });
  }
}
function u(o, e, t) {
  return new _(o, e, t);
}
export {
  u as createAnalyticsService
};
