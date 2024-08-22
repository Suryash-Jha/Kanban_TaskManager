import React from 'react'
import './style.css'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
const TaskItem = ({id, task}) => {
    const {attributes, listeners, setNodeRef, transform, transition}= useSortable({
        id: id,
    })
    // console.log('attributes', attributes)
    // console.log('listeners', listeners)
    // console.log('setNodeRef', setNodeRef)
    // console.log('transform', transform)
    // console.log('transition', transition)
    
  return (
        <h1 
        key={id}
        ref={setNodeRef}
        style={{
            transform: CSS.Transform.toString(transform),
            transition,
        }}
        {...attributes}
        {...listeners}
        >
            {id} . {task}
            </h1>
  )
}

export default TaskItem