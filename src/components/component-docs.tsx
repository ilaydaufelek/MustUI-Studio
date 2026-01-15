type PropItem = {
  prop: string
  type: string | string[]
}


type PropsTableProps = {
  items: PropItem[]
}
export default function PropsTable({ items }: PropsTableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-zinc-800/15 ">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-50 dark:bg-black">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-400">
              Prop
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-400">
              Type
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.prop}
              className="border-t border-zinc-800/15  hover:bg-gray-50 hover:dark:bg-zinc-900 dark:bg-black"
            >
              <td className="px-4 py-2 font-mono text-gray-900  dark:text-gray-100">
                {item.prop}
              </td>

              <td className="px-4 py-2">
                {Array.isArray(item.type) ? (
                  <div className="flex flex-wrap gap-2">
                    {item.type.map((value) => (
                      <span
                        key={value}
                        className="rounded-md bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 font-mono text-xs text-gray-800 dark:text-gray-100"
                      >
                        "{value}"
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="font-mono text-gray-800 dark:text-gray-100 ">
                    {item.type}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}