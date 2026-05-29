package agenteditorcommons.impl;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;

/**
 * A development servlet registered at /dev/preview_agent_sync that handles agent sync requests.
 * Re-imports all agent editor documents from the Mendix model into the app's database.
 *
 * Register it at app startup with:
 *   Core.addDevelopmentServlet("preview_agent_sync", new AgentEditorSyncServlet())
 *
 * POST /dev/preview_agent_sync
 * Response: Empty JSON object.
 */
public class AgentEditorSyncServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private static final MxLogger LOGGER = new MxLogger(AgentEditorSyncServlet.class);
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        try {
            IContext context = Core.createSystemContext();

            AgentDocumentUtils.importAllModelDocuments(context);

            LOGGER.debug("Sync completed successfully.");
            resp.setStatus(HttpServletResponse.SC_OK);
            resp.getWriter().write(OBJECT_MAPPER.writeValueAsString(Map.of()));
        } catch (Exception e) {
            LOGGER.error("Sync failed: ", e);
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            resp.getWriter().write(OBJECT_MAPPER.writeValueAsString(
                    Map.of("status", "error", "message", "Sync failed. Check the runtime logs for details.")));
        }
    }
}
