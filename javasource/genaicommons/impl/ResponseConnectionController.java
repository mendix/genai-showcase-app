package genaicommons.impl;

import java.io.IOException;
import java.io.OutputStream;
import java.util.Base64;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class ResponseConnectionController {

    private static ResponseConnectionController instance = new ResponseConnectionController();
    private static Map<String, StreamingResponseWriter> writers = new ConcurrentHashMap<String, StreamingResponseWriter>();

    public static ResponseConnectionController getInstance() {
        return instance;
    }

    public boolean addStreamingResponseWriter(String id, StreamingResponseWriter writer) {
        return writers.put(id, writer) == null;
    }

    public boolean removeStreamingResponseWriter(String id) {
        return writers.remove(id) != null;
    }

    public StreamingResponseWriter getStreamingResponseWriter(String id) {
        return writers.get(id);
    }

    public static class StreamingResponseWriter {
        private final OutputStream outputStream;

        public StreamingResponseWriter(OutputStream outputStream) {
            this.outputStream = outputStream;
        }

        public void write(byte[] data, boolean deleteContent) throws IOException {
 
	        outputStream.write("data: ".getBytes());
            outputStream.write(Base64.getEncoder().encode(data));
            outputStream.write("\n\n".getBytes());
            outputStream.flush();
        }
        
        public void clearContent() throws IOException {
        	outputStream.write(("deleteContent: true").getBytes());
        	outputStream.write("\n\n".getBytes());
            outputStream.flush();
        }
        
        public void throwError() throws IOException {
        	outputStream.write(("throwError: true").getBytes());
        	outputStream.write("\n\n".getBytes());
            outputStream.flush();
        }
    }

}
