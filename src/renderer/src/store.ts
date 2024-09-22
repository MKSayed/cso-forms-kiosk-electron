import { create } from 'zustand'

const meiBillAcceptorStore = (set: any, get: any) => ({
  socket: null as WebSocket | null, // A variable to hold the WebSocket object when crated

  connect: (url) => {
    const socket = new WebSocket(url)

    // Initial event handlers
    socket.onmessage = (event) => console.log(`WebSocket message: `, event.data)

    socket.onerror = (error) => console.error('WebSocket error:', error)

    socket.onclose = () => {
      console.log('WebSocket closed, attempting to reconnect...')
      const { connect } = get() // Get the connect function of the store
      connect(url) // Attempt to reconnect when ever the websocket is closed
    }

    set({ socket }) // Set the socket variable of the store to be the newly created WebSocket Object
  },
  disconnect: () => {
    const { socket } = get()
    if (socket) {
      socket.close()
      set({ socket: null })
    }
  },
  // Set custom socket event handlers
  setOnOpen: (onOpenHandler) => {
    const { socket } = get()
    if (socket) {
      socket.onopen = onOpenHandler
    }
  },

  setOnError: (onErrorHandler) => {
    const { socket } = get()
    if (socket) {
      socket.onerror = onErrorHandler
    }
  },

  setOnClose: (onCloseHandler) => {
    const { socket } = get()
    if (socket) {
      socket.onclose = onCloseHandler
    }
  },

  setOnMessage: (onMessageHandler) => {
    const { socket } = get()
    if (socket) {
      socket.onmessage = onMessageHandler
    }
  }
})

export const useMeiBillAcceptorStore = create(meiBillAcceptorStore)
