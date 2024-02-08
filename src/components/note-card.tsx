export function NoteCard() {
  return (
    <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
      <span className="text-sm font-medium text-slate-200">Há 2 dias</span>

      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id illum
        explicabo ipsum in mollitia excepturi enim, necessitatibus fugiat
        reprehenderit quam sed hic praesentium natus adipisci, dolorem vero et
        amet quae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Unde quo eum asperiores quaerat magni, distinctio, consequuntur pariatur
        alias harum iure modi perspiciatis doloribus adipisci illum minima sequi
        fuga velit necessitatibus.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </div>
  )
}
