document.addEventListener("alpine:init", () => {
  Alpine.data("app", () => ({
    msg: "Alpine Hello",
    toster: toster,
  }));
});

// toster component

const toster = {
  tosts: [],
  setMessage(type, icon, message) {
    const now = Date.now();
    this.tosts.push({
      timestamp: now,
      icon: icon,
      type: type,
      message: message,
    });

    setTimeout(() => {
      const tosts = this.tosts.filter((t) => {
        return t.timestamp !== now;
      });
      this.tosts = tosts;
    }, 5000);
  },
  success(message) {
    this.setMessage("success", "fa fa-check-circle-o", message);
  },
  error(message) {
    this.setMessage("error", "fa fa-times-circle-o", message);
  },
  info(message) {
    this.setMessage("info", "fa fa-info-circle", message);
  },
  warning(message) {
    this.setMessage("warning", "fa fa-exclamation-triangle", message);
  },
};
