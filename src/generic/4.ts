/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentType{
    title: string,
}
interface PageType{
  ():void
}

class Component<T extends ComponentType> {
  constructor (public props:T) {

  }
}

class Page<PageType> extends Component<ComponentType> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};