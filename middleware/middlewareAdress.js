export default function ({ store, redirect }) {
  if (!store.state.address) {
    return redirect('/form')
  }
}
