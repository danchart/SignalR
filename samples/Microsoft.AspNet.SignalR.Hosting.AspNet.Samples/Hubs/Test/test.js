function PrintState(state) {
    if (state == 0)
        return "connecting";
    if (state == 1)
        return "connected";
    if (state == 2)
        return "reconnecting";
    if (state == 4)
        return "disconnected";
}

function incrementLabel(id) {
    var value = parseInt($(id).text()) + 1;
    $(id).text(value);
    return value;
}
