export default class websocket{

  constructor(socket) {
    this.socket = socket;
  }

  close(quick_object) {
    this.socket.close(quick_object);
  }
  send(quick_object) {
    this.socket.send(quick_object);
  }
  set onopen(quick_object) {
    this.socket.onOpen(quick_object);
  }
  set onmessage(quick_object) {
    this.socket.onMessage(quick_object);
  }

  set onclose(quick_object) {

    this.socket.onClose(function(res) {
      res['wasClean'] = res.reason == "normal closure";
      quick_object(res);
    });
  }
  
  set onerror(quick_object) {
    this.socket.onError(quick_object);
  }

}