import { k as a, g as s, m as d, h as c } from "./documentInitUtils-Bwe4f_Cu.js";
const i = "agent-builder", r = {
  AGENT_DOCUMENT_CREATED: "agent_document_created",
  MODEL_DOCUMENT_CREATED: "model_document_created",
  CONSUMED_MCP_SERVICE_DOCUMENT_CREATED: "consumed_mcp_service_document_created",
  KNOWLEDGEBASE_DOCUMENT_CREATED: "knowledgebase_document_created",
  MODEL_PROVIDER_UPDATED: "model_provider_updated",
  MODEL_LIST_TRIGGERED: "model_list_triggered"
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
        scope: i,
        eventData: n
      });
    } catch (n) {
      this.logger?.error(`Failed to send analytics event: ${e}`, n);
    }
  }
  getEventNameForDocumentType(e) {
    switch (e) {
      case c:
        return r.AGENT_DOCUMENT_CREATED;
      case d:
        return r.MODEL_DOCUMENT_CREATED;
      case s:
        return r.CONSUMED_MCP_SERVICE_DOCUMENT_CREATED;
      case a:
        return r.KNOWLEDGEBASE_DOCUMENT_CREATED;
      default:
        return null;
    }
  }
  registerDocumentCreationListener(e) {
    e.app.projectChanges.addEventListener("documentAdded", async ({ document: t }) => {
      const { documentType: n } = t, o = this.getEventNameForDocumentType(n);
      o && await this.sendEvent(o);
    });
  }
  async trackModelListTriggered(e, t) {
    await this.sendEvent(r.MODEL_LIST_TRIGGERED, { documentId: e, provider: t });
  }
  async trackModelProviderUpdated(e, t, n) {
    await this.sendEvent(r.MODEL_PROVIDER_UPDATED, { documentId: e, oldProvider: t, newProvider: n });
  }
}
function T(E, e, t) {
  return new _(E, e, t);
}
export {
  T as createAnalyticsService
};
