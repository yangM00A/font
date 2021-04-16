export default {
  httpResp(context, obj) {
    setTimeout(() => {
      context.commit('edit', obj)
    }, 2000)
  }
}
