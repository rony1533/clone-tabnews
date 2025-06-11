function status(request, response) {
  response.status(200).json({ chave: "ola testte bão" })
}

export default status;