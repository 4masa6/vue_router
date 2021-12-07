export default {
  name: 'HelloJSX',
  data() {
    return {
      title: 'HelloJSX',
      message: 'This is sample message.',
    }
  },
  render(h) {
    return (
      <div className="alert alert-primary">
        <h2>{this.title}</h2>
        <p>{this.message}</p>
      </div>
    )
  }
}
