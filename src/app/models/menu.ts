export enum MenuType {
  SCREEN = 'screen',
  MOUSE = 'mouse',
  PLANT = 'plant',
  CHAIR = 'chair',
  LAMP = 'lamp'
}

export type MenuList = Menu[]

export interface Menu {
  type: MenuType
  menuTitle: Link
  links: LinkTree[]
}

interface LinkTree {
  mainLink: Link
  subLinks?: Link[]
}

interface Link {
  title: string
  url: string
}
