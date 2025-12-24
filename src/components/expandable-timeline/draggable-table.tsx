"use client"

import { type CSSProperties, useEffect, useId, useState, useMemo } from "react"
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers"
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  type Cell,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type Header,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDownIcon, ChevronUpIcon, GripVerticalIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Item = {
  id: string
  name: string
  email: string
  location: string
  flag: string
  status: "Active" | "Inactive" | "Pending"
  balance: number
}

const allColumns: ColumnDef<Item>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => <div className="truncate font-medium">{row.getValue("name")}</div>,
    sortUndefined: "last",
    sortDescFirst: false,
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            status === "Active"
              ? "bg-gray-800 text-green-400"
              : status === "Pending"
                ? "bg-gray-800 text-yellow-400"
                : "bg-gray-800 text-gray-400"
          }`}
        >
          {status}
        </span>
      )
    },
  },
  {
    id: "location",
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) => (
      <div className="truncate">
        <span className="text-lg leading-none">{row.original.flag}</span> {row.getValue("location")}
      </div>
    ),
  },
  {
    id: "balance",
    header: "Balance",
    accessorKey: "balance",
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("balance"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
      return formatted
    },
  },
]

export default function DraggableTable() {
  const isMobile = useMediaQuery("(max-width: 640px)")
  const [data, setData] = useState<Item[]>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnOrder, setColumnOrder] = useState<string[]>([])
  const [isColumnOrderInitialized, setIsColumnOrderInitialized] = useState(false)

  const columns = useMemo(() => {
    if (isMobile) {
      return allColumns.filter((col) => col.id === "name" || col.id === "status")
    }
    return allColumns
  }, [isMobile])

  useEffect(() => {
    const newColumnOrder = columns.map((column) => column.id as string)
    setColumnOrder(newColumnOrder)
    setIsColumnOrderInitialized(true)
  }, [columns])

  useEffect(() => {
    setData([
      {
        id: "1",
        name: "Wireframes",
        email: "design@example.com",
        location: "Design Team",
        flag: "🎨",
        status: "Active",
        balance: 0,
      },
      {
        id: "2",
        name: "Mockups",
        email: "ui@example.com",
        location: "UI Team",
        flag: "🖌️",
        status: "Pending",
        balance: 1500,
      },
      {
        id: "3",
        name: "Prototypes",
        email: "ux@example.com",
        location: "UX Team",
        flag: "📱",
        status: "Inactive",
        balance: 2500,
      },
    ])
  }, [])

  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
    enableSortingRemoval: false,
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setColumnOrder((prevOrder) => {
        const oldIndex = prevOrder.indexOf(active.id as string)
        const newIndex = prevOrder.indexOf(over.id as string)
        return arrayMove(prevOrder, oldIndex, newIndex)
      })
    }
  }

  const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}))

  const tableRowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
    <DndContext
      id={useId()}
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      {isColumnOrderInitialized ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="border border-gray-800 rounded-md overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id} className="bg-black border-b border-gray-800">
                      <SortableContext items={columnOrder} strategy={horizontalListSortingStrategy}>
                        {headerGroup.headers.map((header) => (
                          <DraggableTableHeader key={header.id} header={header} />
                        ))}
                      </SortableContext>
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row, i) => (
                      <motion.tr
                        key={row.id}
                        className="border-b border-gray-800 transition-colors hover:bg-gray-900"
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={tableRowVariants}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <SortableContext key={cell.id} items={columnOrder} strategy={horizontalListSortingStrategy}>
                            <DragAlongCell key={cell.id} cell={cell} />
                          </SortableContext>
                        ))}
                      </motion.tr>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="h-[200px] flex items-center justify-center">
          <div className="text-gray-500">Loading table...</div>
        </div>
      )}
    </DndContext>
  )
}

const DraggableTableHeader = ({
  header,
}: {
  header: Header<Item, unknown>
}) => {
  const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
    id: header.column.id,
  })

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: "relative",
    transform: CSS.Translate.toString(transform),
    transition,
    whiteSpace: "nowrap",
    width: header.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  }

  return (
    <TableHead
      ref={setNodeRef}
      className="text-gray-300 h-10 border-t border-gray-800"
      style={style}
      aria-sort={
        header.column.getIsSorted() === "asc"
          ? "ascending"
          : header.column.getIsSorted() === "desc"
            ? "descending"
            : "none"
      }
    >
      <div className="flex items-center justify-start gap-0.5">
        <Button
          size="icon"
          variant="ghost"
          className="-ml-2 size-7 shadow-none text-gray-400 hover:text-white hover:bg-transparent"
          {...attributes}
          {...listeners}
          aria-label="Drag to reorder"
        >
          <GripVerticalIcon className="opacity-60" size={16} aria-hidden="true" />
        </Button>
        <span className="grow truncate text-xs sm:text-sm">
          {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
        </span>
        <Button
          size="icon"
          variant="ghost"
          className="group -mr-1 size-7 shadow-none text-gray-400 hover:text-white hover:bg-transparent"
          onClick={header.column.getToggleSortingHandler()}
          onKeyDown={(e) => {
            if (header.column.getCanSort() && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault()
              header.column.getToggleSortingHandler()?.(e)
            }
          }}
        >
          {{
            asc: <ChevronUpIcon className="shrink-0 opacity-60" size={16} aria-hidden="true" />,
            desc: <ChevronDownIcon className="shrink-0 opacity-60" size={16} aria-hidden="true" />,
          }[header.column.getIsSorted() as string] ?? (
            <ChevronUpIcon className="shrink-0 opacity-0 group-hover:opacity-60" size={16} aria-hidden="true" />
          )}
        </Button>
      </div>
    </TableHead>
  )
}

const DragAlongCell = ({ cell }: { cell: Cell<Item, unknown> }) => {
  const { isDragging, setNodeRef, transform, transition } = useSortable({
    id: cell.column.id,
  })

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: "relative",
    transform: CSS.Translate.toString(transform),
    transition,
    width: cell.column.getSize(),
    zIndex: isDragging ? 1 : 0,
  }

  return (
    <TableCell ref={setNodeRef} className="truncate text-gray-300 p-2 sm:p-3 text-xs sm:text-sm" style={style}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  )
}
