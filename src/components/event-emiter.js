/* 
   *********** EVENT EMITTER *************
 */

export class EventEmitter {

  //здесь хранятся события, т.е. функции
  constructor() {
    this.eventsMap = [];
  }

  // принимает функцию, которая вызовется когда будет инициализировано это событие 
  subscribe(handler) {
    this.eventsMap.push(handler);
  }

  // генерирует события
  // data - данные, которые будут отправляться в момент этого события
  emit(data) {
    for (const event of this.eventsMap) {
      event(data);
    }
  }
}
