package com.stolpe;

import java.util.*;

public class Command {
    private String value = null;
    private String command = null;
    private List<String> logs = new ArrayList<>();
    private List<String> errors = new ArrayList<>();

    private int newEnter = 0;

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public List<String> getLogs() {
        return logs;
    }

    public void setLogs(List<String> logs) {
        this.logs = logs;
    }

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public int getNewEnter() {
        return newEnter;
    }

    public void setNewEnter(int isEnter) {
        this.newEnter = isEnter;
    }
}
