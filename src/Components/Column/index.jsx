import { closestCorners, DndContext } from '@dnd-kit/core'
import React from 'react'
import TaskItem from '../TaskItem'
import { tasks } from '../../Data/dummyData'

const Column = () => {
  return (
    <DndContext collisionDetection={closestCorners}>
      {tasks && tasks.map((task) => {
        return <TaskItem key={task.id} id={task.id} task={task.task} />
      })
    }
    </DndContext>
  )
}

export default Column