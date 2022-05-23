export class MemoryQueue<T> {

  private queue: T[] = []

  flush(): T[] {
    let queue = this.queue
    this.queue = []
    return queue
  }

  push(...values: T[]) {
    this.queue.push(...values)
  }
}

export class LocalStorageQueue<T> {

  private readonly key: string

  constructor(key: string) {
    this.key = key
  }

  flush(): T[] {
    let queue = this.get()
    if (queue.length) {
      this.set([])
    }

    return queue
  }

  push(...values: T[]) {
    let queue = this.get()
    queue.push(...values)
    this.set(queue)
  }

  private set(queue: T[]) {
    localStorage.setItem(this.key, JSON.stringify(queue))
  }

  private get(): T[] {
    const data = localStorage.getItem(this.key)
    if (data !== null && data !== "") {
      return JSON.parse(data)
    }

    return []
  }
}