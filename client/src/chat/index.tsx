import { useId, useState } from 'react'
import { io } from 'socket.io-client'
import { Message } from './message'

export const Chat = ({}) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const uuid = useId()

  const socket = io('http://localhost:8080')

  const handleSubmitNewMessage = () => {
    const date = new Date()
    socket.emit('message', {
      data: {
        message: message,
        uuid: uuid,
        sentAt: date
      }
    })
  }

  socket.on('message', ({ data }) => {
    messages.push(data)
  })

  return (
    <div className="min-w-[24rem] w-1/3 aspect-square bg-slate-600 overflow-hidden relative rounded-lg">
      <div className="h-[calc(100%-3rem)] p-4 overflow-x-auto">
        <Message is_who_sent={true} />
        <Message is_who_sent={false} />
        <Message is_who_sent={true} />
        <Message is_who_sent={false} />
        <Message is_who_sent={false} />
        <Message is_who_sent={true} />
        <Message is_who_sent={true} />
      </div>
      <div className=" absolute bottom-0 flex flex-row  justify-center gap-2 w-full">
        <textarea
          onChange={e => setMessage(e.target.value)}
          name=""
          id=""
          className="resize-none h-8 rounded-md pl-2 w-8/12 mb-2 placeholder:text-zinc-700 font-semibold text-lg text-zinc-900  bg-slate-400"
          placeholder="Mensagem"
        ></textarea>
        <button className="rounded-md w-auto h-8 w-16 mb-2 text-zinc-300 bg-slate-400 font-bold">
          Enviar
        </button>
      </div>
    </div>
  )
}
