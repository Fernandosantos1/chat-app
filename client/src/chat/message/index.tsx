interface MessageProps {
  is_who_sent: boolean
}

export const Message = ({ is_who_sent }: MessageProps) => {
  switch (is_who_sent) {
    case true:
      return (
        <div className="min-h-10 h-auto w-full flex justify-end my-2 text-zinc-50">
          <div className="max-w-10/12 text-right bg-sky-600 p-2 rounded-xl">
            dsdasdasd
          </div>
        </div>
      )
    case false:
      return (
        <div className="min-h-10 h-auto w-full flex justify-start my-2 text-zinc-50">
          <div className="max-w-[80%] w-fit bg-sky-700 p-2 rounded-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            consectetur quaerat, id aliquam fugiat adipisci ipsum! Libero aut
            ducimus laborum nostrum tempore ullam, reprehenderit placeat
            laudantium officia dolor est fugiat?
          </div>
        </div>
      )
    default:
      return <></>
  }
}
