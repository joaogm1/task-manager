import { Component, OnInit, PipeTransform } from '@angular/core'
import { Task } from '../../../model/task.model'
import { DecimalPipe } from '@angular/common'
import { map, Observable, startWith } from 'rxjs'
import { FormControl } from '@angular/forms'

const tarefas: Task[] = [
  {
    id: '1',
    nome: 'Fazer Atividade 1',
    nota: 8,
    dataInicio: new Date('2022-01-15'),
    dataFinal: new Date('2022-01-18'),
    concluido: 'Sim',
  },
  {
    id: '2',
    nome: 'Academia',
    nota: 6,
    dataInicio: new Date('2022-01-8'),
    dataFinal: new Date('2022-01-28'),
    concluido: 'Não',
  },
  {
    id: '3',
    nome: 'Fazer Atividade 3',
    nota: 5,
    dataInicio: new Date('2022-01-1'),
    dataFinal: new Date('2022-01-09'),
    concluido: 'Sim',
  },
]

function search(text: string, pipe: PipeTransform): Task[] {
  return tarefas.filter(tarefa => {
    const term = text.toLowerCase()

    return tarefa.nome.toLowerCase().includes(term)
  })
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [DecimalPipe],
})
export class TaskListComponent {
  tarefas$: Observable<Task[]>
  filter = new FormControl('')

  constructor(pipe: DecimalPipe) {
    this.tarefas$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe)),
    )
  }
}
