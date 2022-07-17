package com.stolpe;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.*;

@WebServlet("/Calculate")
public class CalculatorProcessor extends HttpServlet {
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final CommandInterpreter commandInterpreter = new CommandInterpreter();
    static {
        try {
            System.loadLibrary("javagiac");
        } catch (UnsatisfiedLinkError e) {
            System.err.println("Native code library failed to load.\n" + e);
        }
    }

    public void init() {
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        Reader reader = request.getReader();
        Command command = objectMapper.readValue(reader, Command.class);
        Command result = commandInterpreter.processCommand(command);
        response.setContentType("application/json");
        objectMapper.writeValue(response.getWriter(), result);
    }

}
