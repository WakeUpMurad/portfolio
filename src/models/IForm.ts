export interface IForm {
  title: string
  handleSubmit: (email: string, password: string, remember: boolean) => void
}
