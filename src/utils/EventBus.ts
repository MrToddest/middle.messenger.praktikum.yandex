type Handler = (...args: unknown[]) => void;

class EventBus {
  private listeners: Record<string, Handler[]> = {};

  public on(event: string, callback: Handler): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: string, callback: Handler): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  public emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }
}

export default EventBus;
