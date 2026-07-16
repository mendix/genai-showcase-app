import { k as i, h as c, m as _, i as D } from "./documentInitUtils-CvQbsMH5.js";
const T = "agent-builder", r = {
  AGENT_DOCUMENT_CREATED: "agent_document_created",
  MODEL_DOCUMENT_CREATED: "model_document_created",
  CONSUMED_MCP_SERVICE_DOCUMENT_CREATED: "consumed_mcp_service_document_created",
  KNOWLEDGEBASE_DOCUMENT_CREATED: "knowledgebase_document_created",
  MODEL_PROVIDER_UPDATED: "model_provider_updated",
  MODEL_LIST_TRIGGERED: "model_list_triggered"
};
class u {
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
      }, E = Object.entries(n).reduce((s, [d, a]) => (s[d] = a === void 0 ? "null" : a, s), {});
      await this.studioProInternalApi.analytics.sendEvent({
        eventName: e,
        scope: T,
        eventData: E
      });
    } catch (n) {
      this.logger?.error(`Failed to send analytics event: ${e}`, n);
    }
  }
  getEventNameForDocumentType(e) {
    switch (e) {
      case D:
        return r.AGENT_DOCUMENT_CREATED;
      case _:
        return r.MODEL_DOCUMENT_CREATED;
      case c:
        return r.CONSUMED_MCP_SERVICE_DOCUMENT_CREATED;
      case i:
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
  async trackModelListTriggered(e, t) {
    await this.sendEvent(r.MODEL_LIST_TRIGGERED, { documentId: e, provider: t });
  }
  async trackModelProviderUpdated(e, t, n) {
    await this.sendEvent(r.MODEL_PROVIDER_UPDATED, { documentId: e, oldProvider: t, newProvider: n });
  }
}
function C(o, e, t) {
  return new u(o, e, t);
}
export {
  C as createAnalyticsService
};
